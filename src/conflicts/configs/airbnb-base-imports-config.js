// PathMark: ./src/conflicts/configs/airbnb-base-imports-config.js
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
import importPlugin from "eslint-plugin-import";
import * as mdx from "eslint-plugin-mdx";
import * as espree from "espree";
import globals from "globals";
import jsoncEslintParser from "jsonc-eslint-parser";
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
    // {
    // files: mdFiles,
    // Needs to be re-enabled if adding it back in
    // processor: markdown.processors.markdown,
    // },
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
        import: importPlugin,
      },
    },

    /*
      AirBnb Base - Imports
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: import
    */
    ...(disable.includes("eslint-config-airbnb-base-imports") ||
    threshold > 1_000_000
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "import/consistent-type-specifier-style": [0, "prefer-inline"],
              "import/default": 0,
              "import/dynamic-import-chunkname": [
                0,
                {
                  importFunctions: [],
                  webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
                },
              ],
              "import/export": 2,
              "import/exports-last": 0,
              "import/extensions": [
                2,
                "ignorePackages",
                {
                  js: "never",
                  jsx: "never",
                  mjs: "never",
                },
              ],
              "import/first": 2,
              "import/group-exports": 0,
              "import/imports-first": 0,
              "import/max-dependencies": [0, { max: 10 }],
              "import/named": 2,
              "import/namespace": 0,
              "import/newline-after-import": 2,
              "import/no-absolute-path": 2,
              "import/no-amd": 2,
              "import/no-anonymous-default-export": [
                0,
                {
                  allowAnonymousClass: false,
                  allowAnonymousFunction: false,
                  allowArray: false,
                  allowArrowFunction: false,
                  allowLiteral: false,
                  allowObject: false,
                },
              ],
              "import/no-commonjs": 0,
              "import/no-cycle": [2, { maxDepth: "∞" }],
              "import/no-default-export": 0,
              "import/no-deprecated": 0,
              "import/no-duplicates": 2,
              "import/no-dynamic-require": 2,
              "import/no-empty-named-blocks": 0,
              "import/no-extraneous-dependencies": [
                2,
                {
                  devDependencies: [
                    "test/**",
                    "tests/**",
                    "spec/**",
                    "**/__tests__/**",
                    "**/__mocks__/**",
                    "test.{js,jsx}",
                    "test-*.{js,jsx}",
                    "**/*{.,_}{test,spec}.{js,jsx}",
                    "**/jest.config.js",
                    "**/jest.setup.js",
                    "**/vue.config.js",
                    "**/webpack.config.js",
                    "**/webpack.config.*.js",
                    "**/rollup.config.js",
                    "**/rollup.config.*.js",
                    "**/gulpfile.js",
                    "**/gulpfile.*.js",
                    "**/Gruntfile{,.js}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.*.js",
                    "**/karma.conf.js",
                    "**/.eslintrc.js",
                  ],
                  optionalDependencies: false,
                },
              ],
              "import/no-import-module-exports": [
                2,
                {
                  exceptions: [],
                },
              ],
              "import/no-internal-modules": [
                0,
                {
                  allow: [],
                },
              ],
              "import/no-mutable-exports": 2,
              "import/no-named-as-default": 2,
              "import/no-named-as-default-member": 2,
              "import/no-named-default": 2,
              "import/no-named-export": 0,
              "import/no-namespace": 0,
              "import/no-nodejs-modules": 0,
              "import/no-relative-packages": 2,
              "import/no-relative-parent-imports": 0,
              "import/no-restricted-paths": 0,
              "import/no-self-import": 2,
              "import/no-unassigned-import": 0,
              "import/no-unresolved": [
                2,
                { caseSensitive: true, commonjs: true },
              ],
              "import/no-unused-modules": [
                0,
                {
                  ignoreExports: [],
                  missingExports: true,
                  unusedExports: true,
                },
              ],
              "import/no-useless-path-segments": [2, { commonjs: true }],
              "import/no-webpack-loader-syntax": 2,
              "import/order": [
                2,
                { groups: [["builtin", "external", "internal"]] },
              ],
              "import/prefer-default-export": 2,
              "import/unambiguous": 0,
              ...("eslint-config-airbnb-base/imports" in override
                ? override["eslint-config-airbnb-base/imports"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
