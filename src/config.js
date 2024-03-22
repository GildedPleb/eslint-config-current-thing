// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 3/22/2024
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
import { rules as emotion } from "@emotion/eslint-plugin";
// Import airbnb from "eslint-config-airbnb";
// import airbnbBase from "eslint-config-airbnb-base";
// import airbnbTypescript from "eslint-config-airbnb-typescript";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import nextjs from "@next/eslint-plugin-next";
import rnConfig from "@react-native/eslint-config";
import rnPlugin from "@react-native/eslint-plugin";
import reactNativeConfig from "@react-native-community/eslint-config";
import shopify from "@shopify/eslint-plugin";
// Import vueParser from "vue-eslint-parser";
import stylistic from "@stylistic/eslint-plugin";
import google from "eslint-config-google";
// Import standard from "eslint-config-standard";
import standardTS from "eslint-config-love";
import prettierConfig from "eslint-config-prettier";
import cra from "eslint-config-react-app";
import standardJsx from "eslint-config-standard-jsx";
import standardReact from "eslint-config-standard-react";
import xo from "eslint-config-xo";
// Import importResolver from "eslint-import-resolver-typescript";
import comp from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
import es from "eslint-plugin-es";
import esX from "eslint-plugin-es-x";
import commentsOld from "eslint-plugin-eslint-comments";
import flowtype from "eslint-plugin-flowtype";
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
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// Import reactPerf from "eslint-plugin-react-perf";
import reactNative from "eslint-plugin-react-native";
// Import typescriptParser from "@typescript-eslint/parser";
// import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
import vue from "eslint-plugin-vue";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import globals from "globals";
import tseslint from "typescript-eslint";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const files = ["**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}"];

const defaultOptions = { disable: [], override: {} };

/**
 * @param {{ disable: string[], override: Record<string, Record<string, number | string>> }} default - Options
 */
const configGen = ({ disable = [], override = {} } = defaultOptions) => [
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

  /*
    React Performance
    334,193 monthly downloads
    Performance-minded React linting rules for ESLint
    https://github.com/cvazac/eslint-plugin-react-perf#readme

  ...(disable.includes("eslint-plugin-react-perf")
    ? []
    : [
        {
    files,
    plugins: { "react-perf": reactPerf },
    rules: {
            ...reactPerf.configs.recommended.rules,
               ...("eslint-plugin-react-perf" in override ? override["eslint-plugin-react-perf"] : {})
          },
  }
      ]),
  */
  /*
    CSS Modules
    444,315 monthly downloads
    Checks that you are using the existent css/scss/less classes, no more no less
    undefined
  */
  ...(disable.includes("eslint-plugin-css-modules")
    ? []
    : [
        {
          files,
          plugins: { "css-modules": cssModules },
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
    488,538 monthly downloads
    JavaScript Standard Style React/JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-react
  */
  ...(disable.includes("eslint-config-standard-react")
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
    577,985 monthly downloads
    ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
    https://github.com/ota-meshi/eslint-plugin-regexp#readme
  */
  ...(disable.includes("eslint-plugin-regexp")
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
    588,169 monthly downloads
    Stylistic rules for ESLint, works for both JavaScript and TypeScript.
    https://github.com/eslint-stylistic/eslint-stylistic#readme
  */
  ...(disable.includes("@stylistic/eslint-plugin")
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
            "@stylistic/quotes": 0,
            ...("@stylistic/eslint-plugin" in override
              ? override["@stylistic/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    Shopify
    634,810 monthly downloads
    Shopify's ESLint rules and configs.
    https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
  */
  ...(disable.includes("@shopify/eslint-plugin")
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
    You Dont Need Lodash
    655,540 monthly downloads
    Check methods you can use natively without lodash/underscore
    https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
  */
  ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore")
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
    681,055 monthly downloads
    ESLint plugin for i18n
    https://github.com/edvardchen/eslint-plugin-i18next#readme
  */
  ...(disable.includes("eslint-plugin-i18next")
    ? []
    : [
        {
          files,
          plugins: { i18next },
          rules: {
            ...i18next.configs.recommended.rules,
            ...("eslint-plugin-i18next" in override
              ? override["eslint-plugin-i18next"]
              : {}),
          },
        },
      ]),

  /*
    Functional
    788,162 monthly downloads
    ESLint rules to promote functional programming in TypeScript.
    https://github.com/eslint-functional/eslint-plugin-functional#readme
  */
  ...(disable.includes("eslint-plugin-functional")
    ? []
    : [
        {
          files,
          plugins: { functional },
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
    Emotion CSS
    790,876 monthly downloads
    ESLint rules for emotion
    https://github.com/emotion-js/emotion/tree/main#readme
  */
  ...(disable.includes("@emotion/eslint-plugin")
    ? []
    : [
        {
          files,
          plugins: { "@emotion": { rules: emotion } },
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
    Perfectionist
    825,915 monthly downloads
    ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
    https://eslint-plugin-perfectionist.azat.io
  */
  ...(disable.includes("eslint-plugin-perfectionist")
    ? []
    : [
        {
          files,
          plugins: {
            perfectionist,
          },
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
    968,906 monthly downloads
    ESLint rule to disallow unsanitized code
    https://github.com/mozilla/eslint-plugin-no-unsanitized/
  */
  ...(disable.includes("eslint-plugin-no-unsanitized")
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
    969,218 monthly downloads
    ESLint rule for enforcing consistent ES6 class member order.
    https://github.com/bryanrsmith/eslint-plugin-sort-class-members
  */
  ...(disable.includes("eslint-plugin-sort-class-members")
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
    Header
    1,074,445 monthly downloads
    ESLint plugin to ensure that files begin with given comment
    https://github.com/Stuk/eslint-plugin-header#readme
  */
  ...(disable.includes("eslint-plugin-header")
    ? []
    : [
        {
          files,
          plugins: { header },
          // No added rule as too customizable, but "header/header" is now available.
          rules: {
            ...("eslint-plugin-header" in override
              ? override["eslint-plugin-header"]
              : {}),
          },
        },
      ]),

  /*
    XO
    1,118,160 monthly downloads
    ESLint shareable config for XO
    https://github.com/xojs/eslint-config-xo#readme
  */
  ...(disable.includes("eslint-config-xo")
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
    Babel
    1,619,900 monthly downloads
    Companion rules for @babel/eslint-parser
    https://babel.dev/
  */
  ...(disable.includes("@babel/eslint-plugin")
    ? []
    : [
        {
          files,
          plugins: { "@babel": babelPlugin },
          // Shopify utilizes these rules, so deferring to that config.
          // No recommendations given / defaults are all set to 0.
          rules: {
            ...("@babel/eslint-plugin" in override
              ? override["@babel/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    Google
    1,630,303 monthly downloads
    ESLint shareable config for the Google style
    https://github.com/google/eslint-config-google#readme
  */
  ...(disable.includes("eslint-config-google")
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
    1,854,848 monthly downloads
    An ESLint plugin that validates TypeScript doc comments
    https://tsdoc.org/
  */
  ...(disable.includes("eslint-plugin-tsdoc")
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
    1,868,000 monthly downloads
    Rules enforcing best practices while using Tailwind CSS
    https://github.com/francoismassart/eslint-plugin-tailwindcss
  */
  ...(disable.includes("eslint-plugin-tailwindcss")
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
    2,008,439 monthly downloads
    Lint browser compatibility of API used
    https://github.com/amilajack/eslint-plugin-compat#readme
  */
  ...(disable.includes("eslint-plugin-compat")
    ? []
    : [
        {
          files,
          languageOptions: {
            globals: {
              browser: true,
            },
          },
          plugins: { compat: comp },
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
    2,191,467 monthly downloads
    ESLint rules for formatting jest tests
    https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
  */
  ...(disable.includes("eslint-plugin-jest-formatting")
    ? []
    : [
        {
          files,
          plugins: { "jest-formatting": jestFormatting },
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
    2,311,844 monthly downloads
    JavaScript Standard Style JSX support - ESLint Shareable Config
    https://github.com/standard/eslint-config-standard-jsx
  */
  ...(disable.includes("eslint-config-standard-jsx")
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
    3,438,261 monthly downloads
    Security rules for eslint
    https://github.com/eslint-community/eslint-plugin-security#readme
  */
  ...(disable.includes("eslint-plugin-security")
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
    3,931,460 monthly downloads
    SonarJS rules for ESLint
    https://github.com/SonarSource/eslint-plugin-sonarjs
  */
  ...(disable.includes("eslint-plugin-sonarjs")
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
    4,056,491 monthly downloads
    ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
    https://github.com/testing-library/eslint-plugin-jest-dom#readme
  */
  ...(disable.includes("eslint-plugin-jest-dom")
    ? []
    : [
        {
          files,
          plugins: { "jest-dom": jestDom },
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
    4,185,740 monthly downloads
    ESLint rule for .only blocks in mocha tests
    https://github.com/levibuzolic/no-only-tests#readme
  */
  ...(disable.includes("eslint-plugin-no-only-tests")
    ? []
    : [
        {
          files,
          plugins: { "no-only-tests": noOnlyTest },
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
    4,352,224 monthly downloads
    ESLint config for React Native / ESLint config for React Native / ESLint rules for @react-native/eslint-config
    https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme
  */
  ...(disable.includes("@react-native-community/eslint-config") ||
  disable.includes("@react-native/eslint-config") ||
  disable.includes("@react-native/eslint-plugin")
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
    4,957,594 monthly downloads
    React Native specific linting rules for ESLint
    https://github.com/intellicode/eslint-plugin-react-native
  */
  ...(disable.includes("eslint-plugin-react-native")
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
    5,221,950 monthly downloads
    Validate that your components can safely be updated with fast refresh
    https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
  */
  ...(disable.includes("eslint-plugin-react-refresh")
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
    7,559,507 monthly downloads
    JSDoc linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-jsdoc#readme
  */
  ...(disable.includes("eslint-plugin-jsdoc")
    ? []
    : [
        {
          files,
          plugins: { jsdoc },
          rules: {
            ...jsdoc.configs.recommended.rules,
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
    8,028,684 monthly downloads
    Easy autofixable import sorting
    https://github.com/lydell/eslint-plugin-simple-import-sort#readme
  */
  ...(disable.includes("eslint-plugin-simple-import-sort")
    ? []
    : [
        {
          files,
          plugins: { "simple-import-sort": importSort },
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
    8,523,798 monthly downloads
    Airbnb's ESLint config with TypeScript support
    https://github.com/iamturns/eslint-config-airbnb-typescript
  */
  ...(disable.includes("eslint-config-airbnb-typescript")
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
    8,887,906 monthly downloads
    More than 100 powerful ESLint rules
    https://github.com/sindresorhus/eslint-plugin-unicorn#readme
  */
  ...(disable.includes("eslint-plugin-unicorn")
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
    9,087,686 monthly downloads
    Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
    https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
  */
  ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
  disable.includes("eslint-plugin-eslint-comments")
    ? []
    : [
        {
          files,
          plugins: {
            "@eslint-community/eslint-comments": comments,
            "eslint-comments": commentsOld,
          },
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
    9,553,948 monthly downloads
    Best practice rules for Storybook
    https://github.com/storybookjs/eslint-plugin-storybook#readme
  */
  ...(disable.includes("eslint-plugin-storybook")
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
    11,838,068 monthly downloads
    JavaScript Standard Style - ESLint Shareable Config / A TypeScript ESLint config that loves you
    https://github.com/standard/eslint-config-standard / https://github.com/mightyiam/eslint-config-love#readme
  */
  ...(disable.includes("eslint-config-standard") ||
  disable.includes("eslint-config-love")
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
    14,994,509 monthly downloads
    Airbnb's ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb")
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
    17,667,637 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app")
    ? []
    : [
        {
          files,
          rules: {
            "react/jsx-uses-react": "warn",
            "react/jsx-uses-vars": "warn",
            ...cra.rules,
            ...cra.overrides[0].rules,
            ...("eslint-config-react-app" in override
              ? override["eslint-config-react-app"]
              : {}),
          },
        },
      ]),

  /*
    Promises
    18,022,244 monthly downloads
    Enforce best practices for JavaScript promises
    https://github.com/eslint-community/eslint-plugin-promise
  */
  ...(disable.includes("eslint-plugin-promise")
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
    18,615,938 monthly downloads
    ESLint plugin for Next.js.
    https://github.com/vercel/next.js#readme
  */
  ...(disable.includes("@next/eslint-plugin-next")
    ? []
    : [
        {
          files,
          plugins: { "@next/next": nextjs },
          rules: {
            ...nextjs.configs.recommended.rules,
            ...nextjs.configs["core-web-vitals"].rules,
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
    19,414,427 monthly downloads
    Flowtype linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-flowtype#readme
  */
  ...(disable.includes("eslint-plugin-flowtype")
    ? []
    : [
        {
          files,
          plugins: { flowtype },
          // No rules as they conflict with Typescript
          rules: {
            ...("eslint-plugin-flowtype" in override
              ? override["eslint-plugin-flowtype"]
              : {}),
          },
        },
      ]),

  /*
    ES-X
    23,232,790 monthly downloads
    ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
    https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
  */
  ...(disable.includes("eslint-plugin-es-x") ||
  disable.includes("eslint-plugin-es")
    ? []
    : [
        {
          files,
          plugins: { es, "es-x": esX },
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
    23,621,388 monthly downloads
    Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
    https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
  */
  ...(disable.includes("eslint-plugin-n") ||
  disable.includes("eslint-plugin-node")
    ? []
    : [
        {
          files,
          plugins: {
            // eslint-disable-next-line id-length
            n: nNode,
            node,
          },
          rules: {
            // There are no recommended ways to use "node", as the "n" rule obsoletes
            // it, but "node" is still used by the Shopify config.
            ...nNode.configs["recommended-module"].rules,
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
    25,584,677 monthly downloads
    Official ESLint plugin for Vue.js / The ESLint custom parser for `.vue` files.
    https://eslint.vuejs.org / https://github.com/vuejs/vue-eslint-parser#readme
  */
  ...(disable.includes("eslint-plugin-vue") ||
  disable.includes("vue-eslint-parser")
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
    27,146,820 monthly downloads
    Airbnb's base JS ESLint config, following our styleguide
    https://github.com/airbnb/javascript
  */
  ...(disable.includes("eslint-config-airbnb-base")
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
    41,744,998 monthly downloads
    ESLint rules for Jest
    https://github.com/jest-community/eslint-plugin-jest#readme
  */
  ...(disable.includes("eslint-plugin-jest")
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
          plugins: { jest },
          rules: {
            ...jest.configs.recommended.rules,
            ...("eslint-plugin-jest" in override
              ? override["eslint-plugin-jest"]
              : {}),
          },
        },
      ]),

  /*
    JSX A11y
    51,862,138 monthly downloads
    Static AST checker for accessibility rules on JSX elements.
    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
  */
  ...(disable.includes("eslint-plugin-jsx-a11y")
    ? []
    : [
        {
          files,
          plugins: { "jsx-a11y": jsxA11y },
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
    59,077,211 monthly downloads
    ESLint rules for React Hooks
    https://reactjs.org/
  */
  ...(disable.includes("eslint-plugin-react-hooks")
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
    72,459,810 monthly downloads
    React specific linting rules for ESLint
    https://github.com/jsx-eslint/eslint-plugin-react
  */
  ...(disable.includes("eslint-plugin-react")
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
    87,316,876 monthly downloads
    ESLint JavaScript language implementation
    https://eslint.org
  */
  ...(disable.includes("@eslint/js")
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
    120,439,119 monthly downloads
    Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
    https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
  */
  ...(disable.includes("eslint-plugin-import") ||
  disable.includes("eslint-import-resolver-typescript")
    ? []
    : [
        {
          files,
          plugins: { import: importPlugin },
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
    134,578,854 monthly downloads
    Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
    https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
  */
  ...(disable.includes("eslint-plugin-prettier") ||
  disable.includes("eslint-config-prettier")
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
    233,836,452 monthly downloads
    Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree / TypeScript plugin for ESLint
    https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme
  */
  ...(disable.includes("typescript-eslint") ||
  disable.includes("@typescript-eslint/parser") ||
  disable.includes("@typescript-eslint/eslint-plugin")
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
