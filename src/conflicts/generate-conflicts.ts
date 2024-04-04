// PathMark: ./src/conflicts/generate-conflicts.ts

// TODO: it would be good to get this generator to always be in line with the main generator, but i'm not sure its worth it...
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MINIMUMS, RULES } from "../constants";
import type { Config } from "../definitions/configs";
import rawConfigs from "../definitions/configs";
import plugins from "../definitions/plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export interface PopulatedConfig extends Config {
  count: number;
  description: string;
  homepage: string;
}

const configsWithCount: PopulatedConfig[] = [];

for await (const config of rawConfigs) {
  console.log(`Getting info for "${config.name}"...`);
  const count = 1_000_000;
  const description = "Purply for generating conflicts";
  const homepage = "www.nope.com";

  configsWithCount.push({ ...config, count, description, homepage });
}

export interface FinalConfig extends PopulatedConfig {
  overrides: string[];
}

const ids = new Set<string>();
for (const config of configsWithCount) {
  const hasSecondary =
    config.nameSecondary !== undefined && config.nameSecondary !== "";
  const second = hasSecondary ? `/${config.nameSecondary?.toLowerCase()}` : "";
  const id = `${config.id}${second}`;
  if (ids.has(id)) {
    throw new Error(`Ids must be unique. "${id}" has duplicates`);
  }

  ids.add(id);
}

const filePathConfigName: string[][] = [];
const configs: PopulatedConfig[] = configsWithCount;
// EOF
for (const configContext of configs) {
  const hasSecondary =
    configContext.nameSecondary !== undefined &&
    configContext.nameSecondary !== "";
  const second = hasSecondary
    ? `-${configContext.nameSecondary?.toLowerCase()}`
    : "";
  const relative = `./configs/${configContext.id}${second}-config.js`;

  const generateCode = `// PathMark: ./src/conflicts/${relative.slice(2)}
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

${configContext.packages
  .map(({ name, package: pack, requiresImport }) =>
    requiresImport ? `import ${name} from "${pack}";` : "",
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
import tseslint from "typescript-eslint";
import { rules as emotion } from "@emotion/eslint-plugin";
import reactNativeConfig from "@react-native-community/eslint-config";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const jsxFiles = ["**/*.jsx"];
const tsxFiles = ["**/*.tsx"];
const jsFiles = ["**/*.js", ...jsxFiles, "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", ...tsxFiles, "**/*.mts", "**/*.cts"];
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

  ${[configContext].map(
    ({
      count,
      definitions,
      description,
      homepage,
      name,
      nameSecondary,
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

      const parsedRules =
        rules === undefined
          ? ""
          : rules
              .split("\n")
              .map((line, index) => (index === 0 ? line : `          ${line}`))
              .join("\n");
      const second2 = hasSecondary ? `/${nameSecondary?.toLowerCase()}` : "";

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
                  ${parsedRules}
                  ${packages.map(
                    ({ package: pack }) =>
                      `...("${pack}${second2}" in override
                    ? override["${pack}${second2}"]
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

export default configGen();
// EOF
`;
  const outputPath = path.join(dirname, relative);
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    fs.writeFileSync(outputPath, generateCode, "utf8");
    console.log("\n./config.js has been updated successfully.");
  } catch (error) {
    console.error("Error processing the ./config.js file:", error);
    throw new Error("Failed");
  }

  filePathConfigName.push([`${configContext.id}${second}`, relative]);
}

const generateCode = `// PathMark: ./src/conflicts/configs/index.js
const configList = [
  ${filePathConfigName.map(
    ([pack, location]) =>
      `{ location: "./src/conflicts${location.slice(1)}", name: "${pack}" },`,
  ).join(`
  `)}
];

export default configList;
// EOF
`;

const relative = `./configs/index.js`;
const outputPath = path.join(dirname, relative);

try {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.writeFileSync(outputPath, generateCode, "utf8");
  console.log("\n./configs/index.js has been updated successfully.");
} catch (error) {
  console.error("Error processing the ./configs/index.js file:", error);
  throw new Error("Failed");
}
// EOF
