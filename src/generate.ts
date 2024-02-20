import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import configs from "./configs";
import { MINIMUMS, RULES } from "./constants";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateCode = `/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on ${new Date().toLocaleDateString()}
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

${[
  ...configs.flatMap(({ packages, count }) =>
    packages.map(
      ({ name, package: pack, requiresImport }) =>
        `${
          count > MINIMUMS && requiresImport ? "" : "// "
        }import ${name} from "${pack}";`,
    ),
  ),
  'import { FlatCompat } from "@eslint/eslintrc";',
].join(`
`)}
import globals from "globals";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const files = ["**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}"];

const defaultOptions = { disable: [], override: {} };

/**
 * @param {{ disable: string[], override: Record<string, Record<string, number | string>> }} default - Options
 */
const configGen = ({ disable = [], override = {} } = defaultOptions) => [
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

${configs
  .sort((first, second) => first.count - second.count)
  .map(
    ({ rules, definitions, name, packages, count, description, homepage }) => {
      if (rules !== undefined && !definitions.includes(RULES)) {
        const message = `Formatting Error: ${name} includes a 'rules' key but does not define were those rules should be placed inline.`;
        throw new Error(message);
      }

      if (definitions.includes("rules: ") && name !== "Shopify") {
        const message = `Formatting Error: ${name}.definitions includes a 'rules' key when it should use the 'RULES' replacement inline placeholder. See other config definitions for examples.`;
        throw new Error(message);
      }

      if (!definitions.includes(RULES)) {
        const message = `Formatting Error: ${name}.definitions does not include a 'RULES' inline market to show were rules should be added as a placeholder. See other config definitions for examples.`;
        throw new Error(message);
      }

      const parsedRules = rules === undefined ? "" : `...${rules},`;

      const definition = `...(${packages
        .map(({ package: pack }) => `!disable.includes("${pack}")`)
        .join(` && `)} ? [
        ${definitions.replace(
          RULES,
          `rules: { ${parsedRules}
               ${packages
                 .map(
                   ({ package: pack }) =>
                     `...("${pack}" in override ? override["${pack}"] : {})`,
                 )
                 .join(`, `)}
               },`,
        )}] : [])`;

      return `  /*
    ${name}
    ${count.toLocaleString()} monthly downloads
    ${description}
    ${homepage}
${count > MINIMUMS ? "  */" : ""}
  ${definition},
${count > MINIMUMS ? "" : "  */"}`;
    },
  ).join(`
`)}];

export default configGen;
`;

const outputPath = path.join(dirname, "./config.js");
fs.writeFileSync(outputPath, generateCode, "utf8");
