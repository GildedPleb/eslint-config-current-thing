// PathMark: ./src/conflicts/configs/rn-config.js
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-unused-vars */
// @ts-nocheck

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

import comments from "@eslint-community/eslint-plugin-eslint-comments";
import {
  parseForESLint as graphQLparseForESLint,
  processors as graphqlProcessors,
} from "@graphql-eslint/eslint-plugin";
import { defineFlatConfig } from "eslint-define-config";
import * as eslintMdx from "eslint-mdx";
import jest from "eslint-plugin-jest";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNativeIndie from "eslint-plugin-react-native";
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
        "eslint-comments": comments,
        jest,
        react,
        "react-hooks": reactHooks,
        "react-native": reactNativeIndie,
      },
    },

    /*
      React Native Config
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: eslint-comments, react, react-hooks, react-native, jest
    */
    ...(disable.includes("@react-native-community/eslint-config") ||
    disable.includes("@react-native/eslint-config") ||
    disable.includes("eslint-plugin-react-native-globals") ||
    threshold > 1_000_000
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: {
                __DEV__: true,
                __dirname: false,
                __fbBatchedBridgeConfig: false,
                AbortController: false,
                alert: false,
                Blob: true,
                cancelAnimationFrame: false,
                cancelIdleCallback: false,
                clearImmediate: true,
                clearInterval: false,
                clearTimeout: false,
                console: false,
                document: false,
                ErrorUtils: false,
                escape: false,
                Event: false,
                EventTarget: false,
                exports: false,
                fetch: false,
                File: true,
                FileReader: false,
                FormData: false,
                global: false,
                Headers: false,
                Intl: false,
                Map: true,
                module: false,
                navigator: false,
                process: false,
                Promise: true,
                queueMicrotask: true,
                requestAnimationFrame: true,
                requestIdleCallback: true,
                require: false,
                Set: true,
                setImmediate: true,
                setInterval: false,
                setTimeout: false,
                URL: false,
                URLSearchParams: false,
                WebSocket: true,
                window: false,
                XMLHttpRequest: false,
              },
            },
            rules: {
              "block-scoped-var": 0,
              "brace-style": 0,
              camelcase: 0,
              "comma-dangle": [1, "always-multiline"],
              "comma-spacing": 0,
              complexity: 0,
              "consistent-return": 0,
              "consistent-this": 1,
              curly: 1,
              "default-case": 0,
              "dot-notation": 1,
              "eol-last": 1,
              eqeqeq: [1, "allow-null"],
              "eslint-comments/no-aggregating-enable": 1,
              "eslint-comments/no-unlimited-disable": 1,
              "eslint-comments/no-unused-disable": 1,
              "eslint-comments/no-unused-enable": 1,
              "func-call-spacing": 1,
              "func-names": 0,
              "func-style": 0,
              "guard-for-in": 0,
              "handle-callback-err": 1,
              "jest/no-disabled-tests": 1,
              "jest/no-focused-tests": 1,
              "jest/no-identical-title": 1,
              "jest/valid-expect": 1,
              "jsx-quotes": [1, "prefer-double"],
              "key-spacing": 0,
              "keyword-spacing": 1,
              "max-depth": 0,
              "max-len": 0,
              "max-nested-callbacks": 0,
              "max-params": 0,
              "max-statements": 0,
              "new-cap": 0,
              "new-parens": 1,
              "no-alert": 1,
              "no-array-constructor": 1,
              "no-bitwise": 1,
              "no-caller": 1,
              "no-catch-shadow": 1,
              "no-cond-assign": 1,
              "no-console": 0,
              "no-const-assign": 2,
              "no-constant-condition": 0,
              "no-control-regex": 1,
              "no-debugger": 1,
              "no-delete-var": 1,
              "no-div-regex": 1,
              "no-dupe-class-members": 2,
              "no-dupe-keys": 2,
              "no-else-return": 0,
              "no-empty": 0,
              "no-empty-character-class": 1,
              "no-eq-null": 0,
              "no-eval": 2,
              "no-ex-assign": 1,
              "no-extend-native": 1,
              "no-extra-bind": 1,
              "no-extra-boolean-cast": 1,
              "no-extra-parens": 0,
              "no-extra-semi": 1,
              "no-fallthrough": 1,
              "no-floating-decimal": 1,
              "no-func-assign": 1,
              "no-implied-eval": 1,
              "no-inner-declarations": 0,
              "no-invalid-regexp": 1,
              "no-iterator": 1,
              "no-label-var": 1,
              "no-labels": 1,
              "no-lone-blocks": 1,
              "no-lonely-if": 0,
              "no-loop-func": 0,
              "no-mixed-requires": 1,
              "no-mixed-spaces-and-tabs": 1,
              "no-multi-spaces": 0,
              "no-multi-str": 0,
              "no-native-reassign": 0,
              "no-negated-in-lhs": 1,
              "no-nested-ternary": 0,
              "no-new": 1,
              "no-new-func": 2,
              "no-new-object": 1,
              "no-new-require": 1,
              "no-new-wrappers": 1,
              "no-obj-calls": 1,
              "no-octal": 1,
              "no-octal-escape": 1,
              "no-path-concat": 1,
              "no-plusplus": 0,
              "no-process-exit": 0,
              "no-proto": 1,
              "no-redeclare": 0,
              "no-regex-spaces": 1,
              "no-reserved-keys": 0,
              "no-restricted-modules": 1,
              "no-return-assign": 1,
              "no-script-url": 1,
              "no-self-compare": 1,
              "no-sequences": 1,
              "no-shadow": 1,
              "no-shadow-restricted-names": 1,
              "no-sparse-arrays": 1,
              "no-sync": 0,
              "no-ternary": 0,
              "no-trailing-spaces": 1,
              "no-undef": 2,
              "no-undef-init": 1,
              "no-undefined": 0,
              "no-underscore-dangle": 0,
              "no-unreachable": 2,
              "no-unused-expressions": 0,
              "no-unused-vars": [
                1,
                { args: "none", ignoreRestSiblings: true, vars: "all" },
              ],
              "no-use-before-define": 0,
              "no-useless-escape": 1,
              "no-void": 1,
              "no-warning-comments": 0,
              "no-with": 1,
              "one-var": 0,
              "quote-props": 0,
              quotes: [
                1,
                "single",
                { allowTemplateLiterals: true, avoidEscape: true },
              ],
              radix: 1,
              "react-hooks/exhaustive-deps": 2,
              "react-hooks/rules-of-hooks": 2,
              "react-native/no-inline-styles": 1,
              "react/display-name": 0,
              "react/jsx-boolean-value": 0,
              "react/jsx-no-comment-textnodes": 2,
              "react/jsx-no-duplicate-props": 2,
              "react/jsx-no-undef": 2,
              "react/jsx-sort-props": 0,
              "react/jsx-uses-react": 1,
              "react/jsx-uses-vars": 1,
              "react/no-did-mount-set-state": 1,
              "react/no-did-update-set-state": 1,
              "react/no-multi-comp": 0,
              "react/no-string-refs": 1,
              "react/no-unknown-property": 0,
              "react/no-unstable-nested-components": 1,
              "react/prop-types": 0,
              "react/react-in-jsx-scope": 1,
              "react/self-closing-comp": 1,
              "react/wrap-multilines": 0,
              semi: 1,
              "semi-spacing": 1,
              "sort-vars": 0,
              "space-in-brackets": 0,
              "space-in-parens": 0,
              "space-infix-ops": 1,
              "space-unary-ops": [1, { nonwords: false, words: true }],
              "use-isnan": 1,
              "valid-typeof": 1,
              "vars-on-top": 0,
              "wrap-iife": 0,
              "wrap-regex": 0,
              yoda: 1,
              ...("@react-native-community/eslint-config" in override
                ? override["@react-native-community/eslint-config"]
                : {}),
              ...("@react-native/eslint-config" in override
                ? override["@react-native/eslint-config"]
                : {}),
              ...("eslint-plugin-react-native-globals" in override
                ? override["eslint-plugin-react-native-globals"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
