// PathMark: ./src/conflicts/helpers.ts
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable security/detect-object-injection */
import ESLint from "eslint/use-at-your-own-risk";
// eslint-disable-next-line import/no-extraneous-dependencies
import memoize from "fast-memoize";

import { hashObject, hashString } from "../helpers";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  type ConfigData,
  type ConflictCache,
  type DiffReturn,
  type Files,
  type IFlatESLint,
  type Rule,
} from "./types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore this needs to be like this or there is a compile error.
const { FlatESLint } = ESLint;

/**
 *
 * @param overrideConfigFile - The location for the file
 * @param rules - optional additional rules
 * @returns an eslint instance and the json representation
 */
export function linter(
  overrideConfigFile: string,
  rules?: Record<string, Rule>,
): IFlatESLint {
  return new FlatESLint({
    cache: true,
    fix: true,
    overrideConfigFile,
    ...(rules === undefined ? {} : { overrideConfig: { rules } }),
  }) as IFlatESLint;
}

/**
 *
 * @param filePath - File Path
 * @param overrideConfigFile - The location for the file
 * @param rules - optional additional rules
 * @returns an eslint instance and the json representation
 */
async function getLinterRaw(
  filePath: string,
  overrideConfigFile: string,
  rules?: Record<string, Rule>,
): Promise<[IFlatESLint, ConfigData | undefined, string]> {
  const eslint = linter(overrideConfigFile, rules);
  const json = await eslint.calculateConfigForFile(filePath);
  const hash = hashObject({ json });
  return [eslint, json, hash];
}

export const getLinter = memoize(getLinterRaw);

const memoizedLintText = memoize(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (es: IFlatESLint, code: string, opt: Files, _hash: string) =>
    es.lintText(code, opt),
  {
    serializer: (arguments_) => {
      const [, code, opt, hash] = arguments_ as [
        x: unknown,
        code: string,
        opt: Files,
        hash: string,
      ];
      return hashString(code + hash + opt.filePath);
    },
  },
);

/**
 * This lints the same file multiple times
 * @param opt - the options to pass to the configs
 * @param codeToLint - the code to lint
 * @param config1 - [IFlatESLint, ConfigData] for config 1
 * @param config2 - [IFlatESLint, ConfigData] for config 2
 * @returns a tuple of each output
 */
async function getDiffRaw(
  opt: Files,
  codeToLint: string,
  config1: [IFlatESLint, ConfigData | undefined, string],
  config2: [IFlatESLint, ConfigData | undefined, string],
): DiffReturn {
  const [es1, , hash1] = config1;
  const [es2, , hash2] = config2;
  const [results1Z, results2Z] = await Promise.all([
    memoizedLintText(es1, codeToLint, opt, hash1),
    memoizedLintText(es2, codeToLint, opt, hash2),
  ]);

  if (!("output" in results1Z[0]) || !("output" in results2Z[0])) {
    return [undefined, undefined];
  }

  const [results1A, results2A] = await Promise.all([
    memoizedLintText(es1, results2Z[0].output ?? "", opt, hash1),
    memoizedLintText(es2, results1Z[0].output ?? "", opt, hash2),
  ]);

  if (!("output" in results1A[0]) || !("output" in results2A[0])) {
    return [undefined, undefined];
  }

  const [results1B, results2B] = await Promise.all([
    memoizedLintText(es1, results2A[0].output ?? "", opt, hash1),
    memoizedLintText(es2, results1A[0].output ?? "", opt, hash2),
  ]);

  const output1 = results1B[0].output;
  const output2 = results2B[0].output;

  return [output1, output2];
}

// Using fast-memoize with TypeScript
export const getDiff = memoize(getDiffRaw, {
  serializer: (arguments_: unknown[]): string => {
    // eslint-disable-next-line unicorn/no-unreadable-array-destructuring
    const [opt, codeToLint, [, , hash1], [, , hash2]] = arguments_ as [
      Files,
      string,
      [IFlatESLint, ConfigData | undefined, string],
      [IFlatESLint, ConfigData | undefined, string],
    ];
    return hashString(codeToLint + hash1 + hash2 + opt.filePath);
  },
});

/**
 * Lints the same file multiple times.
 * @param opt - The options to pass to the configs.
 * @param codeToLint - The code
 * @param esMain - the main config
 * @param esSub - the sub config
 * @returns a diff
 */
export async function getSimpleDiff(
  opt: Files,
  codeToLint: string,
  esMain: [IFlatESLint, string],
  esSub: [IFlatESLint, string],
): DiffReturn {
  const [main, mainHash] = esMain;
  const [subRule, subHash] = esSub;
  const results = await memoizedLintText(subRule, codeToLint, opt, subHash);
  if (!("output" in results[0])) return [undefined, undefined];
  const results0 = await memoizedLintText(
    main,
    results[0].output ?? "",
    opt,
    mainHash,
  );
  if (!("output" in results0[0])) return [undefined, undefined];
  const output1 = results0[0].output;
  const results1 = await memoizedLintText(subRule, output1 ?? "", opt, subHash);
  if (!("output" in results1[0])) return [undefined, undefined];
  const results2 = await memoizedLintText(
    main,
    results1[0].output ?? "",
    opt,
    mainHash,
  );
  const output2 = results2[0].output;
  return [output1, output2];
}

export const isRuleOff = (rule: Rule): boolean =>
  typeof rule === "number" || typeof rule === "string"
    ? rule === 0 || rule === "off"
    : rule[0] === "off" || rule[0] === 0;

export const mergeIncompatible = (
  newRules: ConflictCache,
  oldRules: ConflictCache,
): Record<string, Record<string, Rule>> => {
  const fullList = { ...oldRules };
  for (const newRule of Object.keys(newRules)) {
    fullList[newRule] =
      newRule in oldRules
        ? {
            ...oldRules[newRule],
            ...newRules[newRule],
          }
        : newRules[newRule];
  }

  return fullList;
};

export const add0Rule = (
  list: ConflictCache,
  name: string,
  rule: string,
): Record<string, Record<string, Rule>> => {
  const newList = { ...list };
  newList[name] =
    name in list
      ? {
          ...list[name],
          [rule]: 0,
        }
      : { [rule]: 0 };
  return newList;
};

export const compatible = (
  output1: string | undefined,
  output2: string | undefined,
): boolean =>
  output1 === undefined || output2 === undefined || output1 === output2;
/**
 * Clones a JSON object and sets a specific rule.
 * @param hash - the key to memoize on
 * @param ruleName - The name of the rule to set.
 * @param ruleSetting - The setting for the rule.
 * @returns A new object with the specified rule set.
 */
function cloneWithRuleRaw(
  hash: string,
  ruleName: string,
  ruleSetting: Rule,
): string {
  return hashString(hash + ruleName + hashObject({ ruleSetting }));
}

// Using fast-memoize with TypeScript
export const cloneWithRule = memoize(cloneWithRuleRaw, {
  serializer: (arguments_: unknown[]): string => {
    const [hash, ruleName, ruleSetting] = arguments_ as [string, string, Rule];
    return hashString(hash + ruleName + hashObject({ ruleSetting }));
  },
});

// EOF
