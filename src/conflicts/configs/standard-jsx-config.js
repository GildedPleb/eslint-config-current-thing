// PathMark: ./src/conflicts/configs/standard-jsx-config.js
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
import react from "eslint-plugin-react";
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
const tomlFiles = ["**/*.toml"];
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
      files: tomlFiles,
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
        react,
      },
    },

    /*
      Standard JSX
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: react
    */
    ...(disable.includes("eslint-config-standard-jsx") || threshold > 1_000_000
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
              },
            },
            rules: {
              "jsx-quotes": [2, "prefer-single"],
              "react/jsx-boolean-value": 2,
              "react/jsx-closing-bracket-location": [2, "tag-aligned"],
              "react/jsx-closing-tag-location": 2,
              "react/jsx-curly-brace-presence": [
                2,
                {
                  children: "never",
                  props: "never",
                },
              ],
              "react/jsx-curly-newline": [
                2,
                {
                  multiline: "consistent",
                  singleline: "consistent",
                },
              ],
              "react/jsx-curly-spacing": [
                2,
                {
                  attributes: { allowMultiline: true, when: "never" },
                  children: { allowMultiline: true, when: "never" },
                },
              ],
              "react/jsx-equals-spacing": [2, "never"],
              "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
              "react/jsx-fragments": [2, "syntax"],
              "react/jsx-handler-names": 2,
              "react/jsx-indent": [
                2,
                2,
                {
                  checkAttributes: false,
                  indentLogicalExpressions: true,
                },
              ],
              "react/jsx-indent-props": [2, 2],
              "react/jsx-key": [
                2,
                {
                  checkFragmentShorthand: true,
                },
              ],
              "react/jsx-no-comment-textnodes": 2,
              "react/jsx-no-duplicate-props": 2,
              "react/jsx-no-target-blank": [
                2,
                { enforceDynamicLinks: "always" },
              ],
              "react/jsx-no-undef": [2, { allowGlobals: true }],
              "react/jsx-pascal-case": [2, { allowAllCaps: false }],
              "react/jsx-props-no-multi-spaces": 2,
              "react/jsx-tag-spacing": [
                2,
                {
                  afterOpening: "never",
                  beforeClosing: "never",
                  beforeSelfClosing: "always",
                  closingSlash: "never",
                },
              ],
              "react/jsx-uses-react": 2,
              "react/jsx-uses-vars": 2,
              "react/jsx-wrap-multilines": [
                2,
                {
                  arrow: "ignore",
                  assignment: "parens-new-line",
                  condition: "ignore",
                  declaration: "parens-new-line",
                  logical: "ignore",
                  prop: "ignore",
                  return: "parens-new-line",
                },
              ],
              "react/no-children-prop": 2,
              "react/no-danger-with-children": 2,
              "react/no-deprecated": 2,
              "react/no-direct-mutation-state": 2,
              "react/no-find-dom-node": 2,
              "react/no-is-mounted": 2,
              "react/no-render-return-value": 2,
              "react/no-string-refs": [
                2,
                {
                  noTemplateLiterals: true,
                },
              ],
              "react/no-unescaped-entities": [
                2,
                {
                  forbid: [">", "}"],
                },
              ],
              "react/require-render-return": 2,
              "react/self-closing-comp": 2,
              ...("eslint-config-standard-jsx" in override
                ? override["eslint-config-standard-jsx"]
                : {}),
            },
            settings: {
              react: {
                version: "detect",
              },
            },
          },
        ]),
  ]);

export default configGen();
// EOF
