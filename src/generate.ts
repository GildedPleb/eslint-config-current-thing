import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import configs from "./configs";
import { RULES } from "./constants";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateCode = `/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
  ...configs
    .filter(({ requiresImport }) => requiresImport)
    .flatMap(({ packages, count }) =>
      packages.map(
        ({ name, package: p }) =>
          `${count > 400_000 ? "" : "// "}import ${name} from "${p}";`
      )
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

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export default ({ disable = [], override = {} } = defaultOptions) => [
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

${configs
  .sort((a, b) => a.count - b.count)
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
        .map(({ package: p }) => `!disable.includes("${p}")`)
        .join(` && `)} ? [
        ${definitions.replace(
          RULES,
          `rules: { ${parsedRules}
               ${packages
                 .map(
                   ({ package: p }) =>
                     `...("${p}" in override ? override["${p}"] : {})`
                 )
                 .join(`, `)}
               },`
        )}] : [])`;

      return `  /*
    ${name}
    ${count.toLocaleString()} monthly downloads
    ${description}
    ${homepage}
${count > 400_000 ? "  */" : ""}
  ${definition},
${count > 400_000 ? "" : "  */"}`;
    }
  ).join(`
`)}];
`;

const outputPath = path.join(dirname, "./config.js");
fs.writeFileSync(outputPath, generateCode, "utf8");
