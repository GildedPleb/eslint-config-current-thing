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
import v8 from "node:v8";

// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from "chalk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { type BatchOperation, Level } from "level";

import { hashString, isEmpty, printDiffLines } from "../helpers";
import fileList from "./code-samples";
import configList from "./configs";
import {
  add0Rule,
  cloneWithRule,
  compatible,
  getDiff,
  getLinter,
  getSimpleDiff,
  isRuleOff,
  mergeIncompatible,
} from "./helpers";
import fixables from "./plugins";
import {
  type ConfigData,
  type ConflictCache,
  type IFlatESLint,
  type Rule,
} from "./types";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Get heap statistics from V8
const heapStats = v8.getHeapStatistics();

// Log the total heap size limit
console.log(
  `\n\nWARNING: Total Heap Size Limit: ${chalk.yellow(heapStats.heap_size_limit / 1024 / 1024)} MB`,
);
const skipCache = process.argv.slice(2)[0] === "skipCache";
if (skipCache) {
  console.log("\n", chalk.inverse("Skipping the Cache for this run."));
}

const heap = (): string => {
  const heapMax = Math.floor(heapStats.heap_size_limit / 1024 / 1024);
  const currentHeap = Math.floor(process.memoryUsage().heapUsed / 1024 / 1024);

  const warningThreshold = Math.floor(heapMax * 0.75);
  const criticalThreshold = Math.floor(heapMax * 0.9);

  let currentHeapDisplay;
  if (currentHeap >= criticalThreshold) {
    currentHeapDisplay = chalk.red(`${currentHeap}MB`);
  } else if (currentHeap >= warningThreshold) {
    currentHeapDisplay = chalk.yellow(`${currentHeap}MB`);
  } else {
    currentHeapDisplay = chalk.gray(`${currentHeap}MB`);
  }

  return `(${currentHeapDisplay})`;
};

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

console.time("Total");
for (const { def: codeToLint, filePath, short } of fileList) {
  console.time(`${short} run`);
  const database = new Level<string, ConflictCache>(
    `./conflict-cache-${short}`,
    { valueEncoding: "json" },
  );

  const opt = { filePath };
  console.log("\n\nProcessing filetype:", chalk.red(filePath), "\n");
  const linters = [];

  console.log(`Getting all linters...`);

  const configsPopulated = await Promise.all(
    configList.map(async ({ location, name }) => {
      try {
        const [es, json, hash] = await getLinter(filePath, location);

        // Utility to call out a particular rule when seen in a config.
        const ruleToCheck = "jest/no-if";
        if (json.rules !== undefined && ruleToCheck in json.rules)
          console.log(name, json.rules[ruleToCheck]);

        return { es, hash, json, location, name };
      } catch (error) {
        console.log(`Linter for ${chalk.red(name)}... FAILED!`);
        console.error(error);
        throw new Error("Could not get linter");
      }
    }),
  );

  const configsFiltered = configsPopulated.filter(({ json, name }) => {
    const rules1 = json.rules ?? {};
    if (isEmpty(rules1)) {
      console.log(`${chalk.blue(name)} - Zero applicable rules, No conflicts!`);
      return false;
    }

    return true;
  }) as Array<{
    es: IFlatESLint;
    hash: string;
    json: ConfigData;
    location: string;
    name: string;
  }>;

  console.log(`\n${chalk.blue("All linters ready to process!")}\n`);
  const combinations = [];
  for (let index = 0; index < configsFiltered.length; index++) {
    for (let bIndex = index + 1; bIndex < configsFiltered.length; bIndex++) {
      combinations.push([configsFiltered[index], configsFiltered[bIndex]]);
    }
  }

  for (const [config1, config2] of combinations) {
    const { es: es1, hash: hash1, json: json1, name: name1 } = config1;
    const { es: es2, hash: hash2, json: json2, name: name2 } = config2;
    const currentCheck = `${chalk.green(short)}: ${chalk.blue(name1)} ${chalk.blue("-vs-")} ${chalk.blue(name2)}`;
    const keyHash = hashString(codeToLint + filePath + hash1 + hash2);

    const hasCache = await getCache(database, keyHash);

    if (hasCache !== undefined) {
      console.log(
        `${currentCheck} ${heap()} - Cache Hit. No need to process further.`,
      );
      fullConflictList = mergeIncompatible(hasCache, fullConflictList);
      continue;
    }

    const [output1, output2] = await getDiff(
      opt,
      codeToLint,
      [es1, json1, hash1],
      [es2, json2, hash2],
    );

    if (compatible(output1, output2)) {
      console.log(`${currentCheck} ${heap()} - Compatible, No conflicts!`);
      await database.put(`conflicts-${keyHash}`, {});
      continue;
    }

    console.log(
      `${currentCheck} ${heap()} - Superficially incompatible, ${chalk.red("queueing")}:`,
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
      linter1: [es1, json1, hash1] as [IFlatESLint, ConfigData, string],
      linter2: [es2, json2, hash1] as [IFlatESLint, ConfigData, string],
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
      linter1: [es1, , hash1],
      linter2: [es2, , hash2],
      r1: { rules1, rules1List, rules1Zeroed },
      r2: { rules2, rules2List, rules2Zeroed },
    } = lint;

    let conflictList: ConflictCache = {};

    mid: for (const [ruleName, ruleSetting] of rules1List) {
      if (isRuleOff(ruleSetting) || ruleName in rules2) continue mid;
      const jsonOneRule1 = cloneWithRule(hash1, ruleName, ruleSetting);
      const innerKeyHash = hashString(
        codeToLint + filePath + hash2 + jsonOneRule1,
      );

      const hasCache = await getCache(database, innerKeyHash);
      if (hasCache !== undefined) {
        conflictList = mergeIncompatible(hasCache, conflictList);
        continue mid;
      }

      rules1Zeroed[ruleName] = ruleSetting;
      const [esX, , hashX] = await getLinter(filePath, path1, rules1Zeroed);
      readline.cursorTo(process.stdout, 0);
      const out = `${currentCheck} ${heap()} - Now checking: ${name2} -vs- ${name1} (${ruleName})`;
      process.stdout.write(out.padEnd(process.stdout.columns, " "));
      const [output1, output2] = await getSimpleDiff(
        opt,
        codeToLint,
        [es2, hash2],
        [esX, hashX],
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
      const jsonOneRule2 = cloneWithRule(hash2, ruleName, rule1Setting);
      const innerKeyHash = hashString(
        codeToLint + filePath + hash1 + jsonOneRule2,
      );

      const hasCache = await getCache(database, innerKeyHash);
      if (hasCache !== undefined) {
        conflictList = mergeIncompatible(hasCache, conflictList);
        continue mid;
      }

      rules2Zeroed[ruleName] = rule1Setting;
      const [esX, , hashX] = await getLinter(filePath, path2, rules2Zeroed);
      readline.cursorTo(process.stdout, 0);
      const out = `${currentCheck} ${heap()} - Now checking: ${name1} -vs- ${name2} (${ruleName})`;
      process.stdout.write(out.padEnd(process.stdout.columns, " "));
      const [output1, output2] = await getSimpleDiff(
        opt,
        codeToLint,
        [es1, hash1],
        [esX, hashX],
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
    process.stdout.write(out.padEnd(process.stdout.columns, " "));
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
      linter1,
      linter2,
      r1: { rules1, rules1List, rules1Zeroed },
      r2: { rules2, rules2List, rules2Zeroed },
    } = lint;
    let temporaryList: ConflictCache = {};
    mid: for (const [json1Rule, json1Setting] of rules1List) {
      if (isRuleOff(json1Setting)) continue mid;
      const json1OneRule = cloneWithRule(linter1[2], json1Rule, json1Setting);
      rules1Zeroed[json1Rule] = json1Setting;
      const outer = await getLinter(filePath, path1, rules1Zeroed);
      const batchOperations: Array<
        BatchOperation<Level<string, ConflictCache>, string, ConflictCache>
      > = [];
      inner: for (const [json2Rule, json2Setting] of rules2List) {
        readline.cursorTo(process.stdout, 0);

        if (isRuleOff(json2Setting)) continue inner;
        if (json2Rule === json1Rule) {
          const out = `${currentCheck} - Same/same skipping: ${json1Rule}`;
          process.stdout.write(out.padEnd(process.stdout.columns, " "));
          continue inner;
        }

        const json2OneRule = cloneWithRule(linter2[2], json2Rule, json2Setting);
        const innerKeyHash = hashString(
          codeToLint + filePath + json1OneRule + json2OneRule,
        );
        const innerKeyHash2 = hashString(
          codeToLint + filePath + json2OneRule + json1OneRule,
        );

        const hasCache = await getCache(database, innerKeyHash);
        if (hasCache !== undefined) {
          temporaryList = mergeIncompatible(hasCache, temporaryList);
          const out = `${upToDate ? "\n" : ""}${currentCheck} - Inner Cache Hit: ${json1Rule} -vs- ${json2Rule}`;
          process.stdout.write(out.padEnd(process.stdout.columns, " "));
          continue inner;
        }

        upToDate = true;
        const out = `${currentCheck} ${heap()} - Now checking: ${json1Rule} -vs- ${json2Rule}`;
        process.stdout.write(out.padEnd(process.stdout.columns, " "));
        rules2Zeroed[json2Rule] = json2Setting;
        const inner = await getLinter(filePath, path2, rules2Zeroed);
        const [output1, output2] = await getDiff(opt, codeToLint, outer, inner);

        if (compatible(output1, output2)) {
          rules2Zeroed[json2Rule] = 0;
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

        if (!(json2Rule in rules1)) {
          innerConfigList = add0Rule(innerConfigList, name1, json2Rule);
        }

        if (!(json1Rule in rules2)) {
          innerConfigList = add0Rule(innerConfigList, name2, json1Rule);
        }

        rules2Zeroed[json2Rule] = 0;
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

      rules1Zeroed[json1Rule] = 0;
    }

    fullConflictList = mergeIncompatible(temporaryList, fullConflictList);
    if (!skipCache) {
      await database.put(`conflicts-${keyHash}`, temporaryList);
    }

    console.log(`\n${currentCheck} - Processing finished.`);
  }

  console.log(chalk.red(filePath), { fullConflictList });
  console.timeEnd(`${short} run`);
  console.log(`Current heap: ${heap()} `);
}

console.log({ fullConflictList });
console.timeEnd("Total");

const generateCode = `// PathMark: ./src/conflicts/incompatibilities.ts

/*
  This file is fully generated, to edit it change ./get-incompatibilities.ts
  Generated on ${new Date().toLocaleDateString()}
*/

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
