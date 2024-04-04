// PathMark: ./src/generate.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSONConfigJs from "../current-js.json" assert { type: "json" };
import JSONConfigTest from "../current-test.json" assert { type: "json" };
import JSONConfigTs from "../current-ts.json" assert { type: "json" };
import {
  COUNT_SLUG,
  LAST_DAY_INTERVAL,
  MINIMUMS,
  README_SLUG,
} from "./constants";
import fetchEslintPlugins from "./packages/get-packages";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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

const ruleCount = `${COUNT_SLUG} popularity-based opinions on ${tsRuleCount} typescript rules, ${jsRuleCount} javascript rules, and ${testRuleCount} testing rules.`;

const underConsideration = `${README_SLUG}

The following section is generated according to spec.

Generated on ${new Date().toLocaleDateString()}, downloads for the previous ${LAST_DAY_INTERVAL} days.

${newPackages.map(({ count, name }) => `- ${count.toLocaleString()} downloads, [${name}](https://www.npmjs.com/package/${name})${count < MINIMUMS ? " - Not Yet Eligible" : ""}`).join("\n")}
`;

const readmePath = path.join(dirname, "../README.md");
try {
  const data = fs.readFileSync(readmePath, "utf8");
  const countStart = data.indexOf(COUNT_SLUG);
  if (countStart === -1) {
    console.log(
      "COUNT_SLUG not found. Please check the README.md for the correct COUNT_SLUG.",
    );
  } else {
    const endOfLineIndex = data.indexOf("\n", countStart);
    const updatedCountContent =
      data.slice(0, countStart) + ruleCount + data.slice(endOfLineIndex);

    const sectionStart = updatedCountContent.indexOf(README_SLUG);
    const updatedContent =
      sectionStart === -1
        ? `${updatedCountContent}\n${underConsideration}`
        : `${updatedCountContent.slice(0, Math.max(0, sectionStart))}${underConsideration}`;

    fs.writeFileSync(readmePath, updatedContent, "utf8");
    console.log("\nREADME.md has been updated successfully.");
  }
} catch (error) {
  console.error("Error processing the README.md file:", error);
  throw new Error("Failed");
}
// EOF
