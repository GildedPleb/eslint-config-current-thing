// PathMark: ./src/conflicts/helpers.ts
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable security/detect-object-injection */
import ESLint from "eslint/use-at-your-own-risk";

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

/** */
export async function getLinter(
  filePath: string,
  fileLocationConfig1: string,
  rules?: Record<string, Rule>,
): Promise<[IFlatESLint, ConfigData | undefined]> {
  const eslint = new FlatESLint({
    fix: true,
    overrideConfigFile: fileLocationConfig1,
    ...(rules === undefined ? {} : { overrideConfig: { rules } }),
  });
  const json = await eslint.calculateConfigForFile(filePath);
  return [eslint, json];
}

/** */
export async function getDiff(
  opt: Files,
  codeToLint: string,
  es1: IFlatESLint,
  es2: IFlatESLint,
): DiffReturn {
  const [results1Z, results2Z] = await Promise.all([
    es1.lintText(codeToLint, opt),
    es2.lintText(codeToLint, opt),
  ]);

  const [results1A, results2A] = await Promise.all([
    es1.lintText(results2Z[0].output ?? "", opt),
    es2.lintText(results1Z[0].output ?? "", opt),
  ]);
  // Test It:
  // console.log({ results1A, results2A });

  const [results1B, results2B] = await Promise.all([
    es1.lintText(results2A[0].output ?? "", opt),
    es2.lintText(results1A[0].output ?? "", opt),
  ]);
  // Test it:
  // console.log({ results1B, results2B });
  const output1 = results1B[0].output;
  const output2 = results2B[0].output;

  return [output1, output2];
}

/** */
export async function getSimpleDiff(
  opt: Files,
  codeToLint: string,
  main: IFlatESLint,
  subRule: IFlatESLint,
): DiffReturn {
  const results = await subRule.lintText(codeToLint, opt);
  const results0 = await main.lintText(results[0].output ?? "", opt);
  const output1 = results0[0].output;
  const results1 = await subRule.lintText(output1 ?? "", opt);
  const results2 = await main.lintText(results1[0].output ?? "", opt);
  const output2 = results2[0].output;
  return [output1, output2];
}

export const isRuleOff = (rule: Rule): boolean =>
  typeof rule === "number" || typeof rule === "string"
    ? rule === 0 || rule === "off"
    : rule[0] === "off" || rule[0] === 0;

/** */
export function mergeIncompatible(
  newRules: ConflictCache,
  oldRules: ConflictCache,
): Record<string, Record<string, Rule>> {
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
}

/** */
export function add0Rule(
  list: ConflictCache,
  name: string,
  rule: string,
): Record<string, Record<string, Rule>> {
  const newList = { ...list };
  newList[name] =
    name in list
      ? {
          ...list[name],
          [rule]: 0,
        }
      : { [rule]: 0 };
  return newList;
}

export const compatible = (
  output1: string | undefined,
  output2: string | undefined,
): boolean =>
  output1 === undefined || output2 === undefined || output1 === output2;
// EOF
