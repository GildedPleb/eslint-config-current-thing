// PathMark: ./src/conflicts/configs/airbnb-ts-config.js
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
        "@typescript-eslint": tseslint.plugin,
        import: importPlugin,
        react,
      },
    },

    /*
      AirBnb-Typescript
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: @typescript-eslint, import, react
    */
    ...(disable.includes("eslint-config-airbnb-typescript") ||
    threshold > 1_000_000
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@typescript-eslint/default-param-last": 2,
              "@typescript-eslint/dot-notation": [2, { allowKeywords: true }],
              "@typescript-eslint/naming-convention": [
                2,
                {
                  format: ["camelCase", "PascalCase", "UPPER_CASE"],
                  selector: "variable",
                },
                {
                  format: ["camelCase", "PascalCase"],
                  selector: "function",
                },
                {
                  format: ["PascalCase"],
                  selector: "typeLike",
                },
              ],
              "@typescript-eslint/no-array-constructor": 2,
              "@typescript-eslint/no-dupe-class-members": 2,
              "@typescript-eslint/no-empty-function": [
                2,
                {
                  allow: ["arrowFunctions", "functions", "methods"],
                },
              ],
              "@typescript-eslint/no-extra-parens": [
                0,
                "all",
                {
                  conditionalAssign: true,
                  enforceForArrowConditionals: false,
                  ignoreJSX: "all",
                  nestedBinaryExpressions: false,
                  returnAssign: false,
                },
              ],
              "@typescript-eslint/no-implied-eval": 2,
              "@typescript-eslint/no-loop-func": 2,
              "@typescript-eslint/no-loss-of-precision": 2,
              "@typescript-eslint/no-magic-numbers": [
                0,
                {
                  detectObjects: false,
                  enforceConst: true,
                  ignore: [],
                  ignoreArrayIndexes: true,
                },
              ],
              "@typescript-eslint/no-redeclare": 2,
              "@typescript-eslint/no-shadow": 2,
              "@typescript-eslint/no-unused-expressions": [
                2,
                {
                  allowShortCircuit: false,
                  allowTaggedTemplates: false,
                  allowTernary: false,
                },
              ],
              "@typescript-eslint/no-unused-vars": [
                2,
                { args: "after-used", ignoreRestSiblings: true, vars: "all" },
              ],
              "@typescript-eslint/no-use-before-define": [
                2,
                { classes: true, functions: true, variables: true },
              ],
              "@typescript-eslint/no-useless-constructor": 2,
              "@typescript-eslint/require-await": 0,
              "@typescript-eslint/return-await": [2, "in-try-catch"],
              "brace-style": 0,
              camelcase: 0,
              "comma-dangle": 0,
              "comma-spacing": 0,
              "constructor-super": 0,
              "default-param-last": 0,
              "dot-notation": 0,
              "func-call-spacing": 0,
              "getter-return": 0,
              "import/extensions": [
                2,
                "ignorePackages",
                {
                  js: "never",
                  jsx: "never",
                  mjs: "never",
                  ts: "never",
                  tsx: "never",
                },
              ],
              "import/named": 0,
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
                    "test.{ts,tsx}",
                    "test-*.{js,jsx}",
                    "test-*.{ts,tsx}",
                    "**/*{.,_}{test,spec}.{js,jsx}",
                    "**/*{.,_}{test,spec}.{ts,tsx}",
                    "**/jest.config.js",
                    "**/jest.config.ts",
                    "**/jest.setup.js",
                    "**/jest.setup.ts",
                    "**/vue.config.js",
                    "**/vue.config.ts",
                    "**/webpack.config.js",
                    "**/webpack.config.ts",
                    "**/webpack.config.*.js",
                    "**/webpack.config.*.ts",
                    "**/rollup.config.js",
                    "**/rollup.config.ts",
                    "**/rollup.config.*.js",
                    "**/rollup.config.*.ts",
                    "**/gulpfile.js",
                    "**/gulpfile.ts",
                    "**/gulpfile.*.js",
                    "**/gulpfile.*.ts",
                    "**/Gruntfile{,.js}",
                    "**/Gruntfile{,.ts}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.ts",
                    "**/protractor.conf.*.js",
                    "**/protractor.conf.*.ts",
                    "**/karma.conf.js",
                    "**/karma.conf.ts",
                    "**/.eslintrc.js",
                    "**/.eslintrc.ts",
                  ],
                  optionalDependencies: false,
                },
              ],
              "import/no-named-as-default-member": 0,
              "import/no-unresolved": 0,
              indent: 0,
              "keyword-spacing": 0,
              "lines-between-class-members": 0,
              "no-array-constructor": 0,
              "no-const-assign": 0,
              "no-dupe-args": 0,
              "no-dupe-class-members": 0,
              "no-dupe-keys": 0,
              "no-empty-function": 0,
              "no-extra-parens": 0,
              "no-extra-semi": 0,
              "no-func-assign": 0,
              "no-implied-eval": 0,
              "no-import-assign": 0,
              "no-loop-func": 0,
              "no-loss-of-precision": 0,
              "no-magic-numbers": 0,
              "no-new-func": 0,
              "no-new-symbol": 0,
              "no-obj-calls": 0,
              "no-redeclare": 0,
              "no-return-await": 0,
              "no-setter-return": 0,
              "no-shadow": 0,
              "no-this-before-super": 0,
              "no-throw-literal": 0,
              "no-undef": 0,
              "no-unreachable": 0,
              "no-unsafe-negation": 0,
              "no-unused-expressions": 0,
              "no-unused-vars": 0,
              "no-use-before-define": 0,
              "no-useless-constructor": 0,
              "object-curly-spacing": 0,
              quotes: 0,
              "require-await": 0,
              semi: 0,
              "space-before-blocks": 0,
              "space-before-function-paren": 0,
              "space-infix-ops": 0,
              "valid-typeof": 0,
              ...("eslint-config-airbnb-typescript" in override
                ? override["eslint-config-airbnb-typescript"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
