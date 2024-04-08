/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-depth */
/* eslint-disable security/detect-object-injection */
/* eslint-disable no-extra-label */
/* eslint-disable no-labels */
// PathMark: ./src/conflicts/get-incompatibles.ts

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { type BatchOperation, Level } from "level";

import { hashObject, printDiffLines } from "../helpers";
import fileList from "./code-samples";
import configList from "./configs";
import {
  add0Rule,
  compatible,
  getDiff,
  getLinter,
  getSimpleDiff,
  isRuleOff,
  mergeIncompatible,
} from "./helpers";
import fixables from "./plugins";
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

const getCache = async (
  database: Level<string, ConflictCache>,
  key: string,
): Promise<ConflictCache | undefined> => {
  try {
    if (skipCache) throw new Error("Skipping the cache.");
    return await database.get(`conflicts-${key}`);
  } catch {}

  return undefined;
};

for (const { configs, def: codeToLint, exclude, filePath, short } of fileList) {
  const database = new Level<string, ConflictCache>(
    `./conflict-cache-${short}`,
    { valueEncoding: "json" },
  );

  const opt = { filePath };
  console.log("\n\nProcessing filetype:", chalk.red(filePath), "\n");
  const linters = [];

  const filtered =
    configs === undefined
      ? combinations
      : combinations.filter(
          ([config1, config2]) =>
            configs.includes(config1.name) || configs.includes(config2.name),
        );

  const excluded =
    exclude === undefined
      ? filtered
      : filtered.filter(
          ([config1, config2]) =>
            !exclude.includes(config1.name) && !exclude.includes(config2.name),
        );

  for (const [config1, config2] of excluded) {
    const { location: config1Path, name: name1 } = config1;
    const { location: config2Path, name: name2 } = config2;
    const currentCheck = `${chalk.green(short)}: ${chalk.blue(name1)} ${chalk.blue("-vs-")} ${chalk.blue(name2)}`;
    // This log is important in the case of missing Plugin Definitions
    console.log(currentCheck, "- Starting check...");
    const [es1, json1] = await getLinter(filePath, config1Path);
    const [es2, json2] = await getLinter(filePath, config2Path);

    // Utility to call out a particular rule when seen in a config.

    // const ruleToCheck = "prefer-arrow-callback";
    // if (json1?.rules !== undefined && ruleToCheck in json1.rules)
    //   console.log(name1, json1.rules[ruleToCheck]);
    // if (json2?.rules !== undefined && ruleToCheck in json2.rules)
    //   console.log(name2, json2.rules[ruleToCheck]);

    const keyHash = hashObject({ codeToLint, filePath, json1, json2 });
    const hasCache = await getCache(database, keyHash);

    if (hasCache !== undefined) {
      console.log(`${currentCheck} - Cache Hit. No need to process further.`);
      fullConflictList = mergeIncompatible(hasCache, fullConflictList);
      continue;
    }

    const [output1, output2] = await getDiff(opt, codeToLint, es1, es2);
    if (
      compatible(output1, output2) ||
      json1?.rules === undefined ||
      json2?.rules === undefined ||
      Object.keys(json1.rules).length === 0 ||
      Object.keys(json2.rules).length === 0
    ) {
      console.log(`${currentCheck} - No conflicts!`);
      await database.put(`conflicts-${keyHash}`, {});
      continue;
    }

    console.log(
      `${currentCheck} - Superficially incompatible, ${chalk.red("queueing")}:`,
    );

    printDiffLines(output1, output2);

    const rules1 = json1.rules ?? {};
    const rules2 = json2.rules ?? {};
    const rules1List = Object.entries<Rule>(rules1).filter(([ruleName]) =>
      fixables.has(ruleName),
    );
    const rules1Zeroed = Object.fromEntries(
      rules1List.map(([rule]) => [rule, 0 as Rule]),
    );
    const rules2List = Object.entries<Rule>(rules2).filter(([ruleName]) =>
      fixables.has(ruleName),
    );
    const rules2Zeroed = Object.fromEntries(
      rules2List.map(([rule]) => [rule, 0 as Rule]),
    );
    linters.push({
      config1,
      config2,
      currentCheck,
      keyHash,
      linter1: { es1, json1 },
      linter2: { es2, json2 },
      r1: { rules1, rules1List, rules1Zeroed },
      r2: { rules2, rules2List, rules2Zeroed },
    });
  }

  // ************************************************************************* //
  // Lets figure out the specific rules that conflict of conflicting configs.  //
  // ************************************************************************* //

  for (const lint of linters) {
    const {
      config1: { location: path1, name: name1 },
      config2: { location: path2, name: name2 },
      currentCheck,
      linter1: { es1, json1 },
      linter2: { es2, json2 },
      r1: { rules1, rules1List, rules1Zeroed },
      r2: { rules2, rules2List, rules2Zeroed },
    } = lint;

    let conflictList: ConflictCache = {};

    mid: for (const [ruleName, ruleSetting] of rules1List) {
      if (isRuleOff(ruleSetting) || ruleName in rules2) continue mid;
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

      const hasCache = await getCache(database, innerKeyHash);
      if (hasCache !== undefined) {
        conflictList = mergeIncompatible(hasCache, conflictList);
        continue mid;
      }

      rules1Zeroed[ruleName] = ruleSetting;
      const [es1OneRule] = await getLinter(filePath, path1, rules1Zeroed);
      readline.cursorTo(process.stdout, 0);
      const out = `${currentCheck} - Now checking: ${name2} -vs- ${name1} (${ruleName})`;
      process.stdout.write(out.padEnd(150, " "));
      const [output1, output2] = await getSimpleDiff(
        opt,
        codeToLint,
        es2,
        es1OneRule,
      );

      if (compatible(output1, output2)) {
        rules1Zeroed[ruleName] = 0;
        if (!skipCache) {
          await database.put(`conflicts-${innerKeyHash}`, {});
        }

        continue mid;
      }

      console.log(`\nConfig incompatible with rule:`);
      printDiffLines(output1, output2);

      const innerConfigList = add0Rule({}, name2, ruleName);

      if (!skipCache) {
        await database.put(`conflicts-${innerKeyHash}`, innerConfigList);
      }

      conflictList = mergeIncompatible(innerConfigList, conflictList);
      rules1Zeroed[ruleName] = 0;
    }

    mid: for (const [ruleName, rule1Setting] of rules2List) {
      if (isRuleOff(rule1Setting) || ruleName in rules1) continue mid;
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

      const hasCache = await getCache(database, innerKeyHash);
      if (hasCache !== undefined) {
        conflictList = mergeIncompatible(hasCache, conflictList);
        continue mid;
      }

      rules2Zeroed[ruleName] = rule1Setting;
      const [es2OneRule] = await getLinter(filePath, path2, rules2Zeroed);
      readline.cursorTo(process.stdout, 0);
      const out = `${currentCheck} - Now checking: ${name1} -vs- ${name2} (${ruleName})`;
      process.stdout.write(out.padEnd(150, " "));
      const [output1, output2] = await getSimpleDiff(
        opt,
        codeToLint,
        es1,
        es2OneRule,
      );
      if (compatible(output1, output2)) {
        if (!skipCache) {
          await database.put(`conflicts-${innerKeyHash}`, {});
        }

        rules2Zeroed[ruleName] = 0;
        continue mid;
      }

      console.log(`\nConfig incompatible with rule:`);
      printDiffLines(output1, output2);

      const innerConfigList: ConflictCache = add0Rule({}, name1, ruleName);
      if (!skipCache) {
        await database.put(`conflicts-${innerKeyHash}`, innerConfigList);
      }

      conflictList = mergeIncompatible(innerConfigList, conflictList);
      rules2Zeroed[ruleName] = 0;
    }

    const out = `\n${currentCheck} - Finished Mid Processing.`;
    process.stdout.write(out.padEnd(150, " "));
    readline.cursorTo(process.stdout, 0);
    fullConflictList = mergeIncompatible(conflictList, fullConflictList);
  }

  let upToDate = false;

  // For each config compare the set:
  for (const lint of linters) {
    const {
      config1: { location: path1, name: name1 },
      config2: { location: path2, name: name2 },
      currentCheck,
      keyHash,
      linter1: { json1 },
      linter2: { json2 },
      r1: { rules1, rules1List, rules1Zeroed },
      r2: { rules2, rules2List, rules2Zeroed },
    } = lint;
    let temporaryList: ConflictCache = {};
    mid: for (const [json1RuleName, json1RuleSetting] of rules1List) {
      if (isRuleOff(json1RuleSetting)) continue mid;
      const json1OneRule = JSON.parse(JSON.stringify(json1)) as Record<
        string,
        Record<string, Rule>
      >;
      json1OneRule.rules = { [json1RuleName]: json1RuleSetting };
      rules1Zeroed[json1RuleName] = json1RuleSetting;
      const [es1OneRule] = await getLinter(filePath, path1, rules1Zeroed);
      const batchOperations: Array<
        BatchOperation<Level<string, ConflictCache>, string, ConflictCache>
      > = [];
      inner: for (const [json2RuleName, json2RuleSetting] of rules2List) {
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

        const hasCache = await getCache(database, innerKeyHash);
        if (hasCache !== undefined) {
          temporaryList = mergeIncompatible(hasCache, temporaryList);
          const out = `${upToDate ? "\n" : ""}${currentCheck} - Inner Cache Hit: ${json1RuleName} -vs- ${json2RuleName}`;
          process.stdout.write(out.padEnd(150, " "));
          continue inner;
        }

        upToDate = true;
        const out = `${currentCheck} - Now checking: ${json1RuleName} -vs- ${json2RuleName}`;
        process.stdout.write(out.padEnd(150, " "));
        rules2Zeroed[json2RuleName] = json2RuleSetting;
        const [es2OneRule] = await getLinter(filePath, path2, rules2Zeroed);
        const [output1, output2] = await getDiff(
          opt,
          codeToLint,
          es1OneRule,
          es2OneRule,
        );

        if (compatible(output1, output2)) {
          rules2Zeroed[json2RuleName] = 0;
          if (!skipCache) {
            batchOperations.push(
              {
                key: `conflicts-${innerKeyHash}`,
                type: "put",
                value: {},
              },
              {
                key: `conflicts-${innerKeyHash2}`,
                type: "put",
                value: {},
              },
            );
          }

          continue inner;
        }

        console.log(`\nRules incompatible:`);
        printDiffLines(output1, output2);

        let innerConfigList: ConflictCache = {};

        if (!(json2RuleName in rules1)) {
          innerConfigList = add0Rule(innerConfigList, name1, json2RuleName);
        }

        if (!(json1RuleName in rules2)) {
          innerConfigList = add0Rule(innerConfigList, name2, json1RuleName);
        }

        rules2Zeroed[json2RuleName] = 0;
        if (!skipCache)
          batchOperations.push(
            {
              key: `conflicts-${innerKeyHash}`,
              type: "put",
              value: innerConfigList,
            },
            {
              key: `conflicts-${innerKeyHash2}`,
              type: "put",
              value: innerConfigList,
            },
          );

        if (batchOperations.length > 0) {
          await database
            .batch(batchOperations)
            // eslint-disable-next-line unicorn/prefer-top-level-await
            .catch((error) => {
              console.error(error);
              throw new Error("Batch failed");
            });
        }

        temporaryList = mergeIncompatible(innerConfigList, temporaryList);
      }

      rules1Zeroed[json1RuleName] = 0;
    }

    fullConflictList = mergeIncompatible(temporaryList, fullConflictList);
    if (!skipCache) {
      await database.put(`conflicts-${keyHash}`, temporaryList);
    }

    console.log(`\n${currentCheck} - Processing finished.`);
  }

  console.log(filePath, { fullConflictList });
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
