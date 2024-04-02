// PathMark: ./src/conflicts/generate.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Level } from "level";

import { MINIMUMS, RULES } from "../constants";
import type { Config } from "../definitions/configs";
import rawConfigs from "../definitions/configs";
import plugins from "../definitions/plugins";
import { isMoreThan1DaysInThePast } from "../helpers";
import { getDownloadCount, getInfo, type Info } from "../npm";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const database = new Level("../packages-installed", { valueEncoding: "json" });

interface DatabaseEntry {
  count: number;
  date: string;
  info: Info;
}

export interface PopulatedConfig extends Config {
  count: number;
  description: string;
  homepage: string;
}

const configsWithCount: PopulatedConfig[] = [];

for await (const config of rawConfigs) {
  console.log(`Getting info for "${config.name}"...`);
  let count = 0;
  let description = "";
  let homepage = "";
  for await (const { package: pack } of config.packages) {
    try {
      const previous = await database.get(`installed-${pack}`);

      const {
        count: packCount,
        date,
        info,
      } = JSON.parse(previous) as DatabaseEntry;

      if (isMoreThan1DaysInThePast(date)) throw new Error("Data too old");

      count += packCount;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    } catch {
      const packCount = await getDownloadCount(pack);
      const info = await getInfo(pack);

      await database.put(
        `installed-${pack}`,
        JSON.stringify({
          count: packCount ?? 0,
          date: new Date().toLocaleDateString(),
          info,
        }),
      );

      count += packCount ?? 0;
      description =
        description === ""
          ? info.description
          : `${description} / ${info.description}`;
      homepage =
        homepage === "" ? info.homepage : `${homepage} / ${info.homepage}`;
    }
  }

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
  const generateCode = `// PathMark: ./src/conflicts/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on ${new Date().toLocaleDateString()}
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

      const parsedRules = rules === undefined ? "" : `...${rules},`;
      const hasSecondary = nameSecondary !== undefined && nameSecondary !== "";
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

export default configGen();
// EOF
`;

  const hasSecondary =
    configContext.nameSecondary !== undefined &&
    configContext.nameSecondary !== "";
  const second = hasSecondary
    ? `-${configContext.nameSecondary?.toLowerCase()}`
    : "";

  const relative = `./configs/${configContext.id}${second}-config.js`;
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
