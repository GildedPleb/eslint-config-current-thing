// PathMark: ./src/generate-config.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import incompatibles from "./conflicts/incompatibilities";
import { MINIMUMS, RULES } from "./constants";
import { configs, parsers, plugins } from "./definitions";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const contextOverrides: string[] = [];

const packageSet = new Set<string>();

const sortedParsers = parsers.toSorted(
  (first, second) => first.count - second.count,
);

const sortedConfigs = configs.toSorted(
  (first, second) => first.count - second.count,
);

const generateCode = `// PathMark: ./src/config.js
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-config.ts
  Generated on ${new Date().toLocaleDateString()}
*/

/* eslint-disable import/extensions */
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
    packages.map(({ declaredAs, package: pack, requiresImport }) => {
      if (!requiresImport) return "";
      if (packageSet.has(pack)) return "";
      packageSet.add(pack);
      return `import ${declaredAs} from "${pack}";`;
    }),
  )
  .filter(Boolean).join(`
`)}
${configs
  .flatMap(({ packages }) =>
    packages.map(({ declaredAs, package: pack, requiresImport, subModule }) => {
      if (!requiresImport) return "";
      const pName = `${pack}${subModule ?? ""}`;
      if (packageSet.has(pName)) return "";
      packageSet.add(pName);
      return `import ${declaredAs} from "${pName}";`;
    }),
  )
  .filter(Boolean).join(`
`)}
import globals from "globals";
import restrictedGlobals from "confusing-browser-globals";
import { defineFlatConfig } from "eslint-define-config";
/* eslint-enable import/extensions */

${configs.map(({ preProcess }) => preProcess ?? "").join(`
`)}

const jsxFiles = ["**/*.jsx"];
const tsxFiles = ["**/*.tsx"];
const jsFiles = ["**/*.js", ...jsxFiles, "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", ...tsxFiles, "**/*.mts", "**/*.cts"];
const files = [...jsFiles, ...tsFiles];
const jsonFiles = ["*.json", "**/*.json", "*.json5", "**/*.json5", "*.jsonc", "**/*.jsonc"];
const ymlFiles = ["**/*.yaml", "**/*.yml"];
const codeBlocks = ["**/*.md/**", "**/*.mdx/**"];
const mdFiles = ["**/*.mdx", "**/*.md"];
const tomlFiles = ["**/*.toml"];
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
      processor: graphqlProcessors.graphql,
    },
    /* PARSERS */
    ${sortedParsers.map(
      ({ count, definitions, description, homepage, name }) => {
        if (!definitions.includes("languageOptions:")) {
          const message = `Formatting Error: ${name} defines a parser definition but does not include a 'languageOptions' key.`;
          throw new Error(message);
        }

        return `/*
      ${name}
      ${count.toLocaleString()} monthly downloads
      ${description}
      ${homepage}
    */
    ${definitions
      .split("\n")
      .map((line, index) => (index === 0 ? line : `  ${line}`))
      .join("\n")},`;
      },
    ).join(`
    `)}
    /* PLUGINS */
    {
      plugins: {
        ${plugins
          .flatMap(({ packages }) =>
            packages.map(
              ({ mappedAs, namespace }) =>
                `"${namespace}": ${mappedAs
                  .split("\n")
                  .map((line, index) => (index === 0 ? line : `  ${line}`))
                  .join("\n")},`,
            ),
          )
          .sort((first, second) =>
            first.localeCompare(second, "en", { sensitivity: "base" }),
          ).join(`
        `)}
      },
    },
    /* CONFIGS */
${sortedConfigs.map(
  // eslint-disable-next-line complexity -- i don't like this rule, but its probably right
  ({
    contextOverride,
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
    // eslint-disable-next-line sonarjs/cognitive-complexity -- probably accurate
  }) => {
    if (rules !== undefined && !definitions.includes(RULES)) {
      const message = `Formatting Error: ${name} includes a 'rules' key but does not define were those rules should be placed inline.`;
      throw new Error(message);
    }

    if (
      definitions.includes("rules: ") &&
      !name.includes("Shopify") &&
      name !== "Emotion CSS" &&
      name !== "Antfu"
    ) {
      const message = `Formatting Error: ${name}.definitions includes a 'rules' key when it should use the 'RULES' replacement inline placeholder. See other config definitions for examples.`;
      throw new Error(message);
    }

    if (!definitions.includes(RULES)) {
      const message = `Formatting Error: ${name}.definitions does not include a 'RULES' inline marker to show were rules should be added as a placeholder. See other config definitions for examples.`;
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
        : incompatibleList
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => `"${key}": ${value?.toString()},`).join(`
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
      `name: "${name}${second}",
            rules: {
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

    if (
      (description === undefined || homepage === undefined) &&
      name !== "CSS Modules"
    ) {
      throw new Error(
        `Package homepage or description is undefined. Are you sure you have the right package name? Name: '${name}'"`,
      );
    }

    const full = `    /*
      ${name}${hasSecondary ? ` - ${nameSecondary}` : ""}
      ${count.toLocaleString()} monthly downloads
      ${description}
      ${homepage}
      Requires: ${requiredPlugins.length > 0 ? requiredPlugins.join(", ") : "(None)"}
    */
  ${definition},
`;
    if (contextOverride !== undefined && contextOverride)
      contextOverrides.push(full);
    return full;
  },
).join(`
`)}
    /* CONTEXT OVERRIDES */
${contextOverrides.join("")}
]);

export default configGen;
// EOF
`;

const outputPath = path.join(dirname, "./config.js");
try {
  fs.writeFileSync(outputPath, generateCode, "utf8");
  // eslint-disable-next-line no-console -- needed for UI
  console.log("\n./config.js has been updated successfully.");
} catch (error) {
  console.error("Error processing the config.js file:", error);
  throw new Error("Failed");
}

// EOF
