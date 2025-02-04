// PathMark: ./src/conflicts/configs/google-config.js
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
import jsdoc from "eslint-plugin-jsdoc";
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
        jsdoc,
      },
    },

    /*
      Google
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: jsdoc
    */
    ...(disable.includes("eslint-config-google") || threshold > 1_000_000
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "array-bracket-newline": 0,
              "array-bracket-spacing": [2, "never"],
              "array-element-newline": 0,
              "arrow-parens": [2, "always"],
              "block-spacing": [2, "never"],
              "brace-style": 2,
              camelcase: [2, { properties: "never" }],
              "comma-dangle": [2, "always-multiline"],
              "comma-spacing": 2,
              "comma-style": 2,
              "computed-property-spacing": 2,
              "constructor-super": 2,
              curly: [2, "multi-line"],
              "eol-last": 2,
              "func-call-spacing": 2,
              "generator-star-spacing": [2, "after"],
              "guard-for-in": 2,
              indent: [
                2,
                2,
                {
                  CallExpression: {
                    arguments: 2,
                  },
                  FunctionDeclaration: {
                    body: 1,
                    parameters: 2,
                  },
                  FunctionExpression: {
                    body: 1,
                    parameters: 2,
                  },
                  ignoredNodes: ["ConditionalExpression"],
                  MemberExpression: 2,
                  ObjectExpression: 1,
                  SwitchCase: 1,
                },
              ],
              "jsdoc/require-jsdoc": [
                2,
                {
                  require: {
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                  },
                },
              ],
              "key-spacing": 2,
              "keyword-spacing": 2,
              "linebreak-style": 2,
              "max-len": [
                2,
                {
                  code: 80,
                  ignorePattern: "goog.(module|require)",
                  ignoreUrls: true,
                  tabWidth: 2,
                },
              ],
              "new-cap": 2,
              "no-array-constructor": 2,
              "no-caller": 2,
              "no-cond-assign": 0,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-invalid-this": 2,
              "no-irregular-whitespace": 2,
              "no-mixed-spaces-and-tabs": 2,
              "no-multi-spaces": 2,
              "no-multi-str": 2,
              "no-multiple-empty-lines": [2, { max: 2 }],
              "no-new-object": 2,
              "no-new-symbol": 2,
              "no-new-wrappers": 2,
              "no-tabs": 2,
              "no-this-before-super": 2,
              "no-throw-literal": 2,
              "no-trailing-spaces": 2,
              "no-unexpected-multiline": 2,
              "no-unused-vars": [2, { args: "none" }],
              "no-var": 2,
              "no-with": 2,
              "object-curly-spacing": 2,
              "one-var": [
                2,
                {
                  const: "never",
                  let: "never",
                  var: "never",
                },
              ],
              "operator-linebreak": [2, "after"],
              "padded-blocks": [2, "never"],
              "prefer-const": [2, { destructuring: "all" }],
              "prefer-promise-reject-errors": 2,
              "prefer-rest-params": 2,
              "prefer-spread": 2,
              "quote-props": [2, "consistent"],
              quotes: [2, "single", { allowTemplateLiterals: true }],
              "rest-spread-spacing": 2,
              semi: 2,
              "semi-spacing": 2,
              "space-before-blocks": 2,
              "space-before-function-paren": [
                2,
                {
                  anonymous: "never",
                  asyncArrow: "always",
                  named: "never",
                },
              ],
              "spaced-comment": [2, "always"],
              "switch-colon-spacing": 2,
              "yield-star-spacing": [2, "after"],
              ...("eslint-config-google" in override
                ? override["eslint-config-google"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
