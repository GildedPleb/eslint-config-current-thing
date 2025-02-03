// PathMark: ./src/generate-readme.ts
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair -- needed */
/* eslint-disable es-x/no-import-attributes  -- needed */
/* eslint-disable es-x/no-json-modules  -- needed */
/* eslint-disable no-console -- needed for UI */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSONConfigJs from "../current-js.json" with { type: "json" };
import JSONConfigJson from "../current-json.json" with { type: "json" };
import JSONConfigJsx from "../current-jsx.json" with { type: "json" };
import JSONConfigMd from "../current-md.json" with { type: "json" };
import JSONConfigTest from "../current-test.json" with { type: "json" };
import JSONConfigTs from "../current-ts.json" with { type: "json" };
import JSONConfigTsx from "../current-tsx.json" with { type: "json" };
import JSONConfigYml from "../current-yml.json" with { type: "json" };
import { LAST_DAY_INTERVAL, MINIMUMS } from "./constants";
import configs from "./definitions/configs";
import fetchEslintPlugins from "./packages/get-packages";
import { search } from "./packages/rejected-database";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const readmePath = path.join(dirname, "../README.md");

/**
 *
 * @param marker - Unique market to mark the location
 * @param newContent - COntent to write
 */
function updateReadmeSection(marker: string, newContent: string): void {
  const startMarker = `<!-- Start Generated ${marker} DO NOT EDIT! -->`;
  const endMarker = `<!-- End Generated ${marker} DO NOT EDIT! -->`;

  try {
    const data = fs.readFileSync(readmePath, "utf8");
    const startIndex = data.indexOf(startMarker) + startMarker.length;
    const endIndex = data.indexOf(endMarker);

    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
      console.log(
        `Marker "${startMarker}" or "${endMarker}" not found or in incorrect order in README.md. Please check the file.`,
      );
      return;
    }

    const before = data.slice(0, Math.max(0, startIndex));
    const after = data.slice(Math.max(0, endIndex));
    const updatedContent = `${before}\n\n${newContent}\n\n${after}`;

    fs.writeFileSync(readmePath, updatedContent, "utf8");
    console.log(`README.md section updated successfully for "${marker}"`);
  } catch (error) {
    console.error("Error processing the README.md file:", error);
  }
}

const uniqueNamesSet = new Set<string>();
for (const config of configs) uniqueNamesSet.add(config.name);
const uniqueNames = [...uniqueNamesSet].sort((first, second) =>
  first.localeCompare(second, "en", { sensitivity: "base" }),
);

const maxColumns = 4;

let markdownTable = `${"| ".repeat(maxColumns + 1)}\n${[[..."|".repeat(maxColumns + 1)]].join(" - ")}\n|`;
let columnCount = 0;

for (const name of uniqueNames) {
  markdownTable += ` ${name} |`;
  columnCount++;
  if (columnCount === maxColumns) {
    markdownTable += "\n|";
    columnCount = 0;
  }
}

if (columnCount !== 0) {
  while (columnCount < maxColumns) {
    markdownTable += "  |";
    columnCount++;
  }

  markdownTable += "\n";
}

const configListMarker = "List of Configs";

const newPackages = await fetchEslintPlugins();

// Mapping config to their corresponding counts
const JSONconfigs = [
  { config: JSONConfigTs, name: "Typescript" },
  { config: JSONConfigJs, name: "Javascript" },
  { config: JSONConfigTest, name: "Testing" },
  { config: JSONConfigTsx, name: "TSX" },
  { config: JSONConfigJsx, name: "JSX" },
  { config: JSONConfigJson, name: "JSON" },
  { config: JSONConfigYml, name: "YML" },
  { config: JSONConfigMd, name: "MD" },
];
const ruleCountMarker = "Rule Counts";
const ruleCount = `Unsurprisingly, it is incredibly strict with popularity-based opinions on:\n\n${JSONconfigs.map(
  ({ config, name }) => ({
    count: Object.keys(config.rules).length,
    name,
  }),
)
  .sort((configA, configB) => configB.count - configA.count)
  .map(({ count, name }) => `- **${count}** ${name} rules`)
  .join("\n")}`;

const underConsiderationMarker = "Under Consideration List";
const underConsideration = `The following section is generated according to spec.

Generated on ${new Date().toLocaleDateString()}, total known packages **${newPackages.size.toLocaleString()}**. Top 40 next in line, downloads for the previous ${LAST_DAY_INTERVAL} days:

${newPackages.top40.map(({ count, name }) => `- ${count.toLocaleString()} downloads, [${name}](https://www.npmjs.com/package/${name})${count < MINIMUMS ? " - Not Yet Eligible" : ""}`).join("\n")}
`;

const rejected = await search("true", ["reject"]);

const rejectedMarker = "Rejected Count";
const rejectedCount = `In an effort to find as many possible ESLint appropriate packages, plugins, and configs, we have cast a massive net to comb through NPM packages so you don't have to. The amount of acceptable packages is bottomless, but taken from the most downloaded package that meets our widest search terms ("config" "plugin" or "eslint") the count of rejected packages should be a heuristic for the depth at which the current package runner-up is at.

The amount of packages reviewed and rejected **${rejected.length}**. `;

updateReadmeSection(configListMarker, markdownTable);
updateReadmeSection(ruleCountMarker, ruleCount);
updateReadmeSection(underConsiderationMarker, underConsideration);
updateReadmeSection(rejectedMarker, rejectedCount);

// EOF
