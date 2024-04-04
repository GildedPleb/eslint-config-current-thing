/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable security/detect-object-injection */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
// PathMark: ./src/conflicts/get-incompatibles.ts

// eslint-disable-next-line import/no-extraneous-dependencies
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import { hashObject, printDiffLines } from "../helpers";
import commentsJsCodeToLint from "./code-samples/comments";
import commentsTsCodeToLint from "./code-samples/comments-ts";
import encCodeToLint from "./code-samples/encoding";
import inconsistentKeys from "./code-samples/inconsistent-keys";
import jsCodeToLint from "./code-samples/javascript";
import testCodeToLint from "./code-samples/js.test";
import jsxCodeToLint from "./code-samples/jsx";
import tsCodeToLintObjectNull from "./code-samples/object-null";
import regexCodeToLint from "./code-samples/regex";
import tsxCodeToLint from "./code-samples/tsx";
import tsCodeToLint from "./code-samples/typescript";
import configList from "./configs";
import {
  add0Rule,
  getDiff,
  getLinter,
  getSimpleDiff,
  isRuleOff,
  mergeIncompatible,
} from "./helpers";
import { type Combinations, type ConflictCache, type Rule } from "./types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const skipCache = process.argv.slice(2)[0] === "skipCache";
if (skipCache) {
  console.log(chalk.inverse("Skipping the Cache for this run."));
}

const combinations: Combinations = [];
for (let index = 0; index < configList.length; index++) {
  for (let bIndex = index + 1; bIndex < configList.length; bIndex++) {
    combinations.push([configList[index], configList[bIndex]]);
  }
}

// ******************************************* //
// Lets figure out the Configs that conflict.  //
// ******************************************* //

let fullConflictList: ConflictCache = {};

interface FileList {
  def: string;
  filePath: string;
  short: string;
}

const fileList: FileList[] = [
  {
    def: jsCodeToLint,
    filePath: "./src/conflicts/code-samples/javascript.js",
    short: "js",
  },
  {
    def: tsCodeToLint,
    filePath: "./src/conflicts/code-samples/typescript.ts",
    short: "ts",
  },
  {
    def: jsxCodeToLint,
    filePath: "./src/conflicts/code-samples/jsx.jsx",
    short: "jsx",
  },
  {
    def: tsxCodeToLint,
    filePath: "./src/conflicts/code-samples/tsx.tsx",
    short: "tsx",
  },
  {
    def: testCodeToLint,
    filePath: "./src/conflicts/code-samples/js.test.js",
    short: "test",
  },
  {
    def: regexCodeToLint,
    filePath: "./src/conflicts/code-samples/regex.js",
    short: "regex",
  },
  {
    def: encCodeToLint,
    filePath: "./src/conflicts/code-samples/encoding.js",
    short: "encoding",
  },
  {
    def: commentsJsCodeToLint,
    filePath: "./src/conflicts/code-samples/comments.js",
    short: "comments-js",
  },
  {
    def: commentsTsCodeToLint,
    filePath: "./src/conflicts/code-samples/comments-ts.ts",
    short: "comments-ts",
  },
  {
    def: inconsistentKeys,
    filePath: "./src/conflicts/code-samples/inconsistent-keys.js",
    short: "inconsistent-keys",
  },
  {
    def: tsCodeToLintObjectNull,
    filePath: "./src/conflicts/code-samples/object-null.ts",
    short: "object-null",
  },
];

for await (const { def: codeToLint, filePath, short } of fileList) {
  const database = new Level(`./conflict-cache-${short}`, {
    valueEncoding: "json",
  });

  const opt = { filePath };
  console.log("\n\nProcessing filetype:", chalk.red(filePath), "\n");

  try {
    const linters = [];

    for await (const [config1, config2] of combinations) {
      const { location: config1Path, name: name1 } = config1;
      const { location: config2Path, name: name2 } = config2;
      const currentCheck = `${chalk.green(short)}: ${chalk.blue(name1)} ${chalk.blue("-vs-")} ${chalk.blue(name2)}`;
      const [es1, json1] = await getLinter(filePath, config1Path);
      const [es2, json2] = await getLinter(filePath, config2Path);
      const keyHash = hashObject({ codeToLint, filePath, json1, json2 });
      let fullConfig: ConflictCache = {};

      try {
        if (skipCache) throw new Error("Skipping the cache.");
        const previous = await database.get(`conflicts-${keyHash}`);
        fullConfig = JSON.parse(previous) as ConflictCache;
        console.log(`${currentCheck} - Cache Hit. No need to process further.`);
      } catch {
        const [output1, output2] = await getDiff(opt, codeToLint, es1, es2);
        if (
          output1 === undefined ||
          output2 === undefined ||
          output1 === output2 ||
          json1?.rules === undefined ||
          json2?.rules === undefined ||
          Object.keys(json1.rules).length === 0 ||
          Object.keys(json2.rules).length === 0
        ) {
          console.log(`${currentCheck} - No conflicts!`);
          await database.put(`conflicts-${keyHash}`, JSON.stringify({}));
          continue;
        }

        console.log(
          `${currentCheck} - Superficially incompatible, ${chalk.red("queueing")}:`,
        );

        printDiffLines(output1, output2);
        linters.push({
          config1,
          config2,
          currentCheck,
          es1,
          es2,
          json1,
          json2,
          keyHash,
        });
      }

      fullConflictList = mergeIncompatible(fullConfig, fullConflictList);
    }

    // ************************************************************************* //
    // Lets figure out the specific rules that conflict of conflicting configs.  //
    // ************************************************************************* //

    for await (const lint of linters) {
      const { config1, config2, currentCheck, es1, es2, json1, json2 } = lint;
      const { location: config1Path, name: name1 } = config1;
      const { location: config2Path, name: name2 } = config2;
      const json1Rules = json1.rules ?? {};
      const json2Rules = json2.rules ?? {};
      const json1RuleList = Object.entries(json1Rules);
      const json1RulesZeroed = Object.fromEntries(
        json1RuleList.map(([rule]) => [rule, 0 as Rule]),
      );
      const json2RuleList = Object.entries(json2Rules);
      const json2RulesZeroed = Object.fromEntries(
        json2RuleList.map(([rule]) => [rule, 0 as Rule]),
      );
      let conflictList: ConflictCache = {};

      mid: for await (const [ruleName, ruleSetting] of json1RuleList) {
        if (isRuleOff(ruleSetting)) continue mid;
        const jsonOneRule = JSON.parse(JSON.stringify(json1)) as Record<
          string,
          Record<string, Rule>
        >;
        jsonOneRule.rules = { [ruleName]: ruleSetting };
        const innerKeyHash = hashObject({
          codeToLint,
          filePath,
          json: json2,
          jsonOneRule,
        });
        let innerConfigList: ConflictCache = {};
        // Console.log({ innerKeyHash });
        try {
          if (skipCache) throw new Error("Skipping the cache.");
          const previous = await database.get(`conflicts-${innerKeyHash}`);
          innerConfigList = JSON.parse(previous) as ConflictCache;
        } catch {
          json1RulesZeroed[ruleName] = ruleSetting;
          const [es1OneRule] = await getLinter(
            filePath,
            config1Path,
            json1RulesZeroed,
          );
          readline.cursorTo(process.stdout, 0);
          const out = `${currentCheck} - Now checking: ${name2} -vs- ${name1}/${ruleName}`;
          process.stdout.write(out.padEnd(150, " "));
          const [output1, output2] = await getSimpleDiff(
            opt,
            codeToLint,
            es2,
            es1OneRule,
          );
          if (
            output1 === undefined ||
            output2 === undefined ||
            output1 === output2
          ) {
            json1RulesZeroed[ruleName] = 0;
            if (!skipCache) {
              await database.put(
                `conflicts-${innerKeyHash}`,
                JSON.stringify(innerConfigList),
              );
            }

            continue mid;
          }

          console.log(`\nConfig incompatible with rule:`);
          printDiffLines(output1, output2);
          if (!(ruleName in json2Rules)) {
            innerConfigList = add0Rule(innerConfigList, name2, ruleName);
          }

          if (!skipCache) {
            await database.put(
              `conflicts-${innerKeyHash}`,
              JSON.stringify(innerConfigList),
            );
          }
        }

        conflictList = mergeIncompatible(innerConfigList, conflictList);
        json1RulesZeroed[ruleName] = 0;
      }

      mid: for await (const [ruleName, rule1Setting] of json2RuleList) {
        if (isRuleOff(rule1Setting)) continue mid;
        const jsonOneRule = JSON.parse(JSON.stringify(json2)) as Record<
          string,
          Record<string, Rule>
        >;
        jsonOneRule.rules = { [ruleName]: rule1Setting };
        const innerKeyHash = hashObject({
          codeToLint,
          filePath,
          json: json1,
          jsonOneRule,
        });
        let innerConfigList: ConflictCache = {};
        try {
          if (skipCache) throw new Error("Skipping the cache");
          const previous = await database.get(`conflicts-${innerKeyHash}`);
          innerConfigList = JSON.parse(previous) as ConflictCache;
        } catch {
          json2RulesZeroed[ruleName] = rule1Setting;
          const [es2OneRule] = await getLinter(
            filePath,
            config2Path,
            json2RulesZeroed,
          );
          readline.cursorTo(process.stdout, 0);
          const out = `${currentCheck} - Now checking: ${name1} -vs- ${name2}/${ruleName}`;
          process.stdout.write(out.padEnd(150, " "));
          const [output1, output2] = await getSimpleDiff(
            opt,
            codeToLint,
            es1,
            es2OneRule,
          );
          if (
            output1 === undefined ||
            output2 === undefined ||
            output1 === output2
          ) {
            if (!skipCache) {
              await database.put(
                `conflicts-${innerKeyHash}`,
                JSON.stringify(innerConfigList),
              );
            }

            json2RulesZeroed[ruleName] = 0;
            continue mid;
          }

          console.log(`\nConfig incompatible with rule:`);
          printDiffLines(output1, output2);
          if (!(ruleName in json1Rules)) {
            conflictList = add0Rule(conflictList, name1, ruleName);
          }

          if (!skipCache) {
            await database.put(
              `conflicts-${innerKeyHash}`,
              JSON.stringify(innerConfigList),
            );
          }
        }

        conflictList = mergeIncompatible(innerConfigList, conflictList);
        json2RulesZeroed[ruleName] = 0;
      }

      const out = `\n${currentCheck} - Finished Mid Processing.`;
      process.stdout.write(out.padEnd(150, " "));
      readline.cursorTo(process.stdout, 0);
      fullConflictList = mergeIncompatible(conflictList, fullConflictList);
    }

    let upToDate = false;

    // For each config compare the set:
    for await (const lint of linters) {
      const { config1, config2, currentCheck, json1, json2, keyHash } = lint;
      const { location: path1, name: name1 } = config1;
      const { location: path2, name: name2 } = config2;
      const json1Rules = json1.rules ?? {};
      const json2Rules = json2.rules ?? {};
      const json1RulesList = Object.entries(json1Rules);
      const json1RulesZeroed = Object.fromEntries(
        json1RulesList.map(([rule]) => [rule, 0 as Rule]),
      );
      const json2RulesList = Object.entries(json2Rules);
      const json2Rules0ed = Object.fromEntries(
        json2RulesList.map(([rule]) => [rule, 0 as Rule]),
      );
      let temporaryList: ConflictCache = {};
      mid: for await (const [
        json1RuleName,
        json1RuleSetting,
      ] of json1RulesList) {
        if (isRuleOff(json1RuleSetting)) continue mid;
        const json1OneRule = JSON.parse(JSON.stringify(json1)) as Record<
          string,
          Record<string, Rule>
        >;
        json1OneRule.rules = { [json1RuleName]: json1RuleSetting };
        json1RulesZeroed[json1RuleName] = json1RuleSetting;
        const [es1OneRule] = await getLinter(filePath, path1, json1RulesZeroed);
        inner: for await (const [
          json2RuleName,
          json2RuleSetting,
        ] of json2RulesList) {
          readline.cursorTo(process.stdout, 0);

          if (isRuleOff(json2RuleSetting)) continue inner;
          if (json2RuleName === json1RuleName) {
            const out = `${currentCheck} - Same/same skipping: ${json1RuleName}`;
            process.stdout.write(out.padEnd(150, " "));
            continue inner;
          }

          const json2OneRule = JSON.parse(JSON.stringify(json2)) as Record<
            string,
            Record<string, Rule>
          >;
          json2OneRule.rules = { [json2RuleName]: json2RuleSetting };
          const innerKeyHash = hashObject({
            codeToLint,
            filePath,
            json1OneRule,
            json2OneRule,
          });
          const innerKeyHash2 = hashObject({
            codeToLint,
            filePath,
            json1OneRule: json2OneRule,
            json2OneRule: json1OneRule,
          });
          let innerConfigList: ConflictCache = {};
          try {
            if (skipCache) throw new Error("Skipping the cache");
            const previous = await database.get(`conflicts-${innerKeyHash}`);
            innerConfigList = JSON.parse(previous) as ConflictCache;
            const out = `${upToDate ? "\n" : ""}${currentCheck} - Inner Cache Hit: ${json1RuleName} -vs- ${json2RuleName}`;
            process.stdout.write(out.padEnd(150, " "));
          } catch {
            upToDate = true;
            const out = `${currentCheck} - Now checking: ${json1RuleName} -vs- ${json2RuleName}`;
            process.stdout.write(out.padEnd(150, " "));
            json2Rules0ed[json2RuleName] = json2RuleSetting;
            const [es2OneRule] = await getLinter(
              filePath,
              path2,
              json2Rules0ed,
            );
            const [output1, output2] = await getDiff(
              opt,
              codeToLint,
              es1OneRule,
              es2OneRule,
            );
            if (
              output1 === undefined ||
              output2 === undefined ||
              output1 === output2
            ) {
              json2Rules0ed[json2RuleName] = 0;
              if (!skipCache) {
                await database.put(
                  `conflicts-${innerKeyHash}`,
                  JSON.stringify(innerConfigList),
                );
                await database.put(
                  `conflicts-${innerKeyHash2}`,
                  JSON.stringify(innerConfigList),
                );
              }

              continue inner;
            }

            console.log(`\nRules incompatible:`);
            printDiffLines(output1, output2);
            if (!(json2RuleName in json1Rules)) {
              innerConfigList = add0Rule(innerConfigList, name1, json2RuleName);
            }

            if (!(json1RuleName in json2Rules)) {
              innerConfigList = add0Rule(innerConfigList, name2, json1RuleName);
            }

            json2Rules0ed[json2RuleName] = 0;
            if (!skipCache) {
              await database.put(
                `conflicts-${innerKeyHash}`,
                JSON.stringify(innerConfigList),
              );
              await database.put(
                `conflicts-${innerKeyHash2}`,
                JSON.stringify(innerConfigList),
              );
            }
          }

          temporaryList = mergeIncompatible(innerConfigList, temporaryList);
        }

        json1RulesZeroed[json1RuleName] = 0;
      }

      fullConflictList = mergeIncompatible(temporaryList, fullConflictList);
      if (!skipCache) {
        await database.put(
          `conflicts-${keyHash}`,
          JSON.stringify(temporaryList),
        );
      }

      console.log(`\n${currentCheck} - Processing finished.`);
    }
  } catch (error) {
    console.error("Error during ESLint setup or linting process:", error);
  }
}

console.log({ fullConflictList });

const generateCode = `// PathMark: ./src/conflicts/incompatibilities.ts
import { type ConflictCache } from "./types";

const incompatibles: ConflictCache = ${JSON.stringify(fullConflictList, undefined, 2)};

export default incompatibles;
// EOF
`;

const relative = `./incompatibilities.ts`;
const outputPath = path.join(dirname, relative);

try {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFileSync(outputPath, generateCode, "utf8");
  console.log("\n./incompatibilities.js has been updated successfully.");
} catch (error) {
  console.error("Error processing the ./incompatibilities.js file:", error);
  throw new Error("Failed");
}

// EOF
