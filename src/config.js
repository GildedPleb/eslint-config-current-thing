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
import rnPlugin from "@react-native/eslint-plugin";
// Import reactPerf from "eslint-plugin-react-perf";
// import rnPlugin from "@react-native/eslint-plugin";
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
// Import nextjs from "@next/eslint-plugin-next";
// import promise from "eslint-plugin-promise";
// import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
// Import rnConfig from "@react-native/eslint-config";
// import reactNativeIndie from "eslint-plugin-react-native";
// import jest from "eslint-plugin-jest";
import standardJsx from "eslint-config-standard-jsx";
// Import reactHooks from "eslint-plugin-react-hooks";
// import jsxA11y from "eslint-plugin-jsx-a11y";
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
import promise from "eslint-plugin-promise";
// Import cra from "eslint-config-react-app";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNativeIndie from "eslint-plugin-react-native";
import reactPerf from "eslint-plugin-react-perf";
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
// Import typescriptParser from "@typescript-eslint/parser";
// import typescriptPlugin from "@typescript-eslint/eslint-plugin";
// import reactRefresh from "eslint-plugin-react-refresh";
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
      "@react-native": rnPlugin,
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
      prettier,
      promise,
      "react-hooks": reactHooks,
      "react-native": reactNativeIndie,
      "react-perf": reactPerf,
      "react-refresh": reactRefresh,
      "simple-import-sort": importSort,
    },
  },

  /*
    React Performance
    348,408 monthly downloads
    Performance-minded React linting rules for ESLint
    https://github.com/cvazac/eslint-plugin-react-perf#readme
  */
  ...(disable.includes("eslint-plugin-react-perf") || threshold > 348_408
    ? []
    : [
        {
          files,
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
    466,712 monthly downloads
    Checks that you are using the existent css/scss/less classes, no more no less
    undefined
  */
  ...(disable.includes("eslint-plugin-css-modules") || threshold > 466_712
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
    510,390 monthly downloads
    JavaScript Standard Style React/JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-react
  */
  ...(disable.includes("eslint-config-standard-react") || threshold > 510_390
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
    610,028 monthly downloads
    ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
    https://github.com/ota-meshi/eslint-plugin-regexp#readme
  */
  ...(disable.includes("eslint-plugin-regexp") || threshold > 610_028
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
    627,208 monthly downloads
    Stylistic rules for ESLint, works for both JavaScript and TypeScript.
    https://github.com/eslint-stylistic/eslint-stylistic#readme
  */
  ...(disable.includes("@stylistic/eslint-plugin") || threshold > 627_208
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
    678,124 monthly downloads
    Shopify's ESLint rules and configs.
    https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
  */
  ...(disable.includes("@shopify/eslint-plugin") || threshold > 678_124
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
    684,303 monthly downloads
    Check methods you can use natively without lodash/underscore
    https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
  */
  ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
  threshold > 684_303
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
    708,513 monthly downloads
    ESLint plugin for i18n
    https://github.com/edvardchen/eslint-plugin-i18next#readme
  */
  ...(disable.includes("eslint-plugin-i18next") || threshold > 708_513
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
    821,329 monthly downloads
    ESLint rules for emotion
    https://github.com/emotion-js/emotion/tree/main#readme
  */
  ...(disable.includes("@emotion/eslint-plugin") || threshold > 821_329
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
    843,472 monthly downloads
    ESLint rules to promote functional programming in TypeScript.
    https://github.com/eslint-functional/eslint-plugin-functional#readme
  */
  ...(disable.includes("eslint-plugin-functional") || threshold > 843_472
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
    863,995 monthly downloads
    ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
    https://eslint-plugin-perfectionist.azat.io
  */
  ...(disable.includes("eslint-plugin-perfectionist") || threshold > 863_995
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
    1,015,204 monthly downloads
    ESLint rule to disallow unsanitized code
    https://github.com/mozilla/eslint-plugin-no-unsanitized/
  */
  ...(disable.includes("eslint-plugin-no-unsanitized") || threshold > 1_015_204
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
    1,028,212 monthly downloads
    ESLint rule for enforcing consistent ES6 class member order.
    https://github.com/bryanrsmith/eslint-plugin-sort-class-members
  */
  ...(disable.includes("eslint-plugin-sort-class-members") ||
  threshold > 1_028_212
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
    1,164,392 monthly downloads
    ESLint shareable config for XO
    https://github.com/xojs/eslint-config-xo#readme
  */
  ...(disable.includes("eslint-config-xo") || threshold > 1_164_392
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
    1,693,734 monthly downloads
    ESLint shareable config for the Google style
    https://github.com/google/eslint-config-google#readme
  */
  ...(disable.includes("eslint-config-google") || threshold > 1_693_734
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
    1,942,033 monthly downloads
    An ESLint plugin that validates TypeScript doc comments
    https://tsdoc.org/
  */
  ...(disable.includes("eslint-plugin-tsdoc") || threshold > 1_942_033
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
    1,949,007 monthly downloads
    Rules enforcing best practices while using Tailwind CSS
    https://github.com/francoismassart/eslint-plugin-tailwindcss
  */
  ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 1_949_007
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
    2,086,784 monthly downloads
    Lint browser compatibility of API used
    https://github.com/amilajack/eslint-plugin-compat#readme
  */
  ...(disable.includes("eslint-plugin-compat") || threshold > 2_086_784
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
    2,301,783 monthly downloads
    ESLint rules for formatting jest tests
    https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
  */
  ...(disable.includes("eslint-plugin-jest-formatting") || threshold > 2_301_783
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
    2,405,636 monthly downloads
    JavaScript Standard Style JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-jsx
  */
  ...(disable.includes("eslint-config-standard-jsx") || threshold > 2_405_636
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
    3,584,432 monthly downloads
    Security rules for eslint
    https://github.com/eslint-community/eslint-plugin-security#readme
  */
  ...(disable.includes("eslint-plugin-security") || threshold > 3_584_432
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
    4,101,948 monthly downloads
    SonarJS rules for ESLint
    https://github.com/SonarSource/eslint-plugin-sonarjs
  */
  ...(disable.includes("eslint-plugin-sonarjs") || threshold > 4_101_948
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
    4,235,634 monthly downloads
    ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
    https://github.com/testing-library/eslint-plugin-jest-dom#readme
  */
  ...(disable.includes("eslint-plugin-jest-dom") || threshold > 4_235_634
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
    4,362,535 monthly downloads
    ESLint rule for .only blocks in mocha tests
    https://github.com/levibuzolic/no-only-tests#readme
  */
  ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_362_535
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
    4,511,552 monthly downloads
    ESLint rules for @react-native/eslint-config / ESLint config for React Native / ESLint config for React Native
    https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
  */
  ...(disable.includes("@react-native/eslint-plugin") ||
  disable.includes("@react-native-community/eslint-config") ||
  disable.includes("@react-native/eslint-config") ||
  threshold > 4_511_552
    ? []
    : [
        {
          files,
          rules: {
            ...reactNativeConfig.overrides[1].rules,
            ...reactNativeConfig.overrides[2].rules,
            ...reactNativeConfig.rules,
            // Not added in any config
            "@react-native/platform-colors": 1,
            // Deprecated style needs to be overwritten
            quotes: [
              0,
              "single",
              { allowTemplateLiterals: true, avoidEscape: true },
            ],
            ...("@react-native/eslint-plugin" in override
              ? override["@react-native/eslint-plugin"]
              : {}),
            ...("@react-native-community/eslint-config" in override
              ? override["@react-native-community/eslint-config"]
              : {}),
            ...("@react-native/eslint-config" in override
              ? override["@react-native/eslint-config"]
              : {}),
          },
        },
      ]),

  /*
    React Native (Independent Plugin/Config)
    5,142,744 monthly downloads
    React Native specific linting rules for ESLint
    https://github.com/intellicode/eslint-plugin-react-native
  */
  ...(disable.includes("eslint-plugin-react-native") || threshold > 5_142_744
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              ...reactNativeIndie.environments["react-native"].globals,
            },
          },
          rules: {
            ...reactNativeIndie.configs.all.rules,
            ...("eslint-plugin-react-native" in override
              ? override["eslint-plugin-react-native"]
              : {}),
          },
        },
      ]),

  /*
    React Refresh
    5,470,976 monthly downloads
    Validate that your components can safely be updated with fast refresh
    https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
  */
  ...(disable.includes("eslint-plugin-react-refresh") || threshold > 5_470_976
    ? []
    : [
        {
          files,
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
    7,904,321 monthly downloads
    JSDoc linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-jsdoc#readme
  */
  ...(disable.includes("eslint-plugin-jsdoc") || threshold > 7_904_321
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
    8,367,603 monthly downloads
    Easy autofixable import sorting
    https://github.com/lydell/eslint-plugin-simple-import-sort#readme
  */
  ...(disable.includes("eslint-plugin-simple-import-sort") ||
  threshold > 8_367_603
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
    8,869,296 monthly downloads
    Airbnb's ESLint config with TypeScript support
    https://github.com/iamturns/eslint-config-airbnb-typescript
  */
  ...(disable.includes("eslint-config-airbnb-typescript") ||
  threshold > 8_869_296
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
    9,288,313 monthly downloads
    More than 100 powerful ESLint rules
    https://github.com/sindresorhus/eslint-plugin-unicorn#readme
  */
  ...(disable.includes("eslint-plugin-unicorn") || threshold > 9_288_313
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
    9,490,626 monthly downloads
    Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
    https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
  */
  ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
  disable.includes("eslint-plugin-eslint-comments") ||
  threshold > 9_490_626
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
    9,961,329 monthly downloads
    Best practice rules for Storybook
    https://github.com/storybookjs/eslint-plugin-storybook#readme
  */
  ...(disable.includes("eslint-plugin-storybook") || threshold > 9_961_329
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
    12,334,596 monthly downloads
    JavaScript Standard Style - ESLint Shareable Config / A TypeScript ESLint config that loves you
    https://github.com/standard/eslint-config-standard / https://github.com/mightyiam/eslint-config-love#readme
  */
  ...(disable.includes("eslint-config-standard") ||
  disable.includes("eslint-config-love") ||
  threshold > 12_334_596
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
    15,607,664 monthly downloads
    Airbnb's ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb") || threshold > 15_607_664
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
    18,399,658 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_399_658
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
    18,399,658 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_399_658
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
    18,399,658 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app") || threshold > 18_399_658
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
    18,785,610 monthly downloads
    Enforce best practices for JavaScript promises
    https://github.com/eslint-community/eslint-plugin-promise
  */
  ...(disable.includes("eslint-plugin-promise") || threshold > 18_785_610
    ? []
    : [
        {
          files,
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
    19,436,335 monthly downloads
    ESLint plugin for Next.js.
    https://github.com/vercel/next.js#readme
  */
  ...(disable.includes("@next/eslint-plugin-next") || threshold > 19_436_335
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
    22,537,123 monthly downloads
    Flowtype linting rules for ESLint. / Flowtype linting rules for ESLint by flow-typed
    https://github.com/gajus/eslint-plugin-flowtype#readme / https://github.com/flow-typed/eslint-plugin-ft-flow#readme
  */
  ...(disable.includes("eslint-plugin-flowtype") ||
  disable.includes("eslint-plugin-ft-flow") ||
  threshold > 22_537_123
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
    22,676,128 monthly downloads
    ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
    https://github.com/testing-library/eslint-plugin-testing-library
  */
  ...(disable.includes("eslint-plugin-testing-library") ||
  threshold > 22_676_128
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
    24,237,715 monthly downloads
    ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
    https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
  */
  ...(disable.includes("eslint-plugin-es-x") ||
  disable.includes("eslint-plugin-es") ||
  threshold > 24_237_715
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
    24,627,153 monthly downloads
    Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
    https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
  */
  ...(disable.includes("eslint-plugin-n") ||
  disable.includes("eslint-plugin-node") ||
  threshold > 24_627_153
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
    26,679,028 monthly downloads
    Official ESLint plugin for Vue.js / The ESLint custom parser for `.vue` files.
    https://eslint.vuejs.org / https://github.com/vuejs/vue-eslint-parser#readme
  */
  ...(disable.includes("eslint-plugin-vue") ||
  disable.includes("vue-eslint-parser") ||
  threshold > 26_679_028
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
    28,271,030 monthly downloads
    Airbnb's base JS ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb-base") || threshold > 28_271_030
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
    43,508,900 monthly downloads
    ESLint rules for Jest
    https://github.com/jest-community/eslint-plugin-jest#readme
  */
  ...(disable.includes("eslint-plugin-jest") || threshold > 43_508_900
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
    54,069,743 monthly downloads
    Static AST checker for accessibility rules on JSX elements.
    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
  */
  ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 54_069_743
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
    61,600,151 monthly downloads
    ESLint rules for React Hooks
    https://reactjs.org/
  */
  ...(disable.includes("eslint-plugin-react-hooks") || threshold > 61_600_151
    ? []
    : [
        {
          files,
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
    75,635,722 monthly downloads
    React specific linting rules for ESLint
    https://github.com/jsx-eslint/eslint-plugin-react
  */
  ...(disable.includes("eslint-plugin-react") || threshold > 75_635_722
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
    90,976,212 monthly downloads
    ESLint JavaScript language implementation
    https://eslint.org
  */
  ...(disable.includes("@eslint/js") || threshold > 90_976_212
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
    125,617,250 monthly downloads
    Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
    https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
  */
  ...(disable.includes("eslint-plugin-import") ||
  disable.includes("eslint-import-resolver-typescript") ||
  threshold > 125_617_250
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
    140,254,150 monthly downloads
    Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
    https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
  */
  ...(disable.includes("eslint-plugin-prettier") ||
  disable.includes("eslint-config-prettier") ||
  threshold > 140_254_150
    ? []
    : [
        {
          files,
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
    243,785,109 monthly downloads
    Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree / TypeScript plugin for ESLint
    https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme
  */
  ...(disable.includes("typescript-eslint") ||
  disable.includes("@typescript-eslint/parser") ||
  disable.includes("@typescript-eslint/eslint-plugin") ||
  threshold > 243_785_109
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
