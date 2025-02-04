// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair -- needed
/* eslint-disable no-console -- this is needed for UI */
// PathMark: ./src/conflicts/generate-conflicts.ts

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { MINIMUMS, RULES } from "../constants";
import { parsers } from "../definitions";
import type { Config } from "../definitions/configs";
import rawConfigs from "../definitions/configs";
import plugins, { type Namespace, type Plugin } from "../definitions/plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export interface PopulatedConfig extends Config {
  count: number;
  description: string;
  homepage: string;
}

const configsWithCount: PopulatedConfig[] = [];

for (const config of rawConfigs) {
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
const sortedParsers = parsers.toSorted(
  (first, name2) => first.count - name2.count,
);

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
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

${parsers
  .flatMap(({ packages }) =>
    packages.map(
      ({ declaredAs, package: pack }) => `import ${declaredAs} from "${pack}";`,
    ),
  )
  .filter(Boolean).join(`
`)}
${plugins
  .flatMap(({ packages }) =>
    packages.map(({ declaredAs, package: pack, requiresImport }) =>
      requiresImport ? `import ${declaredAs} from "${pack}";` : "",
    ),
  )
  .filter(Boolean).join(`
`)}
${configContext.packages
  .map(({ declaredAs, package: pack, requiresImport, subModule }) =>
    requiresImport
      ? `import ${declaredAs} from "${pack}${subModule ?? ""}";`
      : "",
  )
  .filter(Boolean).join(`
`)}


import globals from "globals";
import restrictedGlobals from 'confusing-browser-globals';
import { defineFlatConfig } from 'eslint-define-config';

const jsxFiles = ["**/*.jsx"];
const tsxFiles = ["**/*.tsx"];
const jsFiles = ["**/*.js", ...jsxFiles, "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", ...tsxFiles, "**/*.mts", "**/*.cts"];
const files = [...jsFiles, ...tsFiles];
const jsonFiles = ["*.json", "**/*.json", "*.json5", "**/*.json5", "*.jsonc", "**/*.jsonc"];
const ymlFiles = ["**/*.yaml", "**/*.yml"];
const codeBlocks = ["**/*.md/**", "**/*.mdx/**"];
const mdFiles = ["**/*.mdx", "**/*.md"];
const graphQLFiles = ["**/*.graphql"];

const TEST_PATTERNS = [
  "**/*.test",
  "**/*_test",
  "**/*Test",
  "**/*.spec",
  "**/*_spec",
  "**/*Spec",
  "**/__{mocks,tests}__/**/*"
];

/**
 * Combines an array of file patterns with an array of extensions
 * @param {string[]} patterns - Array of glob patterns without extensions
 * @param {string[]} extensions - Array of file extensions without the dot (e.g. ['js', 'jsx'])
 * @returns {string[]} Array of complete glob patterns with extensions
 */
const addExtensions = (patterns, extensions) =>
  patterns.flatMap((p) => extensions.map((extension) => \`\${p}.\${extension}\`));

const tsTestFiles = addExtensions(TEST_PATTERNS, ["ts", "tsx"]);
const jsTestFiles = addExtensions(TEST_PATTERNS, ["js", "jsx"]);

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
      },
    },
    /* PROCESSORS */
    {
      files: mdFiles,
      processor: markdown.processors.markdown,
    },
    {
      files: mdFiles,
      processor: mdx.processors.remark,
    },
    {
      files,
      processor: {
        meta: {
          name: "GraphQL-Processor",
          version: "1.0.0",
        },
        ...graphqlProcessors.graphql,
      },
    },
    /* PARSERS */
${sortedParsers.map(({ definitions, description, homepage, name }) => {
  if (!definitions.includes("languageOptions:")) {
    const message = `Formatting Error: ${name} defines a parser definition but does not include a 'languageOptions' key.`;
    throw new Error(message);
  }

  return `    /*
      ${name}
      ${description}
      ${homepage}
    */
    ${definitions
      .split("\n")
      .map((line, index) => (index === 0 ? line : `  ${line}`))
      .join("\n")},`;
}).join(`
`)}
    /* PLUGINS */
    {
      plugins: {
        ${(plugins as Array<Plugin<Namespace>>)
          .flatMap(({ packages }) => packages)
          .filter((plugin) =>
            configContext.requiredPlugins.includes(plugin.namespace),
          )
          .map(
            ({ mappedAs, namespace }) =>
              `"${namespace}": ${mappedAs
                .split("\n")
                .map((line, index) => (index === 0 ? line : `  ${line}`))
                .join("\n")},`,
          )
          .sort((first, sec) =>
            first.localeCompare(sec, "en", { sensitivity: "base" }),
          ).join(`
        `)}
      },
    },

${[configContext].map(
  // eslint-disable-next-line complexity -- probably worth fixing
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

    const definition = `...(${packages
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
`)}  ]);

export default configGen();
// EOF
`;
  const outputPath = path.join(dirname, relative);
  try {
    // eslint-disable-next-line security/detect-non-literal-fs-filename -- this is fine
    fs.writeFileSync(outputPath, generateCode, "utf8");
    console.log(`\n.${outputPath} has been updated successfully.`);
  } catch (error) {
    console.error(`Error processing the ${outputPath} file:`, error);
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
  fs.writeFileSync(outputPath, generateCode, "utf8");
  console.log("\n./configs/index.js has been updated successfully.");
} catch (error) {
  console.error("Error processing the ./configs/index.js file:", error);
  throw new Error("Failed");
}
// EOF
