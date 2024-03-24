// PathMark: ./src/generate.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSONConfig from "../current.json" assert { type: "json" };
import { LAST_DAY_INTERVAL, MINIMUMS, README_SLUG, RULES } from "./constants";
import { configs, plugins } from "./definitions";
import fetchEslintPlugins from "./get-packages";

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

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const files = ["**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}"];

const defaultOptions = { disable: [], override: {}, threshold: ${MINIMUMS} };

/**
 * @param {{ disable: string[], override: Record<string, Record<string, number | string>>, threshold: number }} default - Options
 */
const configGen = ({ disable = [], override = {}, threshold = ${MINIMUMS} } = defaultOptions) => [
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
    },
  },
  {
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
        packages,
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

        const definition = `...(${packages
          .map(({ package: pack }) => `disable.includes("${pack}")`)
          .join(` || `)} || threshold > ${count}
    ? []
    : [
        ${definitions.replace(
          RULES,
          `rules: {
            ${parsedRules}
               ${packages
                 .map(
                   ({ package: pack }) =>
                     `...("${pack}" in override ? override["${pack}"] : {})`,
                 )
                 .join(`, `)}
          },`,
        )}
      ])`;

        return `  /*
    ${name}
    ${count.toLocaleString()} monthly downloads
    ${description}
    ${homepage}
  */
  ${definition},
`;
      },
    ).join(`
`)}];

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

const underConsideration = `${README_SLUG}

The following section is generated according to spec.

Generated on ${new Date().toLocaleDateString()}, downloads for the previous ${LAST_DAY_INTERVAL} days.

${newPackages.map(({ count, name }) => `- ${count.toLocaleString()} downloads, [${name}](https://www.npmjs.com/package/${name})${count < MINIMUMS ? " - Not Yet Eligible" : ""}`).join("\n")}

## Rule Count

${Object.keys((JSONConfig as { rules: Record<string, unknown> }).rules).length}
`;

const readmePath = path.join(dirname, "../README.md");
try {
  const data = fs.readFileSync(readmePath, "utf8");
  const sectionStart = data.indexOf(README_SLUG);
  const updatedContent =
    sectionStart === -1
      ? `${data}\n${underConsideration}`
      : data.slice(0, Math.max(0, sectionStart)) + underConsideration;

  fs.writeFileSync(readmePath, updatedContent, "utf8");
  console.log("\nREADME.md has been updated successfully.");
} catch (error) {
  console.error("Error processing the README.md file:", error);
  throw new Error("Failed");
}
// EOF
