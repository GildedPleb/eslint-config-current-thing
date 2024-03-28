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
  RULES,
} from "./constants";
import { configs, plugins } from "./definitions";
import fetchEslintPlugins from "./packages/get-packages";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateCode = `// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsdoc/no-types */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on ${new Date().toLocaleDateString()}
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

${configs.flatMap(({ packages }) =>
  packages.map(({ name, package: pack, requiresImport }) =>
    requiresImport ? `import ${name} from "${pack}";` : "",
  ),
).join(`
`)}
${plugins.flatMap(({ packages }) =>
  packages.map(({ name, package: pack, requiresImport }) =>
    requiresImport ? `import ${name} from "${pack}";` : "",
  ),
).join(`
`)}
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import restrictedGlobals from 'confusing-browser-globals';
import { defineFlatConfig } from 'eslint-define-config';

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];
const tsFiles = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];
const files = [...jsFiles, ...tsFiles];

const testFiles = [
  "**/*.test.*",
  "**/*_test.*",
  "**/*Test.*",
  "**/*.spec.*",
  "**/*_spec.*",
  "**/*Spec.*",
  "**/__{mocks,tests}__/**/*",
  "**/*.{spec,test}.[jt]s?(x)",
];

const defaultOptions = { disable: [], override: {}, threshold: ${MINIMUMS} };

/**
 * @param {{ disable: string[], override: Record<string, Record<string, number | string>>, threshold: number }} default - Options
 * @returns { import("eslint-define-config").FlatESLintConfig[] } an ESLint Flat Config list
 */
const configGen = ({
  disable = [],
  override = {},
  threshold = 400_000,
} = defaultOptions) =>
  // @ts-expect-error type mismatching here is expected because the return is defined as a literal type, on literal types.
  defineFlatConfig([
  {
    ignores: [
      "**/eslint.config.js",
      "dist",
      "build",
      "artifacts",
      "coverage",
      ".git",
      "node_modules",
      "index.js",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      ${plugins.flatMap(({ packages }) =>
        packages.map(({ key, name }) => `"${key}": ${name},`),
      ).join(`
      `)}
    },
  },

  ${configs
    .sort((first, second) => first.count - second.count)
    .map(
      ({
        count,
        definitions,
        description,
        homepage,
        name,
        nameSecondary,
        overrides,
        packages,
        requiredPlugins,
        rules,
      }) => {
        if (rules !== undefined && !definitions.includes(RULES)) {
          const message = `Formatting Error: ${name} includes a 'rules' key but does not define were those rules should be placed inline.`;
          throw new Error(message);
        }

        if (
          definitions.includes("rules: ") &&
          !name.includes("Shopify") &&
          name !== "Emotion CSS"
        ) {
          const message = `Formatting Error: ${name}.definitions includes a 'rules' key when it should use the 'RULES' replacement inline placeholder. See other config definitions for examples.`;
          throw new Error(message);
        }

        if (!definitions.includes(RULES)) {
          const message = `Formatting Error: ${name}.definitions does not include a 'RULES' inline market to show were rules should be added as a placeholder. See other config definitions for examples.`;
          throw new Error(message);
        }

        const parsedRules = rules === undefined ? "" : `...${rules},`;
        const hasSecondary =
          nameSecondary !== undefined && nameSecondary !== "";
        const second = hasSecondary ? `/${nameSecondary.toLowerCase()}` : "";

        const definition = `...(${packages
          .map(({ package: pack }) => `disable.includes("${pack}${second}")`)
          .join(` || `)} || threshold > ${count}
    ? []
    : [
        ${definitions.replace(
          RULES,
          `rules: {
            ${parsedRules}
            ${overrides.map((rule) => `"${rule}": 0,`).join(`
            `)}
               ${packages
                 .map(
                   ({ package: pack }) =>
                     `...("${pack}${second}" in override ? override["${pack}${second}"] : {})`,
                 )
                 .join(`, `)}
          },`,
        )}
      ])`;

        return `  /*
    ${name}${hasSecondary ? ` - ${nameSecondary}` : ""}
    ${count.toLocaleString()} monthly downloads
    ${description}
    ${homepage}
    Requires: ${requiredPlugins.length > 0 ? requiredPlugins.join(", ") : "(None)"}
  */
  ${definition},
`;
      },
    ).join(`
`)}]);

export default configGen;
// EOF
`;

const outputPath = path.join(dirname, "./config.js");
try {
  fs.writeFileSync(outputPath, generateCode, "utf8");
  console.log("\n./config.js has been updated successfully.");
} catch (error) {
  console.error("Error processing the config.js file:", error);
  throw new Error("Failed");
}

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
