// PathMark: ./src/generate.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import incompatibles from "./conflicts/incompatibilities";
import { MINIMUMS, RULES } from "./constants";
import { configs, plugins } from "./definitions";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateCode = `// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on ${new Date().toLocaleDateString()}
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

${configs
  .flatMap(({ packages }) =>
    packages.map(({ name, package: pack, requiresImport }) =>
      requiresImport ? `import ${name} from "${pack}";` : "",
    ),
  )
  .filter(Boolean).join(`
`)}
${plugins
  .flatMap(({ packages }) =>
    packages.map(({ name, package: pack, requiresImport }) =>
      requiresImport ? `import ${name} from "${pack}";` : "",
    ),
  )
  .filter(Boolean).join(`
`)}
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import restrictedGlobals from 'confusing-browser-globals';
import { defineFlatConfig } from 'eslint-define-config';

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const jsFiles = ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"];
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
          ecmaVersion: "latest",
          project: true,
          sourceType: "module",
        },
      },
      plugins: {
        ${plugins
          .flatMap(({ packages }) =>
            packages.map(
              ({ key, name }) =>
                `"${key}": ${name
                  .split("\n")
                  .map((line, index) => (index === 0 ? line : `  ${line}`))
                  .join("\n")},`,
            ),
          )
          .sort().join(`
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
      id,
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

      const hasSecondary = nameSecondary !== undefined && nameSecondary !== "";
      const secondDash = hasSecondary ? `-${nameSecondary.toLowerCase()}` : "";
      const parsedRules =
        rules === undefined
          ? ""
          : rules
              .split("\n")
              .map((line, index) => (index === 0 ? line : `          ${line}`))
              .join("\n");
      const incompatibleList = Object.entries(
        incompatibles[`${id}${secondDash}`] ?? {},
      );
      const incompatibleRules =
        incompatibleList.length === 0
          ? ""
          : Object.entries(incompatibles[`${id}${secondDash}`] ?? {}).map(
              ([key, value]) => `"${key}": ${value.toString()},`,
            ).join(`
              `);

      const second = hasSecondary ? `/${nameSecondary.toLowerCase()}` : "";

      const definition = `  ...(${packages
        .map(({ package: pack }) => `disable.includes("${pack}${second}")`)
        .join(` || `)} || threshold > ${count}
      ? []
      : [
  ${definitions
    .split("\n")
    .map((line) => `        ${line}`)
    .join("\n")
    .replace(
      RULES,
      `rules: {
              ${incompatibleRules}
              ${parsedRules}
              ${overrides.map((rule) => `"${rule}": 0,`).join(`
              `)}
              ${packages.map(
                ({ package: pack }) =>
                  `...("${pack}${second}" in override
                ? override["${pack}${second}"]
                : {}),`,
              ).join(`
              `)}
            },`,
    )},
        ])`;

      return `    /*
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

// EOF
