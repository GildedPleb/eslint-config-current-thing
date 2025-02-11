// PathMark: ./src/conflicts/helpers.ts

/* eslint-disable security/detect-object-injection -- needed */
import { ESLint } from "eslint";
import type { Rules } from "eslint-define-config";
// eslint-disable-next-line import/no-extraneous-dependencies -- needed
import memoize from "fast-memoize";

import { hashObject, hashString } from "../helpers";
import type {
  ConfigData,
  ConflictCache,
  DiffReturn,
  Files,
  IFlatESLint,
  RuleConfig,
} from "./types";

/**
 *
 * @param overrideConfigFile - The location for the file
 * @param rules - optional additional rules
 * @returns an eslint instance and the json representation
 */
export function linter(
  overrideConfigFile: string,
  rules?: Partial<Rules>,
): ESLint {
  return new ESLint({
    cache: true,
    fix: true,
    overrideConfigFile,
    ...(rules === undefined ? {} : { overrideConfig: { rules } }),
  });
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
  rules?: Partial<Rules>,
): Promise<[IFlatESLint, ConfigData | undefined, string]> {
  const eslint = linter(overrideConfigFile, rules);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- we own it
  const json = (await eslint.calculateConfigForFile(filePath)) as
    | ConfigData
    | undefined;
  const hash = hashObject({ json });
  return [eslint, json, hash];
}

export const getLinter = memoize(getLinterRaw);

const memoizedLintText = memoize(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- The unused var is used and needed internally
  async (es: IFlatESLint, code: string, opt: Files, _hash: string) =>
    es.lintText(code, opt),
  {
    serializer: ([, code, { filePath }, hash]) =>
      hashString(`${code}${hash}${filePath}`),
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

  const [{ output: output1 }] = results1B;
  const [{ output: output2 }] = results2B;

  return [output1, output2];
}

// Using fast-memoize with TypeScript
export const getDiff = memoize(getDiffRaw, {
  // eslint-disable-next-line unicorn/no-unreadable-array-destructuring -- it doesn't need to be readable
  serializer: ([{ filePath }, codeToLint, [, , hash1], [, , hash2]]): string =>
    hashString(`${codeToLint}${hash1}${hash2}${filePath}`),
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
  const [{ output: output1 }] = results0;
  const results1 = await memoizedLintText(subRule, output1 ?? "", opt, subHash);
  if (!("output" in results1[0])) return [undefined, undefined];
  const results2 = await memoizedLintText(
    main,
    results1[0].output ?? "",
    opt,
    mainHash,
  );
  const [{ output: output2 }] = results2;
  return [output1, output2];
}

export const isRuleOff = (rule: RuleConfig): boolean =>
  typeof rule === "number" || typeof rule === "string"
    ? rule === 0 || rule === "off"
    : rule[0] === "off" || rule[0] === 0;

export const mergeIncompatible = (
  newRules: ConflictCache,
  oldRules: ConflictCache,
): Record<string, Partial<Rules>> => {
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
): Record<string, Partial<Rules>> => {
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
  ruleSetting: RuleConfig,
): string {
  return hashString(hash + ruleName + hashObject({ ruleSetting }));
}

// Using fast-memoize with TypeScript
export const cloneWithRule = memoize(cloneWithRuleRaw, {
  serializer: ([hash, ruleName, ruleSetting]) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this is good enough
    hashString(hash + ruleName + hashObject({ ruleSetting })),
});

// EOF
