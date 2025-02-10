// PathMark: ./src/conflicts/configs/antfu-config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-unused-vars */
// @ts-nocheck

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

import antfuConfig from "@antfu/eslint-config";
import {
  parseForESLint as graphQLparseForESLint,
  processors as graphqlProcessors,
} from "@graphql-eslint/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import vitest from "@vitest/eslint-plugin";
import { defineFlatConfig } from "eslint-define-config";
import * as eslintMdx from "eslint-mdx";
import antfu from "eslint-plugin-antfu";
import command from "eslint-plugin-command";
import commentsOld from "eslint-plugin-eslint-comments";
import importX from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import nNode from "eslint-plugin-n";
import noOnlyTest from "eslint-plugin-no-only-tests";
import perfectionist from "eslint-plugin-perfectionist";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNamingConvention from "eslint-plugin-react-naming-convention";
import reactRefresh from "eslint-plugin-react-refresh";
import reactWebAPI from "eslint-plugin-react-web-api";
import reactX from "eslint-plugin-react-x";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import yml from "eslint-plugin-yml";
import * as espree from "espree";
import globals from "globals";
import jsoncEslintParser from "jsonc-eslint-parser";
import tomlEslintParser from "toml-eslint-parser";
import tseslint from "typescript-eslint";
import ymlEslintParser from "yaml-eslint-parser";

const antfuConfigRaw = await antfuConfig({
  lessOpinionated: true,
  // formatters: {
  //   css: true,
  //   html: true,
  //   markdown: "prettier",
  // },
  react: true,
}).renamePlugins({
  import: "import-x",
  node: "n",
  react: "react-x",
  style: "@stylistic",
  test: "vitest",
  ts: "@typescript-eslint",
  yaml: "yml",
});

const jsxFiles = ["**/*.jsx"];
const tsxFiles = ["**/*.tsx"];
const jsFiles = ["**/*.js", ...jsxFiles, "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", ...tsxFiles, "**/*.mts", "**/*.cts"];
const files = [...jsFiles, ...tsFiles];
const jsonFiles = [
  "*.json",
  "**/*.json",
  "*.json5",
  "**/*.json5",
  "*.jsonc",
  "**/*.jsonc",
];
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
  "**/__{mocks,tests}__/**/*",
];

/**
 * Combines an array of file patterns with an array of extensions
 * @param {string[]} patterns - Array of glob patterns without extensions
 * @param {string[]} extensions - Array of file extensions without the dot (e.g. ['js', 'jsx'])
 * @returns {string[]} Array of complete glob patterns with extensions
 */
const addExtensions = (patterns, extensions) =>
  patterns.flatMap((p) => extensions.map((extension) => `${p}.${extension}`));

const tsTestFiles = addExtensions(TEST_PATTERNS, ["ts", "tsx"]);
const jsTestFiles = addExtensions(TEST_PATTERNS, ["js", "jsx"]);

const defaultOptions = { disable: [], override: {}, threshold: 400_000 };

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
    /*
      MDX
      ESLint Parser for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-mdx
    */
    {
      files: mdFiles,
      languageOptions: {
        ecmaVersion: "latest",
        globals: {
          React: false,
        },
        parser: eslintMdx,
        sourceType: "module",
      },
    },
    /*
      TOML
      A TOML parser that produces output compatible with ESLint
      https://github.com/ota-meshi/toml-eslint-parser#readme
    */
    {
      files: ["*.toml"],
      languageOptions: {
        parser: tomlEslintParser,
      },
    },
    /*
      GraphQL
      GraphQL plugin for ESLint
      https://github.com/dimaMachina/graphql-eslint#readme
    */
    {
      files: graphQLFiles,
      languageOptions: {
        parser: graphQLparseForESLint,
      },
    },
    /*
      YML
      A YAML parser that produces output compatible with ESLint
      https://github.com/ota-meshi/yaml-eslint-parser#readme
    */
    {
      files: ymlFiles,
      languageOptions: {
        parser: ymlEslintParser,
      },
    },
    /*
      JSONC
      JSON, JSONC and JSON5 parser for use with ESLint plugins
      https://github.com/ota-meshi/jsonc-eslint-parser#readme
    */
    {
      files: jsonFiles,
      languageOptions: {
        parser: jsoncEslintParser,
      },
    },
    /*
      TypeScript
      Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/parser
    */
    {
      files: tsFiles,
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          ecmaVersion: "latest",
          project: true,
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
    },
    /*
      Espree
      An Esprima-compatible JavaScript parser built on Acorn
      https://github.com/eslint/js/blob/main/packages/espree/README.md
    */
    {
      files: jsFiles,
      languageOptions: {
        parser: espree,
      },
    },
    /* PLUGINS */
    {
      plugins: {
        "@stylistic": stylistic,
        "@typescript-eslint": tseslint.plugin,
        antfu,
        command,
        "eslint-comments": commentsOld,
        "import-x": importX,
        jsdoc,
        jsonc,
        n: nNode,
        "no-only-tests": noOnlyTest,
        perfectionist,
        "react-dom": reactDom,
        "react-hooks": reactHooks,
        "react-hooks-extra": reactHooksExtra,
        "react-naming-convention": reactNamingConvention,
        "react-refresh": reactRefresh,
        "react-web-api": reactWebAPI,
        "react-x": reactX,
        regexp,
        unicorn,
        "unused-imports": unusedImports,
        vitest,
        yml,
      },
    },

    /*
      Antfu
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: antfu, command, @typescript-eslint, n, import-x, yml, @stylistic, vitest, no-only-tests, jsdoc, jsonc, perfectionist, regexp, unicorn, unused-imports, eslint-comments, react-dom, react-hooks, react-hooks-extra, react-naming-convention, react-refresh, react-web-api, react-x
    */
    ...(disable.includes("@antfu/eslint-config") || threshold > 1_000_000
      ? []
      : [
          ...antfuConfigRaw.map(({ plugins: _plugins, ...config }) => {
            // Change the test name space
            if (config.name === "antfu/test/rules") {
              return {
                ...config,
                rules: {
                  ...config.rules,
                  "no-only-tests/no-only-tests":
                    config.rules?.["vitest/no-only-tests"] ?? 0,
                  "vitest/no-only-tests": 0,
                },
              };
            }
            // Change the ecma version for JS files to allow 'with' imports
            if (config.name === "antfu/javascript/setup") {
              return {
                ...config,
                languageOptions: {
                  ...config.languageOptions,
                  ecmaVersion: "latest",
                  parserOptions: {
                    ...config.languageOptions?.parserOptions,
                    ecmaVersion: "latest",
                  },
                },
              };
            }
            return config;
          }),
          {
            files,
            rules: {
              ...("@antfu/eslint-config" in override
                ? override["@antfu/eslint-config"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
