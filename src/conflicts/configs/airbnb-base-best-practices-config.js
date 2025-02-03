// PathMark: ./src/conflicts/configs/airbnb-base-best-practices-config.js
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
      plugins: {},
    },

    /*
      AirBnb Base - Best-Practices
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base-best-practices") ||
    threshold > 1_000_000
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "accessor-pairs": 0,
              "array-callback-return": [2, { allowImplicit: true }],
              "block-scoped-var": 2,
              "class-methods-use-this": [2, { exceptMethods: [] }],
              complexity: [0, 20],
              "consistent-return": 2,
              curly: [2, "multi-line"],
              "default-case": [2, { commentPattern: "^no default$" }],
              "default-case-last": 2,
              "default-param-last": 2,
              "dot-location": [2, "property"],
              "dot-notation": [2, { allowKeywords: true }],
              eqeqeq: [2, "always", { null: "ignore" }],
              "grouped-accessor-pairs": 2,
              "guard-for-in": 2,
              "max-classes-per-file": [2, 1],
              "no-alert": 1,
              "no-caller": 2,
              "no-case-declarations": 2,
              "no-constructor-return": 2,
              "no-div-regex": 0,
              "no-else-return": [2, { allowElseIf: false }],
              "no-empty-function": [
                2,
                {
                  allow: ["arrowFunctions", "functions", "methods"],
                },
              ],
              "no-empty-pattern": 2,
              "no-empty-static-block": 0,
              "no-eq-null": 0,
              "no-eval": 2,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-extra-label": 2,
              "no-fallthrough": 2,
              "no-floating-decimal": 2,
              "no-global-assign": [2, { exceptions: [] }],
              "no-implicit-coercion": [
                0,
                {
                  allow: [],
                  boolean: false,
                  number: true,
                  string: true,
                },
              ],
              "no-implicit-globals": 0,
              "no-implied-eval": 2,
              "no-invalid-this": 0,
              "no-iterator": 2,
              "no-labels": [2, { allowLoop: false, allowSwitch: false }],
              "no-lone-blocks": 2,
              "no-loop-func": 2,
              "no-magic-numbers": [
                0,
                {
                  detectObjects: false,
                  enforceConst: true,
                  ignore: [],
                  ignoreArrayIndexes: true,
                },
              ],
              "no-multi-spaces": [
                2,
                {
                  ignoreEOLComments: false,
                },
              ],
              "no-multi-str": 2,
              "no-native-reassign": 0,
              "no-new": 2,
              "no-new-func": 2,
              "no-new-wrappers": 2,
              "no-nonoctal-decimal-escape": 2,
              "no-object-constructor": 0,
              "no-octal": 2,
              "no-octal-escape": 2,
              "no-param-reassign": [
                2,
                {
                  ignorePropertyModificationsFor: [
                    "acc",
                    "accumulator",
                    "e",
                    "ctx",
                    "context",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope",
                    "staticContext",
                  ],
                  props: true,
                },
              ],
              "no-proto": 2,
              "no-redeclare": 2,
              "no-restricted-properties": [
                2,
                {
                  message: "arguments.callee is deprecated",
                  object: "arguments",
                  property: "callee",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "global",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "self",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "window",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "global",
                  property: "isNaN",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "self",
                  property: "isNaN",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "window",
                  property: "isNaN",
                },
                {
                  message: "Please use Object.defineProperty instead.",
                  property: "__defineGetter__",
                },
                {
                  message: "Please use Object.defineProperty instead.",
                  property: "__defineSetter__",
                },
                {
                  message: "Use the exponentiation operator (**) instead.",
                  object: "Math",
                  property: "pow",
                },
              ],
              "no-return-assign": [2, "always"],
              "no-return-await": 2,
              "no-script-url": 2,
              "no-self-assign": [
                2,
                {
                  props: true,
                },
              ],
              "no-self-compare": 2,
              "no-sequences": 2,
              "no-throw-literal": 2,
              "no-unmodified-loop-condition": 0,
              "no-unused-expressions": [
                2,
                {
                  allowShortCircuit: false,
                  allowTaggedTemplates: false,
                  allowTernary: false,
                },
              ],
              "no-unused-labels": 2,
              "no-useless-call": 0,
              "no-useless-catch": 2,
              "no-useless-concat": 2,
              "no-useless-escape": 2,
              "no-useless-return": 2,
              "no-void": 2,
              "no-warning-comments": [
                0,
                { location: "start", terms: ["todo", "fixme", "xxx"] },
              ],
              "no-with": 2,
              "prefer-named-capture-group": 0,
              "prefer-object-has-own": 0,
              "prefer-promise-reject-errors": [2, { allowEmptyReject: true }],
              "prefer-regex-literals": [
                2,
                {
                  disallowRedundantWrapping: true,
                },
              ],
              radix: 2,
              "require-await": 0,
              "require-unicode-regexp": 0,
              "vars-on-top": 2,
              "wrap-iife": [2, "outside", { functionPrototypeMethods: false }],
              yoda: 2,
              ...("eslint-config-airbnb-base/best-practices" in override
                ? override["eslint-config-airbnb-base/best-practices"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
