// PathMark: ./src/conflicts/configs/standard-config.js
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
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import nNode from "eslint-plugin-n";
import promise from "eslint-plugin-promise";
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
        import: importPlugin,
        n: nNode,
        promise,
      },
    },

    /*
      Standard
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: import, n, promise
    */
    ...(disable.includes("eslint-config-standard") || threshold > 1_000_000
      ? []
      : [
          {
            files: jsFiles,
            languageOptions: {
              globals: {
                document: "readonly",
                navigator: "readonly",
                window: "readonly",
              },
            },
            rules: {
              "accessor-pairs": [
                2,
                { enforceForClassMembers: true, setWithoutGet: true },
              ],
              "array-bracket-spacing": [2, "never"],
              "array-callback-return": [
                2,
                {
                  allowImplicit: false,
                  checkForEach: false,
                },
              ],
              "arrow-spacing": [2, { after: true, before: true }],
              "block-spacing": [2, "always"],
              "brace-style": [2, "1tbs", { allowSingleLine: true }],
              camelcase: [
                2,
                {
                  allow: ["^UNSAFE_"],
                  ignoreGlobals: true,
                  properties: "never",
                },
              ],
              "comma-dangle": [
                2,
                {
                  arrays: "never",
                  exports: "never",
                  functions: "never",
                  imports: "never",
                  objects: "never",
                },
              ],
              "comma-spacing": [2, { after: true, before: false }],
              "comma-style": [2, "last"],
              "computed-property-spacing": [
                2,
                "never",
                { enforceForClassMembers: true },
              ],
              "constructor-super": 2,
              curly: [2, "multi-line"],
              "default-case-last": 2,
              "dot-location": [2, "property"],
              "dot-notation": [2, { allowKeywords: true }],
              "eol-last": 2,
              eqeqeq: [2, "always", { null: "ignore" }],
              "func-call-spacing": [2, "never"],
              "generator-star-spacing": [2, { after: true, before: true }],
              "import/export": 2,
              "import/first": 2,
              "import/no-absolute-path": [
                2,
                { amd: false, commonjs: true, esmodule: true },
              ],
              "import/no-duplicates": 2,
              "import/no-named-default": 2,
              "import/no-webpack-loader-syntax": 2,
              indent: [
                2,
                2,
                {
                  ArrayExpression: 1,
                  CallExpression: { arguments: 1 },
                  flatTernaryExpressions: false,
                  FunctionDeclaration: { body: 1, parameters: 1 },
                  FunctionExpression: { body: 1, parameters: 1 },
                  ignoreComments: false,
                  ignoredNodes: [
                    "TemplateLiteral *",
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                  ],
                  ImportDeclaration: 1,
                  MemberExpression: 1,
                  ObjectExpression: 1,
                  offsetTernaryExpressions: true,
                  outerIIFEBody: 1,
                  SwitchCase: 1,
                  VariableDeclarator: 1,
                },
              ],
              "key-spacing": [2, { afterColon: true, beforeColon: false }],
              "keyword-spacing": [2, { after: true, before: true }],
              "lines-between-class-members": [
                2,
                "always",
                { exceptAfterSingleLine: true },
              ],
              "multiline-ternary": [2, "always-multiline"],
              "n/handle-callback-err": [2, "^(err|error)$"],
              "n/no-callback-literal": 2,
              "n/no-deprecated-api": 2,
              "n/no-exports-assign": 2,
              "n/no-new-require": 2,
              "n/no-path-concat": 2,
              "n/process-exit-as-throw": 2,
              "new-cap": [
                2,
                { capIsNew: false, newIsCap: true, properties: true },
              ],
              "new-parens": 2,
              "no-array-constructor": 2,
              "no-async-promise-executor": 2,
              "no-caller": 2,
              "no-case-declarations": 2,
              "no-class-assign": 2,
              "no-compare-neg-zero": 2,
              "no-cond-assign": 2,
              "no-const-assign": 2,
              "no-constant-condition": [2, { checkLoops: false }],
              "no-control-regex": 2,
              "no-debugger": 2,
              "no-delete-var": 2,
              "no-dupe-args": 2,
              "no-dupe-class-members": 2,
              "no-dupe-keys": 2,
              "no-duplicate-case": 2,
              "no-empty": [2, { allowEmptyCatch: true }],
              "no-empty-character-class": 2,
              "no-empty-pattern": 2,
              "no-eval": 2,
              "no-ex-assign": 2,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-extra-boolean-cast": 2,
              "no-extra-parens": [2, "functions"],
              "no-fallthrough": 2,
              "no-floating-decimal": 2,
              "no-func-assign": 2,
              "no-global-assign": 2,
              "no-implied-eval": 2,
              "no-import-assign": 2,
              "no-invalid-regexp": 2,
              "no-irregular-whitespace": 2,
              "no-iterator": 2,
              "no-labels": [2, { allowLoop: false, allowSwitch: false }],
              "no-lone-blocks": 2,
              "no-loss-of-precision": 2,
              "no-misleading-character-class": 2,
              "no-mixed-operators": [
                2,
                {
                  allowSamePrecedence: true,
                  groups: [
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                  ],
                },
              ],
              "no-mixed-spaces-and-tabs": 2,
              "no-multi-spaces": 2,
              "no-multi-str": 2,
              "no-multiple-empty-lines": [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
              "no-new": 2,
              "no-new-func": 2,
              "no-new-object": 2,
              "no-new-symbol": 2,
              "no-new-wrappers": 2,
              "no-obj-calls": 2,
              "no-octal": 2,
              "no-octal-escape": 2,
              "no-proto": 2,
              "no-prototype-builtins": 2,
              "no-redeclare": [2, { builtinGlobals: false }],
              "no-regex-spaces": 2,
              "no-return-assign": [2, "except-parens"],
              "no-self-assign": [2, { props: true }],
              "no-self-compare": 2,
              "no-sequences": 2,
              "no-shadow-restricted-names": 2,
              "no-sparse-arrays": 2,
              "no-tabs": 2,
              "no-template-curly-in-string": 2,
              "no-this-before-super": 2,
              "no-throw-literal": 2,
              "no-trailing-spaces": 2,
              "no-undef": 2,
              "no-undef-init": 2,
              "no-unexpected-multiline": 2,
              "no-unmodified-loop-condition": 2,
              "no-unneeded-ternary": [2, { defaultAssignment: false }],
              "no-unreachable": 2,
              "no-unreachable-loop": 2,
              "no-unsafe-finally": 2,
              "no-unsafe-negation": 2,
              "no-unused-expressions": [
                2,
                {
                  allowShortCircuit: true,
                  allowTaggedTemplates: true,
                  allowTernary: true,
                },
              ],
              "no-unused-vars": [
                2,
                {
                  args: "none",
                  caughtErrors: "none",
                  ignoreRestSiblings: true,
                  vars: "all",
                },
              ],
              "no-use-before-define": [
                2,
                { classes: false, functions: false, variables: false },
              ],
              "no-useless-backreference": 2,
              "no-useless-call": 2,
              "no-useless-catch": 2,
              "no-useless-computed-key": 2,
              "no-useless-constructor": 2,
              "no-useless-escape": 2,
              "no-useless-rename": 2,
              "no-useless-return": 2,
              "no-var": 1,
              "no-void": 2,
              "no-whitespace-before-property": 2,
              "no-with": 2,
              "object-curly-newline": [
                2,
                { consistent: true, multiline: true },
              ],
              "object-curly-spacing": [2, "always"],
              "object-property-newline": [
                2,
                { allowMultiplePropertiesPerLine: true },
              ],
              "object-shorthand": [1, "properties"],
              "one-var": [2, { initialized: "never" }],
              "operator-linebreak": [
                2,
                "after",
                { overrides: { ":": "before", "?": "before", "|>": "before" } },
              ],
              "padded-blocks": [
                2,
                { blocks: "never", classes: "never", switches: "never" },
              ],
              "prefer-const": [2, { destructuring: "all" }],
              "prefer-promise-reject-errors": 2,
              "prefer-regex-literals": [2, { disallowRedundantWrapping: true }],
              "promise/param-names": 2,
              "quote-props": [2, "as-needed"],
              quotes: [
                2,
                "single",
                { allowTemplateLiterals: false, avoidEscape: true },
              ],
              "rest-spread-spacing": [2, "never"],
              semi: [2, "never"],
              "semi-spacing": [2, { after: true, before: false }],
              "space-before-blocks": [2, "always"],
              "space-before-function-paren": [2, "always"],
              "space-in-parens": [2, "never"],
              "space-infix-ops": 2,
              "space-unary-ops": [2, { nonwords: false, words: true }],
              "spaced-comment": [
                2,
                "always",
                {
                  block: {
                    balanced: true,
                    exceptions: ["*"],
                    markers: ["*package", "!", ",", ":", "::", "flow-include"],
                  },
                  line: { markers: ["*package", "!", "/", ",", "="] },
                },
              ],
              "symbol-description": 2,
              "template-curly-spacing": [2, "never"],
              "template-tag-spacing": [2, "never"],
              "unicode-bom": [2, "never"],
              "use-isnan": [
                2,
                {
                  enforceForIndexOf: true,
                  enforceForSwitchCase: true,
                },
              ],
              "valid-typeof": [2, { requireStringLiterals: true }],
              "wrap-iife": [2, "any", { functionPrototypeMethods: true }],
              "yield-star-spacing": [2, "both"],
              yoda: [2, "never"],
              ...("eslint-config-standard" in override
                ? override["eslint-config-standard"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
