// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsdoc/no-types */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 3/23/2024
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
// Import perfectionist from "eslint-plugin-perfectionist";
// import noOnlyTest from "eslint-plugin-no-only-tests";
// import esX from "eslint-plugin-es-x";
// import es from "eslint-plugin-es";
// import i18next from "eslint-plugin-i18next";
import { rules as emotion } from "@emotion/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
// Import importSort from "eslint-plugin-simple-import-sort";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import nextjs from "@next/eslint-plugin-next";
import rnConfig from "@react-native/eslint-config";
import rnPlugin from "@react-native/eslint-plugin";
import reactNativeConfig from "@react-native-community/eslint-config";
// Import importPlugin from "eslint-plugin-import";
// import importResolver from "eslint-import-resolver-typescript";
// import comp from "eslint-plugin-compat";
// import functional from "eslint-plugin-functional";
import shopify from "@shopify/eslint-plugin";
// Import vueParser from "vue-eslint-parser";
import stylistic from "@stylistic/eslint-plugin";
import restrictedGlobals from "confusing-browser-globals";
import google from "eslint-config-google";
// Import jsdoc from "eslint-plugin-jsdoc";
// import standard from "eslint-config-standard";
import standardTS from "eslint-config-love";
import prettierConfig from "eslint-config-prettier";
// Import jest from "eslint-plugin-jest";
import standardJsx from "eslint-config-standard-jsx";
// Import jsxA11y from "eslint-plugin-jsx-a11y";
// import flowtype from "eslint-plugin-flowtype";
// import ftFlow from "eslint-plugin-ft-flow";
import standardReact from "eslint-config-standard-react";
import xo from "eslint-config-xo";
import comp from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
import es from "eslint-plugin-es";
// Import { rules: emotion } from "@emotion/eslint-plugin";
import esX from "eslint-plugin-es-x";
import commentsOld from "eslint-plugin-eslint-comments";
import flowtype from "eslint-plugin-flowtype";
import ftFlow from "eslint-plugin-ft-flow";
import functional from "eslint-plugin-functional";
import header from "eslint-plugin-header";
import i18next from "eslint-plugin-i18next";
import importPlugin from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";
import jestFormatting from "eslint-plugin-jest-formatting";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nNode from "eslint-plugin-n";
import noOnlyTest from "eslint-plugin-no-only-tests";
import unsanitized from "eslint-plugin-no-unsanitized";
import node from "eslint-plugin-node";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier";
// Import nextjs from "@next/eslint-plugin-next";
import promise from "eslint-plugin-promise";
// Import cra from "eslint-config-react-app";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import reactPerf from "eslint-plugin-react-perf";
// Import typescriptParser from "@typescript-eslint/parser";
// import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import regexp from "eslint-plugin-regexp";
// Import comments from "@eslint-community/eslint-plugin-eslint-comments";
// import commentsOld from "eslint-plugin-eslint-comments";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";
// Import cssModules from "eslint-plugin-css-modules";
// import airbnb from "eslint-config-airbnb";
// import airbnbBase from "eslint-config-airbnb-base";
// import airbnbTypescript from "eslint-config-airbnb-typescript";
// import cra from "eslint-config-react-app";
// import cra from "eslint-config-react-app";
import testingLibrary from "eslint-plugin-testing-library";
import tsdoc from "eslint-plugin-tsdoc";
// Import nNode from "eslint-plugin-n";
// import node from "eslint-plugin-node";
import unicorn from "eslint-plugin-unicorn";
import vue from "eslint-plugin-vue";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import globals from "globals";
// Import jestFormatting from "eslint-plugin-jest-formatting";
// import jestDom from "eslint-plugin-jest-dom";
import tseslint from "typescript-eslint";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const files = ["**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}"];

const defaultOptions = { disable: [], override: {}, threshold: 400_000 };

/**
 * @param {{ disable: string[], override: Record<string, Record<string, number | string>>, threshold: number }} default - Options
 */
const configGen = ({
  disable = [],
  override = {},
  threshold = 400_000,
} = defaultOptions) => [
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
  {
    plugins: {
      "@babel": babelPlugin,
      "@emotion": { rules: emotion },
      "@eslint-community/eslint-comments": comments,
      "@next/next": nextjs,
      compat: comp,
      "css-modules": cssModules,
      es,
      "es-x": esX,
      "eslint-comments": commentsOld,
      flowtype,
      "ft-flow": ftFlow,
      functional,
      header,
      i18next,
      import: importPlugin,
      jest,
      "jest-dom": jestDom,
      "jest-formatting": jestFormatting,
      jsdoc,
      "jsx-a11y": jsxA11y,
      n: nNode,
      "no-only-tests": noOnlyTest,
      node,
      perfectionist,
      "simple-import-sort": importSort,
    },
  },

  /*
    React Performance
    345,263 monthly downloads
    Performance-minded React linting rules for ESLint
    https://github.com/cvazac/eslint-plugin-react-perf#readme
  */
  ...(disable.includes("eslint-plugin-react-perf") || threshold > 345_263
    ? []
    : [
        {
          files,
          plugins: { "react-perf": reactPerf },
          rules: {
            ...reactPerf.configs.recommended.rules,
            ...("eslint-plugin-react-perf" in override
              ? override["eslint-plugin-react-perf"]
              : {}),
          },
        },
      ]),

  /*
    CSS Modules
    460,052 monthly downloads
    Checks that you are using the existent css/scss/less classes, no more no less
    undefined
  */
  ...(disable.includes("eslint-plugin-css-modules") || threshold > 460_052
    ? []
    : [
        {
          files,
          rules: {
            ...cssModules.configs.recommended.rules,
            ...("eslint-plugin-css-modules" in override
              ? override["eslint-plugin-css-modules"]
              : {}),
          },
        },
      ]),

  /*
    Standard React
    505,686 monthly downloads
    JavaScript Standard Style React/JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-react
  */
  ...(disable.includes("eslint-config-standard-react") || threshold > 505_686
    ? []
    : [
        {
          files,
          rules: {
            ...standardReact.rules,
            ...("eslint-config-standard-react" in override
              ? override["eslint-config-standard-react"]
              : {}),
          },
        },
      ]),

  /*
    Regular Expressions
    600,630 monthly downloads
    ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
    https://github.com/ota-meshi/eslint-plugin-regexp#readme
  */
  ...(disable.includes("eslint-plugin-regexp") || threshold > 600_630
    ? []
    : [
        {
          files,
          plugins: { regexp },
          rules: {
            ...regexp.configs["flat/recommended"].rules,
            ...("eslint-plugin-regexp" in override
              ? override["eslint-plugin-regexp"]
              : {}),
          },
        },
      ]),

  /*
    Stylistic
    613,261 monthly downloads
    Stylistic rules for ESLint, works for both JavaScript and TypeScript.
    https://github.com/eslint-stylistic/eslint-stylistic#readme
  */
  ...(disable.includes("@stylistic/eslint-plugin") || threshold > 613_261
    ? []
    : [
        {
          files,
          plugins: { "@stylistic": stylistic },
          rules: {
            ...stylistic.configs.customize({ quotes: "double", semi: true })
              .rules,
            // All conflict with Prettier:
            "@stylistic/arrow-parens": 0,
            "@stylistic/brace-style": 0,
            "@stylistic/multiline-ternary": 0,
            "@stylistic/operator-linebreak": 0,
            "@stylistic/quote-props": 0,
            "@stylistic/quotes": 0,
            ...("@stylistic/eslint-plugin" in override
              ? override["@stylistic/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    Shopify
    673,714 monthly downloads
    Shopify's ESLint rules and configs.
    https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
  */
  ...(disable.includes("@shopify/eslint-plugin") || threshold > 673_714
    ? []
    : [
        {
          files,
          plugins: {
            "@shopify": shopify,
            "@shopify/typescript": {
              config: shopify.configs,
              rules: Object.fromEntries(
                Object.entries(shopify.rules).map(([key, value]) => [
                  key.startsWith("typescript/") ? key.slice(11) : key,
                  value,
                ]),
              ),
            },
          },
          rules: {
            ...shopify.configs.core.rules,
            ...shopify.configs.esnext.rules,
            ...shopify.configs.node.rules,
            ...shopify.configs.prettier.rules,
            ...shopify.configs.typescript.overrides[0].rules,
            ...shopify.configs["typescript-type-checking"].overrides[0].rules,
            ...("@shopify/eslint-plugin" in override
              ? override["@shopify/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    You Don't Need Lodash
    678,630 monthly downloads
    Check methods you can use natively without lodash/underscore
    https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
  */
  ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
  threshold > 678_630
    ? []
    : [
        {
          files,
          plugins: { "you-dont-need-lodash-underscore": youDontNeedLodash },
          rules: {
            ...youDontNeedLodash.configs.compatible.rules,
            ...("eslint-plugin-you-dont-need-lodash-underscore" in override
              ? override["eslint-plugin-you-dont-need-lodash-underscore"]
              : {}),
          },
        },
      ]),

  /*
    I18n
    703,077 monthly downloads
    ESLint plugin for i18n
    https://github.com/edvardchen/eslint-plugin-i18next#readme
  */
  ...(disable.includes("eslint-plugin-i18next") || threshold > 703_077
    ? []
    : [
        {
          files,
          rules: {
            ...i18next.configs.recommended.rules,
            ...("eslint-plugin-i18next" in override
              ? override["eslint-plugin-i18next"]
              : {}),
          },
        },
      ]),

  /*
    Emotion CSS
    816,278 monthly downloads
    ESLint rules for emotion
    https://github.com/emotion-js/emotion/tree/main#readme
  */
  ...(disable.includes("@emotion/eslint-plugin") || threshold > 816_278
    ? []
    : [
        {
          files,
          rules: {
            "@emotion/import-from-emotion": 2,
            "@emotion/jsx-import": 2,
            "@emotion/no-vanilla": 2,
            "@emotion/pkg-renaming": 2,
            "@emotion/styled-import": 2,
            ...("@emotion/eslint-plugin" in override
              ? override["@emotion/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    Functional
    831,490 monthly downloads
    ESLint rules to promote functional programming in TypeScript.
    https://github.com/eslint-functional/eslint-plugin-functional#readme
  */
  ...(disable.includes("eslint-plugin-functional") || threshold > 831_490
    ? []
    : [
        {
          files,
          // "Strick", "Recommended", and "Lite" punch far above their weight and are not added.
          rules: {
            ...functional.configs["external-typescript-recommended"].rules,
            ...functional.configs.stylistic.rules,
            ...functional.configs["no-other-paradigms"].rules,
            "functional/no-loop-statements": 0,
            ...("eslint-plugin-functional" in override
              ? override["eslint-plugin-functional"]
              : {}),
          },
        },
      ]),

  /*
    Perfectionist
    848,530 monthly downloads
    ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
    https://eslint-plugin-perfectionist.azat.io
  */
  ...(disable.includes("eslint-plugin-perfectionist") || threshold > 848_530
    ? []
    : [
        {
          files,
          rules: {
            ...perfectionist.configs["recommended-natural"].rules,
            "perfectionist/sort-imports": 0,
            "perfectionist/sort-named-imports": 0,
            ...("eslint-plugin-perfectionist" in override
              ? override["eslint-plugin-perfectionist"]
              : {}),
          },
        },
      ]),

  /*
    No Unsanitized
    1,004,256 monthly downloads
    ESLint rule to disallow unsanitized code
    https://github.com/mozilla/eslint-plugin-no-unsanitized/
  */
  ...(disable.includes("eslint-plugin-no-unsanitized") || threshold > 1_004_256
    ? []
    : [
        {
          files,
          plugins: { "no-unsanitized": unsanitized },
          rules: {
            ...unsanitized.configs.DOM.rules,
            ...("eslint-plugin-no-unsanitized" in override
              ? override["eslint-plugin-no-unsanitized"]
              : {}),
          },
        },
      ]),

  /*
    Sort Class Members
    1,019,877 monthly downloads
    ESLint rule for enforcing consistent ES6 class member order.
    https://github.com/bryanrsmith/eslint-plugin-sort-class-members
  */
  ...(disable.includes("eslint-plugin-sort-class-members") ||
  threshold > 1_019_877
    ? []
    : [
        {
          files,
          plugins: { "sort-class-members": sortClassMembers },
          // There are no recommended ways to use this rule, but Shopify has opinions about it.
          rules: {
            ...("eslint-plugin-sort-class-members" in override
              ? override["eslint-plugin-sort-class-members"]
              : {}),
          },
        },
      ]),

  /*
    XO
    1,146,297 monthly downloads
    ESLint shareable config for XO
    https://github.com/xojs/eslint-config-xo#readme
  */
  ...(disable.includes("eslint-config-xo") || threshold > 1_146_297
    ? []
    : [
        {
          files,
          rules: {
            ...xo.rules,
            ...("eslint-config-xo" in override
              ? override["eslint-config-xo"]
              : {}),
          },
        },
      ]),

  /*
    Google
    1,670,827 monthly downloads
    ESLint shareable config for the Google style
    https://github.com/google/eslint-config-google#readme
  */
  ...(disable.includes("eslint-config-google") || threshold > 1_670_827
    ? []
    : [
        {
          files,
          rules: {
            ...google.rules,
            ...("eslint-config-google" in override
              ? override["eslint-config-google"]
              : {}),
          },
        },
      ]),

  /*
    TSDoc
    1,921,018 monthly downloads
    An ESLint plugin that validates TypeScript doc comments
    https://tsdoc.org/
  */
  ...(disable.includes("eslint-plugin-tsdoc") || threshold > 1_921_018
    ? []
    : [
        {
          files,
          plugins: { tsdoc },
          rules: {
            "tsdoc/syntax": 2,
            ...("eslint-plugin-tsdoc" in override
              ? override["eslint-plugin-tsdoc"]
              : {}),
          },
        },
      ]),

  /*
    Tailwind CSS
    1,931,620 monthly downloads
    Rules enforcing best practices while using Tailwind CSS
    https://github.com/francoismassart/eslint-plugin-tailwindcss
  */
  ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 1_931_620
    ? []
    : [
        {
          files,
          plugins: { tailwindcss },
          rules: {
            ...tailwindcss.configs.recommended.rules,
            ...("eslint-plugin-tailwindcss" in override
              ? override["eslint-plugin-tailwindcss"]
              : {}),
          },
        },
      ]),

  /*
    Compat
    2,070,700 monthly downloads
    Lint browser compatibility of API used
    https://github.com/amilajack/eslint-plugin-compat#readme
  */
  ...(disable.includes("eslint-plugin-compat") || threshold > 2_070_700
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              browser: true,
            },
          },
          rules: {
            ...comp.configs.recommended.rules,
            ...("eslint-plugin-compat" in override
              ? override["eslint-plugin-compat"]
              : {}),
          },
        },
      ]),

  /*
    Jest Formatting
    2,282,626 monthly downloads
    ESLint rules for formatting jest tests
    https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
  */
  ...(disable.includes("eslint-plugin-jest-formatting") || threshold > 2_282_626
    ? []
    : [
        {
          files: [
            "**/*.test.*",
            "**/*_test.*",
            "**/*Test.*",
            "**/*.spec.*",
            "**/*_spec.*",
            "**/*Spec.*",
            "**/__tests__/*",
          ],
          rules: {
            ...jestFormatting.configs.recommended.overrides[0].rules,
            ...("eslint-plugin-jest-formatting" in override
              ? override["eslint-plugin-jest-formatting"]
              : {}),
          },
        },
      ]),

  /*
    Standard JSX
    2,372,530 monthly downloads
    JavaScript Standard Style JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-jsx
  */
  ...(disable.includes("eslint-config-standard-jsx") || threshold > 2_372_530
    ? []
    : [
        {
          files,
          rules: {
            ...standardJsx.rules,
            ...("eslint-config-standard-jsx" in override
              ? override["eslint-config-standard-jsx"]
              : {}),
          },
        },
      ]),

  /*
    Security
    3,550,566 monthly downloads
    Security rules for eslint
    https://github.com/eslint-community/eslint-plugin-security#readme
  */
  ...(disable.includes("eslint-plugin-security") || threshold > 3_550_566
    ? []
    : [
        {
          files,
          plugins: { security },
          rules: {
            ...security.configs.recommended.rules,
            ...("eslint-plugin-security" in override
              ? override["eslint-plugin-security"]
              : {}),
          },
        },
      ]),

  /*
    SonarJS
    4,065,987 monthly downloads
    SonarJS rules for ESLint
    https://github.com/SonarSource/eslint-plugin-sonarjs
  */
  ...(disable.includes("eslint-plugin-sonarjs") || threshold > 4_065_987
    ? []
    : [
        {
          files,
          plugins: { sonarjs },
          rules: {
            ...sonarjs.configs.recommended.rules,
            // Complexity can not be simplified to a linear scale. If it could, it
            // would be simple, not complex.
            "sonarjs/cognitive-complexity": 0,
            ...("eslint-plugin-sonarjs" in override
              ? override["eslint-plugin-sonarjs"]
              : {}),
          },
        },
      ]),

  /*
    Jest Dom
    4,204,004 monthly downloads
    ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
    https://github.com/testing-library/eslint-plugin-jest-dom#readme
  */
  ...(disable.includes("eslint-plugin-jest-dom") || threshold > 4_204_004
    ? []
    : [
        {
          files,
          rules: {
            ...jestDom.configs.recommended.rules,
            ...("eslint-plugin-jest-dom" in override
              ? override["eslint-plugin-jest-dom"]
              : {}),
          },
        },
      ]),

  /*
    No Only Tests
    4,315,292 monthly downloads
    ESLint rule for .only blocks in mocha tests
    https://github.com/levibuzolic/no-only-tests#readme
  */
  ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_315_292
    ? []
    : [
        {
          files,
          rules: {
            "no-only-tests/no-only-tests": 2,
            ...("eslint-plugin-no-only-tests" in override
              ? override["eslint-plugin-no-only-tests"]
              : {}),
          },
        },
      ]),

  /*
    React Native Config
    4,471,512 monthly downloads
    ESLint config for React Native / ESLint config for React Native / ESLint rules for @react-native/eslint-config
    https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme
  */
  ...(disable.includes("@react-native-community/eslint-config") ||
  disable.includes("@react-native/eslint-config") ||
  disable.includes("@react-native/eslint-plugin") ||
  threshold > 4_471_512
    ? []
    : [
        {
          files,
          plugins: { "@react-native": rnPlugin },
          rules: {
            ...reactNativeConfig.overrides[1].rules,
            ...reactNativeConfig.overrides[2].rules,
            ...reactNativeConfig.rules,
            ...rnConfig.rules,
            ...rnConfig.overrides[2].rules,
            ...rnConfig.overrides[3].rules,
            ...("@react-native-community/eslint-config" in override
              ? override["@react-native-community/eslint-config"]
              : {}),
            ...("@react-native/eslint-config" in override
              ? override["@react-native/eslint-config"]
              : {}),
            ...("@react-native/eslint-plugin" in override
              ? override["@react-native/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    React Native
    5,098,583 monthly downloads
    React Native specific linting rules for ESLint
    https://github.com/intellicode/eslint-plugin-react-native
  */
  ...(disable.includes("eslint-plugin-react-native") || threshold > 5_098_583
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              ...reactNative.environments["react-native"].globals,
            },
          },
          plugins: { "react-native": reactNative },
          rules: {
            ...reactNative.configs.all.rules,
            ...("eslint-plugin-react-native" in override
              ? override["eslint-plugin-react-native"]
              : {}),
          },
        },
      ]),

  /*
    React Refresh
    5,399,148 monthly downloads
    Validate that your components can safely be updated with fast refresh
    https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
  */
  ...(disable.includes("eslint-plugin-react-refresh") || threshold > 5_399_148
    ? []
    : [
        {
          files,
          plugins: { "react-refresh": reactRefresh },
          rules: {
            "react-refresh/only-export-components": "warn",
            ...("eslint-plugin-react-refresh" in override
              ? override["eslint-plugin-react-refresh"]
              : {}),
          },
        },
      ]),

  /*
    JSDoc
    7,817,930 monthly downloads
    JSDoc linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-jsdoc#readme
  */
  ...(disable.includes("eslint-plugin-jsdoc") || threshold > 7_817_930
    ? []
    : [
        {
          files,
          rules: {
            ...jsdoc.configs["flat/recommended-typescript"].rules,
            "jsdoc/check-param-names": [
              2,
              { checkDestructured: false, enableFixer: false },
            ],
            "jsdoc/require-param": [2, { checkDestructured: false }],
            // Rules needed for TSDoc Compatibility
            "jsdoc/require-param-type": 0,
            "jsdoc/require-returns": 0,
            "jsdoc/require-returns-type": 0,
            // Presently not implemented in TSDocs https://github.com/microsoft/tsdoc/issues/234
            "jsdoc/require-yields": 0,
            ...("eslint-plugin-jsdoc" in override
              ? override["eslint-plugin-jsdoc"]
              : {}),
          },
          settings: { jsdoc: { mode: "typescript" } },
        },
      ]),

  /*
    Simple Import Sort
    8,289,033 monthly downloads
    Easy autofixable import sorting
    https://github.com/lydell/eslint-plugin-simple-import-sort#readme
  */
  ...(disable.includes("eslint-plugin-simple-import-sort") ||
  threshold > 8_289_033
    ? []
    : [
        {
          files,
          rules: {
            "simple-import-sort/exports": 2,
            "simple-import-sort/imports": 2,
            ...("eslint-plugin-simple-import-sort" in override
              ? override["eslint-plugin-simple-import-sort"]
              : {}),
          },
        },
      ]),

  /*
    AirBnb-Typescript
    8,780,898 monthly downloads
    Airbnb's ESLint config with TypeScript support
    https://github.com/iamturns/eslint-config-airbnb-typescript
  */
  ...(disable.includes("eslint-config-airbnb-typescript") ||
  threshold > 8_780_898
    ? []
    : [
        {
          files,
          rules: {
            ...compat.extends("airbnb-typescript")[0].rules,
            // Added to modernize this infrequently updated, but oft used config
            "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
            ...("eslint-config-airbnb-typescript" in override
              ? override["eslint-config-airbnb-typescript"]
              : {}),
          },
        },
      ]),

  /*
    Unicorn
    9,180,451 monthly downloads
    More than 100 powerful ESLint rules
    https://github.com/sindresorhus/eslint-plugin-unicorn#readme
  */
  ...(disable.includes("eslint-plugin-unicorn") || threshold > 9_180_451
    ? []
    : [
        {
          files,
          plugins: { unicorn },
          rules: {
            ...unicorn.configs.recommended.rules,
            ...("eslint-plugin-unicorn" in override
              ? override["eslint-plugin-unicorn"]
              : {}),
          },
        },
      ]),

  /*
    Comments
    9,402,859 monthly downloads
    Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
    https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
  */
  ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
  disable.includes("eslint-plugin-eslint-comments") ||
  threshold > 9_402_859
    ? []
    : [
        {
          files,
          // CommentsOld (mysticatea/eslint-plugin-eslint-comments) intentionally
          // left out: it has the most downloads, but is out of date / not maintained.
          rules: {
            ...comments.configs.recommended.rules,
            ...("@eslint-community/eslint-plugin-eslint-comments" in override
              ? override["@eslint-community/eslint-plugin-eslint-comments"]
              : {}),
            ...("eslint-plugin-eslint-comments" in override
              ? override["eslint-plugin-eslint-comments"]
              : {}),
          },
        },
      ]),

  /*
    Storybook
    9,897,924 monthly downloads
    Best practice rules for Storybook
    https://github.com/storybookjs/eslint-plugin-storybook#readme
  */
  ...(disable.includes("eslint-plugin-storybook") || threshold > 9_897_924
    ? []
    : [
        {
          files: storybook.configs.recommended.overrides[0].files,
          plugins: { storybook },
          rules: {
            ...storybook.configs.recommended.overrides[0].rules,
            ...("eslint-plugin-storybook" in override
              ? override["eslint-plugin-storybook"]
              : {}),
          },
        },
      ]),

  /*
    Standard
    12,199,872 monthly downloads
    JavaScript Standard Style - ESLint Shareable Config / A TypeScript ESLint config that loves you
    https://github.com/standard/eslint-config-standard / https://github.com/mightyiam/eslint-config-love#readme
  */
  ...(disable.includes("eslint-config-standard") ||
  disable.includes("eslint-config-love") ||
  threshold > 12_199_872
    ? []
    : [
        {
          files,
          rules: {
            ...compat.extends("standard")[0].rules,
            ...standardTS.rules,
            // Types can be inferred by typescript
            "@typescript-eslint/explicit-function-return-type": 0,
            ...("eslint-config-standard" in override
              ? override["eslint-config-standard"]
              : {}),
            ...("eslint-config-love" in override
              ? override["eslint-config-love"]
              : {}),
          },
        },
      ]),

  /*
    AirBnb
    15,487,752 monthly downloads
    Airbnb's ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb") || threshold > 15_487_752
    ? []
    : [
        {
          files,
          rules: {
            ...compat.extends("airbnb")[0].rules,
            ...compat.extends("airbnb/hooks")[0].rules,
            // Added to modernize this infrequently updated, but oft used config
            "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
            ...("eslint-config-airbnb" in override
              ? override["eslint-config-airbnb"]
              : {}),
          },
        },
      ]),

  /*
    Create React App
    18,185,883 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_185_883
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              browser: true,
              commonjs: true,
              es6: true,
              jest: true,
              node: true,
            },
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
              ecmaVersion: "latest",
              requireConfigFile: false,
              sourceType: "module",
            },
          },
          rules: {
            "array-callback-return": 1,
            "default-case": [1, { commentPattern: "^no default$" }],

            "dot-location": [1, "property"],
            eqeqeq: [1, "smart"],
            // https://github.com/gajus/eslint-plugin-flowtype
            "flowtype/define-flow-type": 1,
            "flowtype/require-valid-file-annotation": 1,
            "flowtype/use-flow-type": 1,
            "getter-return": 1,
            // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
            "import/first": 2,
            "import/no-amd": 2,
            "import/no-anonymous-default-export": 1,
            "import/no-webpack-loader-syntax": 2,
            // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
            "jsx-a11y/alt-text": 1,
            "jsx-a11y/anchor-has-content": 1,
            "jsx-a11y/anchor-is-valid": [
              1,
              {
                aspects: ["noHref", "invalidHref"],
              },
            ],
            "jsx-a11y/aria-activedescendant-has-tabindex": 1,
            "jsx-a11y/aria-props": 1,
            "jsx-a11y/aria-proptypes": 1,
            "jsx-a11y/aria-role": [1, { ignoreNonDOM: true }],
            "jsx-a11y/aria-unsupported-elements": 1,
            "jsx-a11y/heading-has-content": 1,
            "jsx-a11y/iframe-has-title": 1,
            "jsx-a11y/img-redundant-alt": 1,
            "jsx-a11y/no-access-key": 1,
            "jsx-a11y/no-distracting-elements": 1,
            "jsx-a11y/no-redundant-roles": 1,
            "jsx-a11y/role-has-required-aria-props": 1,
            "jsx-a11y/role-supports-aria-props": 1,
            "jsx-a11y/scope": 1,
            "new-parens": 1,
            "no-array-constructor": 1,
            "no-caller": 1,
            "no-cond-assign": [1, "except-parens"],
            "no-const-assign": 1,
            "no-control-regex": 1,
            "no-delete-var": 1,
            "no-dupe-args": 1,
            "no-dupe-class-members": 1,
            "no-dupe-keys": 1,
            "no-duplicate-case": 1,
            "no-empty-character-class": 1,
            "no-empty-pattern": 1,
            "no-eval": 1,
            "no-ex-assign": 1,
            "no-extend-native": 1,
            "no-extra-bind": 1,
            "no-extra-label": 1,
            "no-fallthrough": 1,
            "no-func-assign": 1,
            "no-global-assign": 1,
            "no-implied-eval": 1,
            "no-invalid-regexp": 1,
            "no-iterator": 1,
            "no-label-var": 1,
            "no-labels": [1, { allowLoop: true, allowSwitch: false }],
            "no-lone-blocks": 1,
            "no-loop-func": 1,
            "no-mixed-operators": [
              1,
              {
                allowSamePrecedence: false,
                groups: [
                  ["&", "|", "^", "~", "<<", ">>", ">>>"],
                  ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                  ["&&", "||"],
                  ["in", "instanceof"],
                ],
              },
            ],
            "no-multi-str": 1,
            "no-new-func": 1,
            "no-new-object": 1,
            "no-new-symbol": 1,
            "no-new-wrappers": 1,
            "no-obj-calls": 1,
            "no-octal": 1,
            "no-octal-escape": 1,
            "no-redeclare": 1,
            "no-regex-spaces": 1,
            "no-restricted-globals": ["error", ...restrictedGlobals],
            "no-restricted-properties": [
              2,
              {
                message:
                  "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
                object: "require",
                property: "ensure",
              },
              {
                message:
                  "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
                object: "System",
                property: "import",
              },
            ],
            "no-restricted-syntax": [1, "WithStatement"],
            "no-script-url": 1,
            "no-self-assign": 1,
            "no-self-compare": 1,
            "no-sequences": 1,
            "no-shadow-restricted-names": 1,
            "no-sparse-arrays": 1,
            "no-template-curly-in-string": 1,
            "no-this-before-super": 1,

            "no-throw-literal": 1,
            "no-undef": 2,
            "no-unreachable": 1,
            "no-unsafe-negation": 1,

            "no-unused-expressions": [
              2,
              {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
              },
            ],
            "no-unused-labels": 1,
            "no-unused-vars": [
              1,
              {
                args: "none",
                ignoreRestSiblings: true,
              },
            ],
            "no-use-before-define": [
              1,
              {
                classes: false,
                functions: false,
                variables: false,
              },
            ],
            "no-useless-computed-key": 1,
            "no-useless-concat": 1,
            "no-useless-constructor": 1,

            // Disabled because of undesirable warnings
            // See https://github.com/facebook/create-react-app/issues/5204 for
            // blockers until its re-enabled
            "no-useless-escape": 1,
            "no-useless-rename": [
              1,
              {
                ignoreDestructuring: false,
                ignoreExport: false,
                ignoreImport: false,
              },
            ],
            "no-whitespace-before-property": 1,
            "no-with": 1,
            // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
            "react/forbid-foreign-prop-types": [1, { allowInPropTypes: true }],

            "react/jsx-no-comment-textnodes": 1,
            "react/jsx-no-duplicate-props": 1,
            "react/jsx-no-target-blank": 1,
            "react/jsx-no-undef": 2,
            "react/jsx-pascal-case": [
              1,
              {
                allowAllCaps: true,
                ignore: [],
              },
            ],
            "react/jsx-uses-react": 1,
            "react/jsx-uses-vars": 1,
            "react/no-danger-with-children": 1,
            // "react/no-deprecated": 1,
            "react/no-direct-mutation-state": 1,
            "react/no-is-mounted": 1,
            "react/no-typos": 2,
            "react/require-render-return": 2,
            "react/style-prop-object": 1,
            "react-hooks/exhaustive-deps": 1,
            // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
            "react-hooks/rules-of-hooks": 2,
            "require-yield": 1,
            "rest-spread-spacing": [1, "never"],

            strict: [1, "never"],

            "unicode-bom": [1, "never"],
            "use-isnan": 1,
            "valid-typeof": 1,
            ...("eslint-config-react-app" in override
              ? override["eslint-config-react-app"]
              : {}),
          },
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      ]),

  /*
    Create React App TS
    18,185,883 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_185_883
    ? []
    : [
        {
          files: ["**/*.ts?(x)"],
          languageOptions: {
            globals: {
              browser: true,
              commonjs: true,
              es6: true,
              jest: true,
              node: true,
            },
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
              sourceType: "module",
            },
          },
          rules: {
            // Add TypeScript specific rules (and turn off ESLint equivalents)
            "@typescript-eslint/consistent-type-assertions": "warn",
            "@typescript-eslint/no-array-constructor": "warn",
            "@typescript-eslint/no-redeclare": "warn",
            "@typescript-eslint/no-unused-expressions": [
              "error",
              {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
              },
            ],
            "@typescript-eslint/no-unused-vars": [
              "warn",
              {
                args: "none",
                ignoreRestSiblings: true,
              },
            ],
            "@typescript-eslint/no-use-before-define": [
              "warn",
              {
                classes: false,
                functions: false,
                typedefs: false,
                variables: false,
              },
            ],
            "@typescript-eslint/no-useless-constructor": "warn",
            // TypeScript's noFallthroughCasesInSwitch option is more robust (#6906)
            "default-case": "off",
            "no-array-constructor": "off",
            // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
            "no-dupe-class-members": "off",
            "no-redeclare": "off",
            // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
            "no-undef": "off",
            "no-unused-expressions": "off",
            "no-unused-vars": "off",
            "no-use-before-define": "off",
            "no-useless-constructor": "off",
            ...("eslint-config-react-app" in override
              ? override["eslint-config-react-app"]
              : {}),
          },
          settings: {
            react: {
              version: "detect",
            },
          },
        },
      ]),

  /*
    Create React App Jest
    18,185,883 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_185_883
    ? []
    : [
        {
          files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
          languageOptions: {
            globals: {
              "jest/globals": true,
            },
          },
          rules: {
            // https://github.com/jest-community/eslint-plugin-jest
            "jest/no-conditional-expect": "error",
            "jest/no-identical-title": "error",
            "jest/no-interpolation-in-snapshots": "error",
            "jest/no-jasmine-globals": "error",
            "jest/no-jest-import": "error",
            "jest/no-mocks-import": "error",
            "jest/valid-describe-callback": "error",
            "jest/valid-expect": "error",
            "jest/valid-expect-in-promise": "error",
            "jest/valid-title": "warn",

            // https://github.com/testing-library/eslint-plugin-testing-library
            "testing-library/await-async-query": "error",
            "testing-library/await-async-utils": "error",
            "testing-library/no-await-sync-query": "error",
            "testing-library/no-container": "error",
            "testing-library/no-debugging-utils": "error",
            "testing-library/no-dom-import": ["error", "react"],
            "testing-library/no-node-access": "error",
            "testing-library/no-promise-in-fire-event": "error",
            "testing-library/no-render-in-setup": "error",
            "testing-library/no-unnecessary-act": "error",
            "testing-library/no-wait-for-empty-callback": "error",
            "testing-library/no-wait-for-multiple-assertions": "error",
            "testing-library/no-wait-for-side-effects": "error",
            "testing-library/no-wait-for-snapshot": "error",
            "testing-library/prefer-find-by": "error",
            "testing-library/prefer-presence-queries": "error",
            "testing-library/prefer-query-by-disappearance": "error",
            "testing-library/prefer-screen-queries": "error",
            "testing-library/render-result-naming-convention": "error",
            ...("eslint-config-react-app" in override
              ? override["eslint-config-react-app"]
              : {}),
          },
        },
      ]),

  /*
    Promises
    18,590,990 monthly downloads
    Enforce best practices for JavaScript promises
    https://github.com/eslint-community/eslint-plugin-promise
  */
  ...(disable.includes("eslint-plugin-promise") || threshold > 18_590_990
    ? []
    : [
        {
          files,
          plugins: { promise },
          rules: {
            ...promise.configs.recommended.rules,
            ...("eslint-plugin-promise" in override
              ? override["eslint-plugin-promise"]
              : {}),
          },
        },
      ]),

  /*
    NextJS
    19,177,807 monthly downloads
    ESLint plugin for Next.js.
    https://github.com/vercel/next.js#readme
  */
  ...(disable.includes("@next/eslint-plugin-next") || threshold > 19_177_807
    ? []
    : [
        {
          files,
          rules: {
            ...nextjs.configs.recommended.rules,
            // Irrelevant for broad JS, and pollutes logs when it doesn't apply.
            "@next/next/no-html-link-for-pages": 0,
            ...("@next/eslint-plugin-next" in override
              ? override["@next/eslint-plugin-next"]
              : {}),
          },
        },
      ]),

  /*
    Flowtype
    22,282,416 monthly downloads
    Flowtype linting rules for ESLint. / Flowtype linting rules for ESLint by flow-typed
    https://github.com/gajus/eslint-plugin-flowtype#readme / https://github.com/flow-typed/eslint-plugin-ft-flow#readme
  */
  ...(disable.includes("eslint-plugin-flowtype") ||
  disable.includes("eslint-plugin-ft-flow") ||
  threshold > 22_282_416
    ? []
    : [
        {
          files,
          // ...ftFlow.configs.recommended.rules,
          rules: {
            ...("eslint-plugin-flowtype" in override
              ? override["eslint-plugin-flowtype"]
              : {}),
            ...("eslint-plugin-ft-flow" in override
              ? override["eslint-plugin-ft-flow"]
              : {}),
          },
          // No rules as they conflict with Typescript
          // ...flowtype.configs.recommended.rules,
          settings: {
            flowtype: {
              onlyFilesWithFlowAnnotation: false,
            },
            "ft-flow": {
              onlyFilesWithFlowAnnotation: false,
            },
          },
        },
      ]),

  /*
    Testing Library
    22,445,661 monthly downloads
    ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
    https://github.com/testing-library/eslint-plugin-testing-library
  */
  ...(disable.includes("eslint-plugin-testing-library") ||
  threshold > 22_445_661
    ? []
    : [
        {
          files: [
            "**/__tests__/**/*.[jt]s?(x)",
            "**/?(*.)+(spec|test).[jt]s?(x)",
          ],
          plugins: { "testing-library": testingLibrary },
          rules: {
            ...testingLibrary.configs.react.rules,
            ...("eslint-plugin-testing-library" in override
              ? override["eslint-plugin-testing-library"]
              : {}),
          },
        },
      ]),

  /*
    ES-X
    23,976,214 monthly downloads
    ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
    https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
  */
  ...(disable.includes("eslint-plugin-es-x") ||
  disable.includes("eslint-plugin-es") ||
  threshold > 23_976_214
    ? []
    : [
        {
          files,
          rules: {
            ...esX.configs["no-new-in-esnext"].rules,
            ...("eslint-plugin-es-x" in override
              ? override["eslint-plugin-es-x"]
              : {}),
            ...("eslint-plugin-es" in override
              ? override["eslint-plugin-es"]
              : {}),
          },
        },
      ]),

  /*
    Node.js
    24,360,373 monthly downloads
    Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
    https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
  */
  ...(disable.includes("eslint-plugin-n") ||
  disable.includes("eslint-plugin-node") ||
  threshold > 24_360_373
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              __dirname: false,
              __filename: false,
              exports: false,
              module: false,
              require: false,
            },
          },
          rules: {
            // There are no recommended ways to use "node", as the "n" rule obsoletes
            // it, but "node" is still used by the Shopify config.
            ...nNode.configs["flat/recommended-module"].rules,
            // Typescript handles this
            "n/no-missing-import": 0,
            // Typescript handles this
            "n/no-unpublished-import": 0,
            ...("eslint-plugin-n" in override
              ? override["eslint-plugin-n"]
              : {}),
            ...("eslint-plugin-node" in override
              ? override["eslint-plugin-node"]
              : {}),
          },
        },
      ]),

  /*
    Vue
    26,423,882 monthly downloads
    Official ESLint plugin for Vue.js / The ESLint custom parser for `.vue` files.
    https://eslint.vuejs.org / https://github.com/vuejs/vue-eslint-parser#readme
  */
  ...(disable.includes("eslint-plugin-vue") ||
  disable.includes("vue-eslint-parser") ||
  threshold > 26_423_882
    ? []
    : [
        {
          files: [...files, "**/*.vue"],
          plugins: { vue },
          rules: {
            ...vue.configs.base.rules,
            ...vue.configs.essential.rules,
            ...vue.configs.recommended.rules,
            ...vue.configs["strongly-recommended"].rules,
            ...vue.configs["vue3-essential"].rules,
            ...vue.configs["vue3-recommended"].rules,
            ...vue.configs["vue3-strongly-recommended"].rules,
            ...("eslint-plugin-vue" in override
              ? override["eslint-plugin-vue"]
              : {}),
            ...("vue-eslint-parser" in override
              ? override["vue-eslint-parser"]
              : {}),
          },
        },
      ]),

  /*
    AirBnb Base
    27,990,174 monthly downloads
    Airbnb's base JS ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb-base") || threshold > 27_990_174
    ? []
    : [
        {
          files,
          rules: {
            ...compat.extends("airbnb-base")[0].rules,
            // Added to modernize this infrequently updated, but oft used config
            "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
            ...("eslint-config-airbnb-base" in override
              ? override["eslint-config-airbnb-base"]
              : {}),
          },
        },
      ]),

  /*
    Jest
    43,094,200 monthly downloads
    ESLint rules for Jest
    https://github.com/jest-community/eslint-plugin-jest#readme
  */
  ...(disable.includes("eslint-plugin-jest") || threshold > 43_094_200
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              afterAll: false,
              afterEach: false,
              beforeAll: false,
              beforeEach: false,
              describe: false,
              expect: false,
              fit: false,
              it: false,
              jest: false,
              test: false,
              xdescribe: false,
              xit: false,
              xtest: false,
            },
          },
          rules: {
            ...jest.configs["flat/recommended"].rules,
            ...("eslint-plugin-jest" in override
              ? override["eslint-plugin-jest"]
              : {}),
          },
        },
      ]),

  /*
    JSX A11y
    53,480,774 monthly downloads
    Static AST checker for accessibility rules on JSX elements.
    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
  */
  ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 53_480_774
    ? []
    : [
        {
          files,
          rules: {
            ...jsxA11y.configs.recommended.rules,
            ...("eslint-plugin-jsx-a11y" in override
              ? override["eslint-plugin-jsx-a11y"]
              : {}),
          },
        },
      ]),

  /*
    React Hooks
    60,932,258 monthly downloads
    ESLint rules for React Hooks
    https://reactjs.org/
  */
  ...(disable.includes("eslint-plugin-react-hooks") || threshold > 60_932_258
    ? []
    : [
        {
          files,
          plugins: { "react-hooks": reactHooks },
          rules: {
            ...reactHooks.configs.recommended.rules,
            ...("eslint-plugin-react-hooks" in override
              ? override["eslint-plugin-react-hooks"]
              : {}),
          },
        },
      ]),

  /*
    React
    74,801,366 monthly downloads
    React specific linting rules for ESLint
    https://github.com/jsx-eslint/eslint-plugin-react
  */
  ...(disable.includes("eslint-plugin-react") || threshold > 74_801_366
    ? []
    : [
        {
          files,
          languageOptions: {
            ecmaVersion: "latest",
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
            },
          },
          plugins: { react },
          rules: {
            ...react.configs.recommended.rules,
            ...("eslint-plugin-react" in override
              ? override["eslint-plugin-react"]
              : {}),
          },
          settings: {
            react: {
              pragma: "React",
              version: "detect",
            },
          },
        },
      ]),

  /*
    ESLint
    89,927,966 monthly downloads
    ESLint JavaScript language implementation
    https://eslint.org
  */
  ...(disable.includes("@eslint/js") || threshold > 89_927_966
    ? []
    : [
        {
          files,
          rules: {
            ...eslint.configs.recommended.rules,
            ...("@eslint/js" in override ? override["@eslint/js"] : {}),
          },
        },
      ]),

  /*
    Import
    124,212,045 monthly downloads
    Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
    https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
  */
  ...(disable.includes("eslint-plugin-import") ||
  disable.includes("eslint-import-resolver-typescript") ||
  threshold > 124_212_045
    ? []
    : [
        {
          files,
          rules: {
            ...importPlugin.configs.recommended.rules,
            ...importPlugin.configs.typescript.rules,
            "import/order": 0,
            ...("eslint-plugin-import" in override
              ? override["eslint-plugin-import"]
              : {}),
            ...("eslint-import-resolver-typescript" in override
              ? override["eslint-import-resolver-typescript"]
              : {}),
          },
          settings: {
            "import/core-modules": [],
            "import/extensions": [
              ".js",
              ".mjs",
              ".jsx",
              ".ts",
              ".tsx",
              ".d.ts",
            ],
            "import/external-module-folders": [
              "node_modules",
              "node_modules/@types",
            ],
            "import/ignore": [
              "node_modules",
              ".(coffee|scss|css|less|hbs|svg|json)$",
            ],
            "import/parsers": {
              "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
              node: {
                extensions: [
                  ".mjs",
                  ".js",
                  ".jsx",
                  ".json",
                  ".ts",
                  ".tsx",
                  ".d.ts",
                ],
              },
              typescript: { alwaysTryTypes: true },
            },
          },
        },
      ]),

  /*
    Prettier
    138,904,898 monthly downloads
    Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
    https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
  */
  ...(disable.includes("eslint-plugin-prettier") ||
  disable.includes("eslint-config-prettier") ||
  threshold > 138_904_898
    ? []
    : [
        {
          files,
          plugins: { prettier },
          rules: {
            "prettier/prettier": 2,
            ...prettierConfig.rules,
            ...("eslint-plugin-prettier" in override
              ? override["eslint-plugin-prettier"]
              : {}),
            ...("eslint-config-prettier" in override
              ? override["eslint-config-prettier"]
              : {}),
          },
        },
      ]),

  /*
    TypeScript
    241,177,982 monthly downloads
    Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree / TypeScript plugin for ESLint
    https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme
  */
  ...(disable.includes("typescript-eslint") ||
  disable.includes("@typescript-eslint/parser") ||
  disable.includes("@typescript-eslint/eslint-plugin") ||
  threshold > 241_177_982
    ? []
    : [
        ...tseslint.config(...tseslint.configs.recommendedTypeChecked, {
          languageOptions: { parserOptions: { project: true } },
          rules: {
            // "allowNullableObject: false," auto-fixes type `object | undefined` poorly.
            // When checking a nullable object, `if (obj)...` it auto-fixes to `if (obj != null)...`.
            // This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
            // See: https://eslint.org/docs/latest/rules/eqeqeq
            //      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
            //      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
            "@typescript-eslint/strict-boolean-expressions": [
              2,
              {
                allowAny: false,
                allowNullableBoolean: false,
                allowNullableNumber: false,
                allowNullableObject: true,
                allowNullableString: false,
                allowNumber: false,
                allowString: false,
              },
            ],
            ...("typescript-eslint" in override
              ? override["typescript-eslint"]
              : {}),
            ...("@typescript-eslint/parser" in override
              ? override["@typescript-eslint/parser"]
              : {}),
            ...("@typescript-eslint/eslint-plugin" in override
              ? override["@typescript-eslint/eslint-plugin"]
              : {}),
          },
        }),
      ]),
];

export default configGen;
// EOF
