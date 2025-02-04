// PathMark: ./src/conflicts/configs/airbnb-react-a11y-config.js
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
import jsxA11y from "eslint-plugin-jsx-a11y";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
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
        "jsx-a11y": jsxA11y,
        react,
      },
    },

    /*
      AirBnb - React-A11y
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: jsx-a11y, react
    */
    ...(disable.includes("eslint-config-airbnb-react-a11y") ||
    threshold > 1_000_000
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
              "jsx-a11y/accessible-emoji": 0,
              "jsx-a11y/alt-text": [
                2,
                {
                  area: [],
                  elements: ["img", "object", "area", 'input[type="image"]'],
                  img: [],
                  'input[type="image"]': [],
                  object: [],
                },
              ],
              "jsx-a11y/anchor-ambiguous-text": 0,
              "jsx-a11y/anchor-has-content": [2, { components: [] }],
              "jsx-a11y/anchor-is-valid": [
                2,
                {
                  aspects: ["noHref", "invalidHref", "preferButton"],
                  components: ["Link"],
                  specialLink: ["to"],
                },
              ],
              "jsx-a11y/aria-activedescendant-has-tabindex": 2,
              "jsx-a11y/aria-props": 2,
              "jsx-a11y/aria-proptypes": 2,
              "jsx-a11y/aria-role": [2, { ignoreNonDOM: false }],
              "jsx-a11y/aria-unsupported-elements": 2,
              "jsx-a11y/autocomplete-valid": [
                0,
                {
                  inputComponents: [],
                },
              ],
              "jsx-a11y/click-events-have-key-events": 2,
              "jsx-a11y/control-has-associated-label": [
                2,
                {
                  controlComponents: [],
                  depth: 5,
                  ignoreElements: [
                    "audio",
                    "canvas",
                    "embed",
                    "input",
                    "textarea",
                    "tr",
                    "video",
                  ],
                  ignoreRoles: [
                    "grid",
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "row",
                    "tablist",
                    "toolbar",
                    "tree",
                    "treegrid",
                  ],
                  labelAttributes: ["label"],
                },
              ],
              "jsx-a11y/heading-has-content": [2, { components: [""] }],
              "jsx-a11y/html-has-lang": 2,
              "jsx-a11y/iframe-has-title": 2,
              "jsx-a11y/img-redundant-alt": 2,
              "jsx-a11y/interactive-supports-focus": 2,
              "jsx-a11y/label-has-associated-control": [
                2,
                {
                  assert: "both",
                  controlComponents: [],
                  depth: 25,
                  labelAttributes: [],
                  labelComponents: [],
                },
              ],
              "jsx-a11y/label-has-for": [
                0,
                {
                  allowChildren: false,
                  components: [],
                  required: {
                    every: ["nesting", "id"],
                  },
                },
              ],
              "jsx-a11y/lang": 2,
              "jsx-a11y/media-has-caption": [
                2,
                {
                  audio: [],
                  track: [],
                  video: [],
                },
              ],
              "jsx-a11y/mouse-events-have-key-events": 2,
              "jsx-a11y/no-access-key": 2,
              "jsx-a11y/no-aria-hidden-on-focusable": 0,
              "jsx-a11y/no-autofocus": [2, { ignoreNonDOM: true }],
              "jsx-a11y/no-distracting-elements": [
                2,
                {
                  elements: ["marquee", "blink"],
                },
              ],
              "jsx-a11y/no-interactive-element-to-noninteractive-role": [
                2,
                {
                  tr: ["none", "presentation"],
                },
              ],
              "jsx-a11y/no-noninteractive-element-interactions": [
                2,
                {
                  handlers: [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp",
                  ],
                },
              ],
              "jsx-a11y/no-noninteractive-element-to-interactive-role": [
                2,
                {
                  li: ["menuitem", "option", "row", "tab", "treeitem"],
                  ol: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid",
                  ],
                  table: ["grid"],
                  td: ["gridcell"],
                  ul: [
                    "listbox",
                    "menu",
                    "menubar",
                    "radiogroup",
                    "tablist",
                    "tree",
                    "treegrid",
                  ],
                },
              ],
              "jsx-a11y/no-noninteractive-tabindex": [
                2,
                {
                  allowExpressionValues: true,
                  roles: ["tabpanel"],
                  tags: [],
                },
              ],
              "jsx-a11y/no-onchange": 0,
              "jsx-a11y/no-redundant-roles": [
                2,
                {
                  nav: ["navigation"],
                },
              ],
              "jsx-a11y/no-static-element-interactions": [
                2,
                {
                  handlers: [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp",
                  ],
                },
              ],
              "jsx-a11y/prefer-tag-over-role": 0,
              "jsx-a11y/role-has-required-aria-props": 2,
              "jsx-a11y/role-supports-aria-props": 2,
              "jsx-a11y/scope": 2,
              "jsx-a11y/tabindex-no-positive": 2,
              ...("eslint-config-airbnb/react-a11y" in override
                ? override["eslint-config-airbnb/react-a11y"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
