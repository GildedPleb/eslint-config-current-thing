// PathMark: ./src/conflicts/configs/airbnb-react-config.js
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
        react,
      },
    },

    /*
      AirBnb - React
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: react
    */
    ...(disable.includes("eslint-config-airbnb-react") || threshold > 1_000_000
      ? []
      : [
          {
            files: jsxFiles,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
              },
            },
            rules: {
              "class-methods-use-this": [
                2,
                {
                  exceptMethods: [
                    "render",
                    "getInitialState",
                    "getDefaultProps",
                    "getChildContext",
                    "componentWillMount",
                    "UNSAFE_componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "UNSAFE_componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "UNSAFE_componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount",
                    "componentDidCatch",
                    "getSnapshotBeforeUpdate",
                  ],
                },
              ],
              "jsx-quotes": [2, "prefer-double"],
              "no-underscore-dangle": [
                2,
                {
                  allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
                  allowAfterSuper: false,
                  allowAfterThis: false,
                  enforceInMethodNames: true,
                },
              ],
              "react/boolean-prop-naming": [
                0,
                {
                  message: "",
                  propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
                  rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                },
              ],
              "react/button-has-type": [
                2,
                {
                  button: true,
                  reset: false,
                  submit: true,
                },
              ],
              "react/checked-requires-onchange-or-readonly": [
                0,
                {
                  ignoreExclusiveCheckedAttribute: false,
                  ignoreMissingProperties: false,
                },
              ],
              "react/default-props-match-prop-types": [
                2,
                { allowRequiredDefaults: false },
              ],
              "react/destructuring-assignment": [2, "always"],
              "react/display-name": [0, { ignoreTranspilerName: false }],
              "react/forbid-component-props": [0, { forbid: [] }],
              "react/forbid-dom-props": [0, { forbid: [] }],
              "react/forbid-elements": [0, { forbid: [] }],
              "react/forbid-foreign-prop-types": [
                1,
                { allowInPropTypes: true },
              ],
              "react/forbid-prop-types": [
                2,
                {
                  checkChildContextTypes: true,
                  checkContextTypes: true,
                  forbid: ["any", "array", "object"],
                },
              ],
              "react/forward-ref-uses-ref": 0,
              "react/function-component-definition": [
                2,
                {
                  namedComponents: [
                    "function-declaration",
                    "function-expression",
                  ],
                  unnamedComponents: "function-expression",
                },
              ],
              "react/hook-use-state": 0,
              "react/iframe-missing-sandbox": 0,
              "react/jsx-boolean-value": [2, "never", { always: [] }],
              "react/jsx-child-element-spacing": 0,
              "react/jsx-closing-bracket-location": [2, "line-aligned"],
              "react/jsx-closing-tag-location": 2,
              "react/jsx-curly-brace-presence": [
                2,
                { children: "never", props: "never" },
              ],
              "react/jsx-curly-newline": [
                2,
                {
                  multiline: "consistent",
                  singleline: "consistent",
                },
              ],
              "react/jsx-curly-spacing": [2, "never", { allowMultiline: true }],
              "react/jsx-equals-spacing": [2, "never"],
              "react/jsx-filename-extension": [2, { extensions: [".jsx"] }],
              "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
              "react/jsx-fragments": [2, "syntax"],
              "react/jsx-handler-names": [
                0,
                {
                  eventHandlerPrefix: "handle",
                  eventHandlerPropPrefix: "on",
                },
              ],
              "react/jsx-indent": [2, 2],
              "react/jsx-indent-props": [2, 2],
              "react/jsx-key": 0,
              "react/jsx-max-depth": 0,
              "react/jsx-max-props-per-line": [
                2,
                { maximum: 1, when: "multiline" },
              ],
              "react/jsx-newline": 0,
              "react/jsx-no-bind": [
                2,
                {
                  allowArrowFunctions: true,
                  allowBind: false,
                  allowFunctions: false,
                  ignoreDOMComponents: true,
                  ignoreRefs: true,
                },
              ],
              "react/jsx-no-comment-textnodes": 2,
              "react/jsx-no-constructed-context-values": 2,
              "react/jsx-no-duplicate-props": [2, { ignoreCase: true }],
              "react/jsx-no-leaked-render": 0,
              "react/jsx-no-literals": [0, { noStrings: true }],
              "react/jsx-no-script-url": [
                2,
                [
                  {
                    name: "Link",
                    props: ["to"],
                  },
                ],
              ],
              "react/jsx-no-target-blank": [
                2,
                { enforceDynamicLinks: "always" },
              ],
              "react/jsx-no-undef": 2,
              "react/jsx-no-useless-fragment": 2,
              "react/jsx-one-expression-per-line": [
                2,
                { allow: "single-child" },
              ],
              "react/jsx-pascal-case": [
                2,
                {
                  allowAllCaps: true,
                  ignore: [],
                },
              ],
              "react/jsx-props-no-multi-spaces": 2,
              "react/jsx-props-no-spread-multi": 0,
              "react/jsx-props-no-spreading": [
                2,
                {
                  custom: "enforce",
                  exceptions: [],
                  explicitSpread: "ignore",
                  html: "enforce",
                },
              ],
              "react/jsx-sort-default-props": [
                0,
                {
                  ignoreCase: true,
                },
              ],
              "react/jsx-sort-prop-types": 0,
              "react/jsx-sort-props": [
                0,
                {
                  callbacksLast: false,
                  ignoreCase: true,
                  noSortAlphabetically: false,
                  reservedFirst: true,
                  shorthandFirst: false,
                  shorthandLast: false,
                },
              ],
              "react/jsx-space-before-closing": [0, "always"],
              "react/jsx-tag-spacing": [
                2,
                {
                  afterOpening: "never",
                  beforeClosing: "never",
                  beforeSelfClosing: "always",
                  closingSlash: "never",
                },
              ],
              "react/jsx-uses-react": [2],
              "react/jsx-uses-vars": 2,
              "react/jsx-wrap-multilines": [
                2,
                {
                  arrow: "parens-new-line",
                  assignment: "parens-new-line",
                  condition: "parens-new-line",
                  declaration: "parens-new-line",
                  logical: "parens-new-line",
                  prop: "parens-new-line",
                  return: "parens-new-line",
                },
              ],
              "react/no-access-state-in-setstate": 2,
              "react/no-adjacent-inline-elements": 0,
              "react/no-array-index-key": 2,
              "react/no-arrow-function-lifecycle": 2,
              "react/no-children-prop": 2,
              "react/no-danger": 1,
              "react/no-danger-with-children": 2,
              "react/no-deprecated": [2],
              "react/no-did-mount-set-state": 0,
              "react/no-did-update-set-state": 2,
              "react/no-direct-mutation-state": 0,
              "react/no-find-dom-node": 2,
              "react/no-invalid-html-attribute": 2,
              "react/no-is-mounted": 2,
              "react/no-multi-comp": 0,
              "react/no-namespace": 2,
              "react/no-object-type-as-default-prop": 0,
              "react/no-redundant-should-component-update": 2,
              "react/no-render-return-value": 2,
              "react/no-set-state": 0,
              "react/no-string-refs": 2,
              "react/no-this-in-sfc": 2,
              "react/no-typos": 2,
              "react/no-unescaped-entities": 2,
              "react/no-unknown-property": 2,
              "react/no-unsafe": 0,
              "react/no-unstable-nested-components": 2,
              "react/no-unused-class-component-methods": 2,
              "react/no-unused-prop-types": [
                2,
                {
                  customValidators: [],
                  skipShapeProps: true,
                },
              ],
              "react/no-unused-state": 2,
              "react/no-will-update-set-state": 2,
              "react/prefer-es6-class": [2, "always"],
              "react/prefer-exact-props": 2,
              "react/prefer-read-only-props": 0,
              "react/prefer-stateless-function": [
                2,
                { ignorePureComponents: true },
              ],
              "react/prop-types": [
                2,
                {
                  customValidators: [],
                  ignore: [],
                  skipUndeclared: false,
                },
              ],
              "react/react-in-jsx-scope": 2,
              "react/require-default-props": [
                2,
                {
                  forbidDefaultForRequired: true,
                },
              ],
              "react/require-optimization": [0, { allowDecorators: [] }],
              "react/require-render-return": 2,
              "react/self-closing-comp": 2,
              "react/sort-comp": [
                2,
                {
                  groups: {
                    lifecycle: [
                      "displayName",
                      "propTypes",
                      "contextTypes",
                      "childContextTypes",
                      "mixins",
                      "statics",
                      "defaultProps",
                      "constructor",
                      "getDefaultProps",
                      "getInitialState",
                      "state",
                      "getChildContext",
                      "getDerivedStateFromProps",
                      "componentWillMount",
                      "UNSAFE_componentWillMount",
                      "componentDidMount",
                      "componentWillReceiveProps",
                      "UNSAFE_componentWillReceiveProps",
                      "shouldComponentUpdate",
                      "componentWillUpdate",
                      "UNSAFE_componentWillUpdate",
                      "getSnapshotBeforeUpdate",
                      "componentDidUpdate",
                      "componentDidCatch",
                      "componentWillUnmount",
                    ],
                    rendering: ["/^render.+$/", "render"],
                  },
                  order: [
                    "static-variables",
                    "static-methods",
                    "instance-variables",
                    "lifecycle",
                    "/^handle.+$/",
                    "/^on.+$/",
                    "getters",
                    "setters",
                    "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                    "instance-methods",
                    "everything-else",
                    "rendering",
                  ],
                },
              ],
              "react/sort-default-props": [
                0,
                {
                  ignoreCase: false,
                },
              ],
              "react/sort-prop-types": [
                0,
                {
                  callbacksLast: false,
                  ignoreCase: true,
                  requiredFirst: false,
                  sortShapeProp: true,
                },
              ],
              "react/state-in-constructor": [2, "always"],
              "react/static-property-placement": [2, "property assignment"],
              "react/style-prop-object": 2,
              "react/void-dom-elements-no-children": 2,
              ...("eslint-config-airbnb/react" in override
                ? override["eslint-config-airbnb/react"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
