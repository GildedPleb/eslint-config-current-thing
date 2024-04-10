// PathMark: ./src/generate-readme.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSONConfigJs from "../current-js.json" assert { type: "json" };
import JSONConfigJsx from "../current-jsx.json" assert { type: "json" };
import JSONConfigTest from "../current-test.json" assert { type: "json" };
import JSONConfigTs from "../current-ts.json" assert { type: "json" };
import JSONConfigTsx from "../current-tsx.json" assert { type: "json" };
import { LAST_DAY_INTERVAL, MINIMUMS } from "./constants";
import configs from "./definitions/configs";
import fetchEslintPlugins from "./packages/get-packages";

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
const uniqueNames = [...uniqueNamesSet].sort();

const maxColumns = 5;
let markdownTable = `${"| ".repeat(maxColumns + 1)}\n${[..."|".repeat(maxColumns + 1)].join(" - ")}\n|`;
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

const tsRuleCount = Object.keys(
  (JSONConfigTs as { rules: Record<string, unknown> }).rules,
).length;
const jsRuleCount = Object.keys(
  (JSONConfigJs as { rules: Record<string, unknown> }).rules,
).length;
const testRuleCount = Object.keys(
  (JSONConfigTest as { rules: Record<string, unknown> }).rules,
).length;
const tsxRuleCount = Object.keys(
  (JSONConfigTsx as { rules: Record<string, unknown> }).rules,
).length;
const jsxRuleCount = Object.keys(
  (JSONConfigJsx as { rules: Record<string, unknown> }).rules,
).length;

const ruleCountMarker = "Rule Counts";
const ruleCount = `Unsurprisingly, it is incredibly strict with popularity-based opinions on:
- **${tsRuleCount}** typescript rules
- **${jsRuleCount}** javascript rules
- **${testRuleCount}** testing rules
- **${tsxRuleCount}** TSX rules
- **${jsxRuleCount}** JSX rules`;

const underConsiderationMarker = "Under Consideration List";
const underConsideration = `The following section is generated according to spec.

Generated on ${new Date().toLocaleDateString()}, downloads for the previous ${LAST_DAY_INTERVAL} days.

${newPackages.map(({ count, name }) => `- ${count.toLocaleString()} downloads, [${name}](https://www.npmjs.com/package/${name})${count < MINIMUMS ? " - Not Yet Eligible" : ""}`).join("\n")}
`;

updateReadmeSection(configListMarker, markdownTable);
updateReadmeSection(ruleCountMarker, ruleCount);
updateReadmeSection(underConsiderationMarker, underConsideration);
// EOF
