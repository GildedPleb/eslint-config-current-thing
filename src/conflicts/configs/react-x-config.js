// PathMark: ./src/conflicts/configs/react-x-config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-unused-vars */
// @ts-nocheck

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

import {
  parseForESLint as graphQLparseForESLint,
  processors as graphqlProcessors,
} from "@graphql-eslint/eslint-plugin";
import { defineFlatConfig } from "eslint-define-config";
import * as eslintMdx from "eslint-mdx";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import reactX from "eslint-plugin-react-x";
import * as espree from "espree";
import globals from "globals";
import jsoncEslintParser from "jsonc-eslint-parser";
import tomlEslintParser from "toml-eslint-parser";
import tseslint from "typescript-eslint";
import ymlEslintParser from "yaml-eslint-parser";

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
        "react-x": reactX,
      },
    },

    /*
      React X
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: react-x
    */
    ...(disable.includes("eslint-plugin-react-x") || threshold > 1_000_000
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "react-x/ensure-forward-ref-using-ref": "warn",
              "react-x/no-access-state-in-setstate": "error",
              "react-x/no-array-index-key": "warn",
              "react-x/no-children-count": "warn",
              "react-x/no-children-for-each": "warn",
              "react-x/no-children-map": "warn",
              "react-x/no-children-only": "warn",
              "react-x/no-children-to-array": "warn",
              "react-x/no-clone-element": "warn",
              "react-x/no-comment-textnodes": "warn",
              "react-x/no-component-will-mount": "error",
              "react-x/no-component-will-receive-props": "error",
              "react-x/no-component-will-update": "error",
              "react-x/no-context-provider": "warn",
              "react-x/no-create-ref": "error",
              "react-x/no-default-props": "error",
              "react-x/no-direct-mutation-state": "error",
              "react-x/no-duplicate-jsx-props": "warn",
              "react-x/no-duplicate-key": "error",
              "react-x/no-forward-ref": "warn",
              "react-x/no-implicit-key": "warn",
              "react-x/no-missing-key": "error",
              "react-x/no-nested-components": "error",
              "react-x/no-prop-types": "error",
              "react-x/no-redundant-should-component-update": "error",
              "react-x/no-set-state-in-component-did-mount": "warn",
              "react-x/no-set-state-in-component-did-update": "warn",
              "react-x/no-set-state-in-component-will-update": "warn",
              "react-x/no-string-refs": "error",
              "react-x/no-unsafe-component-will-mount": "warn",
              "react-x/no-unsafe-component-will-receive-props": "warn",
              "react-x/no-unsafe-component-will-update": "warn",
              "react-x/no-unstable-context-value": "warn",
              "react-x/no-unstable-default-props": "warn",
              "react-x/no-unused-class-component-members": "warn",
              "react-x/no-unused-state": "warn",
              "react-x/no-use-context": "warn",
              "react-x/use-jsx-vars": "warn",
              ...("eslint-plugin-react-x" in override
                ? override["eslint-plugin-react-x"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
