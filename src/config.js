/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 4/4/2023
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import nextjs from "@next/eslint-plugin-next";
import reactNativeConfig from "@react-native-community/eslint-config";
import shopify from "@shopify/eslint-plugin";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import google from "eslint-config-google";
import prettierConfig from "eslint-config-prettier";
import cra from "eslint-config-react-app";
import standardJsx from "eslint-config-standard-jsx";
import standardReact from "eslint-config-standard-react";
import xo from "eslint-config-xo";
import comp from "eslint-plugin-compat";
import commentsOld from "eslint-plugin-eslint-comments";
import flowtype from "eslint-plugin-flowtype";
import functional from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import n from "eslint-plugin-n";
import unsanitized from "eslint-plugin-no-unsanitized";
import node from "eslint-plugin-node";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import reactPerf from "eslint-plugin-react-perf";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import globals from "globals";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const files = ["**/*{js,mjs,cjs,ts,mts,cts,jsx,tsx,mtsx,mjsx}"];

const defaultOptions = { disable: [], override: {} };

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export default ({ disable = [], override = {} } = defaultOptions) => [
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

  /*
    You Dont Need Lodash
    501,021 monthly downloads
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
    Standard React
    565,921 monthly downloads
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
    React Performance
    604,828 monthly downloads
    Performance-minded React linting rules for ESLint
    https://github.com/cvazac/eslint-plugin-react-perf#readme
  */
  ...(disable.includes("eslint-plugin-react-perf")
    ? []
    : [
        {
          files,
          plugins: {
            "react-perf": reactPerf,
          },
          rules: {
            ...reactPerf.configs.recommended.rules,
            ...("eslint-plugin-react-perf" in override
              ? override["eslint-plugin-react-perf"]
              : {}),
          },
        },
      ]),

  /*
    Functional
    765,203 monthly downloads
    ESLint rules to disable mutation and promote fp in TypeScript.
    https://github.com/eslint-functional/eslint-plugin-functional#readme
  */
  ...(disable.includes("eslint-plugin-functional")
    ? []
    : [
        {
          files,
          plugins: { functional },
          rules: {
            // "Strick", "Recommended", and "Lite" punch far above their weight and are not added.
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
    Shopify
    801,836 monthly downloads
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
                ])
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
    No Unsanitized
    834,465 monthly downloads
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
    TSDoc
    875,156 monthly downloads
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
    XO
    882,281 monthly downloads
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
    Sort Class Members
    1,009,203 monthly downloads
    ESLint rule for enforcing consistent ES6 class member order.
    https://github.com/bryanrsmith/eslint-plugin-sort-class-members
  */
  ...(disable.includes("eslint-plugin-sort-class-members")
    ? []
    : [
        {
          files,
          plugins: { "sort-class-members": sortClassMembers },
          // there are no recomended ways to use this rule, but Shopify has opinions about it.
          rules: {
            ...("eslint-plugin-sort-class-members" in override
              ? override["eslint-plugin-sort-class-members"]
              : {}),
          },
        },
      ]),

  /*
    Compat
    1,647,251 monthly downloads
    Lint browser compatibility of API used
    https://github.com/amilajack/eslint-plugin-compat#readme
  */
  ...(disable.includes("eslint-plugin-compat")
    ? []
    : [
        {
          files,
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
    React Native Config
    1,726,095 monthly downloads
    ESLint config for React Native
    https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme
  */
  ...(disable.includes("@react-native-community/eslint-config")
    ? []
    : [
        {
          files,
          rules: {
            ...reactNativeConfig.overrides[1].rules,
            ...reactNativeConfig.overrides[2].rules,
            ...reactNativeConfig.rules,
            ...("@react-native-community/eslint-config" in override
              ? override["@react-native-community/eslint-config"]
              : {}),
          },
        },
      ]),

  /*
    Google
    1,759,629 monthly downloads
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
    Babel
    1,949,489 monthly downloads
    Companion rules for @babel/eslint-parser
    https://babel.dev/
  */
  ...(disable.includes("@babel/eslint-plugin")
    ? []
    : [
        {
          files,
          plugins: { "@babel": babelPlugin },
          // Shopify utilizes these rules, so defering to that config.
          // No recomendations given / defaults are all set to 0.
          rules: {
            ...("@babel/eslint-plugin" in override
              ? override["@babel/eslint-plugin"]
              : {}),
          },
        },
      ]),

  /*
    Standard JSX
    2,247,422 monthly downloads
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
    2,454,634 monthly downloads
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
    2,654,105 monthly downloads
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
    React Native
    2,716,782 monthly downloads
    React Native specific linting rules for ESLint
    https://github.com/intellicode/eslint-plugin-react-native
  */
  ...(disable.includes("eslint-plugin-react-native")
    ? []
    : [
        {
          files,
          plugins: {
            "react-native": reactNative,
          },
          languageOptions: {
            globals: {
              ...reactNative.environments["react-native"].globals,
            },
          },
          rules: {
            ...reactNative.configs.all.rules,
            // Needed untill this is resolved: https://github.com/Intellicode/eslint-plugin-react-native/issues/270
            "react-native/no-raw-text": "off",
            ...("eslint-plugin-react-native" in override
              ? override["eslint-plugin-react-native"]
              : {}),
          },
        },
      ]),

  /*
    Simple Import Sort
    5,376,523 monthly downloads
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
            "simple-import-sort/imports": 2,
            "simple-import-sort/exports": 2,
            ...("eslint-plugin-simple-import-sort" in override
              ? override["eslint-plugin-simple-import-sort"]
              : {}),
          },
        },
      ]),

  /*
    Comments
    5,393,771 monthly downloads
    Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
    https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
  */
  ...(!disable.includes("@eslint-community/eslint-plugin-eslint-comments") &&
  !disable.includes("eslint-plugin-eslint-comments")
    ? [
        {
          files,
          plugins: {
            "@eslint-community/eslint-comments": comments,
            "eslint-comments": commentsOld,
          },
          // CommentsOld (mysticatea/eslint-plugin-eslint-comments) intentioanlly
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
      ]
    : []),

  /*
    JSDoc
    5,871,577 monthly downloads
    JSDoc linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-jsdoc#readme
  */
  ...(disable.includes("eslint-plugin-jsdoc")
    ? []
    : [
        {
          files,
          plugins: { jsdoc },
          settings: { jsdoc: { mode: "typescript" } },
          rules: {
            ...jsdoc.configs.recommended.rules,
            // Rules needed for TSDoc Compatability
            "jsdoc/require-param-type": 0,
            "jsdoc/check-param-names": [
              2,
              { checkDestructured: false, enableFixer: false },
            ],
            "jsdoc/require-param": [2, { checkDestructured: false }],
            "jsdoc/require-returns-type": 0,
            "jsdoc/require-returns": 0,
            // Presently not implemented in TSDocs https://github.com/microsoft/tsdoc/issues/234
            "jsdoc/require-yields": 0,
            ...("eslint-plugin-jsdoc" in override
              ? override["eslint-plugin-jsdoc"]
              : {}),
          },
        },
      ]),

  /*
    Unicorn
    6,202,883 monthly downloads
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
    Standard
    11,358,765 monthly downloads
    JavaScript Standard Style - ESLint Shareable Config / An ESLint Shareable Config for JavaScript Standard Style with TypeScript support
    https://github.com/standard/eslint-config-standard / https://github.com/standard/eslint-config-standard-with-typescript#readme
  */
  ...(!disable.includes("eslint-config-standard") &&
  !disable.includes("eslint-config-standard-with-typescript")
    ? [
        ...compat.extends("standard", "standard-with-typescript"),
        {
          files,
          rules: {
            // types can be infered by typescript
            "@typescript-eslint/explicit-function-return-type": 0,
            ...("eslint-config-standard" in override
              ? override["eslint-config-standard"]
              : {}),
            ...("eslint-config-standard-with-typescript" in override
              ? override["eslint-config-standard-with-typescript"]
              : {}),
          },
        },
      ]
    : []),

  /*
    NextJS
    12,378,641 monthly downloads
    ESLint plugin for NextJS.
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
            // Irrelevant for broad JS, and polutes logs when it doesn't apply.
            "@next/next/no-html-link-for-pages": 0,
            ...("@next/eslint-plugin-next" in override
              ? override["@next/eslint-plugin-next"]
              : {}),
          },
        },
      ]),

  /*
    Promises
    15,829,966 monthly downloads
    Enforce best practices for JavaScript promises
    https://github.com/eslint-community/eslint-plugin-promise
  */
  ...(disable.includes("eslint-plugin-promise")
    ? []
    : [
        {
          files,
          // This is defined elsewhere, and thus can be commented out here
          // plugins: { async: promise },
          rules: {
            ...promise.configs.recommended.rules,
            ...("eslint-plugin-promise" in override
              ? override["eslint-plugin-promise"]
              : {}),
          },
        },
      ]),

  /*
    Create React App
    18,581,398 monthly downloads
    ESLint configuration used by Create React App
    https://github.com/facebook/create-react-app#readme
  */
  ...(disable.includes("eslint-config-react-app")
    ? []
    : [
        {
          files,
          rules: {
            "react/jsx-uses-vars": "warn",
            "react/jsx-uses-react": "warn",
            ...cra.rules,
            ...cra.overrides[0].rules,
            ...("eslint-config-react-app" in override
              ? override["eslint-config-react-app"]
              : {}),
          },
        },
      ]),

  /*
    Node.js
    18,881,510 monthly downloads
    Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
    https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
  */
  ...(!disable.includes("eslint-plugin-n") &&
  !disable.includes("eslint-plugin-node")
    ? [
        {
          files,
          plugins: {
            // "n" is defined elsewhere, and thus can be commented out here
            // n
            node,
          },
          rules: {
            // there are no recomended ways to use "node", as the "n" rule obsoletes
            // it, but "node" is still used by the Shopify config.
            ...n.configs["recommended-module"].rules,
            "n/no-missing-import": 0, // Typescript handles this
            "n/no-unpublished-import": 0, // Typescript handles this
            ...("eslint-plugin-n" in override
              ? override["eslint-plugin-n"]
              : {}),
            ...("eslint-plugin-node" in override
              ? override["eslint-plugin-node"]
              : {}),
          },
        },
      ]
    : []),

  /*
    AirBnb/AirBnb-Typescript
    20,853,096 monthly downloads
    Airbnb's ESLint config, following our styleguide / Airbnb's ESLint config with TypeScript support
    https://github.com/airbnb/javascript / https://github.com/iamturns/eslint-config-airbnb-typescript
  */
  ...(!disable.includes("eslint-config-airbnb") &&
  !disable.includes("eslint-config-airbnb-typescript")
    ? [
        ...compat.extends("airbnb", "airbnb/hooks", "airbnb-typescript"),
        {
          files,
          rules: {
            // Added to moderize this infrequently updated, but oft used config
            "no-restricted-syntax": [0, { selector: "ForOfStatement" }],
            ...("eslint-config-airbnb" in override
              ? override["eslint-config-airbnb"]
              : {}),
            ...("eslint-config-airbnb-typescript" in override
              ? override["eslint-config-airbnb-typescript"]
              : {}),
          },
        },
      ]
    : []),

  /*
    Flowtype
    21,379,643 monthly downloads
    Flowtype linting rules for ESLint.
    https://github.com/gajus/eslint-plugin-flowtype#readme
  */
  ...(disable.includes("eslint-plugin-flowtype")
    ? []
    : [
        {
          files,
          plugins: {
            flowtype,
          },
          // No rules as they conflict with Typescript
          rules: {
            ...("eslint-plugin-flowtype" in override
              ? override["eslint-plugin-flowtype"]
              : {}),
          },
        },
      ]),

  /*
    ESLint
    24,654,716 monthly downloads
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
    Jest
    37,257,571 monthly downloads
    ESLint rules for Jest
    https://github.com/jest-community/eslint-plugin-jest#readme
  */
  ...(disable.includes("eslint-plugin-jest")
    ? []
    : [
        {
          files,
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
    44,886,798 monthly downloads
    Static AST checker for accessibility rules on JSX elements.
    https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
  */
  ...(disable.includes("eslint-plugin-jsx-a11y")
    ? []
    : [
        {
          files,
          plugins: {
            // Defined in AirBnB
            // "jsx-a11y": jsxA11y
          },
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
    47,541,579 monthly downloads
    ESLint rules for React Hooks
    https://reactjs.org/
  */
  ...(disable.includes("eslint-plugin-react-hooks")
    ? []
    : [
        {
          files,
          plugins: {
            // Defined in AirBnB
            // "react-hooks": reactHooks
          },
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
    60,870,208 monthly downloads
    React specific linting rules for ESLint
    https://github.com/jsx-eslint/eslint-plugin-react
  */
  ...(disable.includes("eslint-plugin-react")
    ? []
    : [
        {
          files,
          plugins: {
            // Defined in AirBnB
            // react
          },
          rules: {
            ...react.configs.recommended.rules,
            ...("eslint-plugin-react" in override
              ? override["eslint-plugin-react"]
              : {}),
          },
        },
      ]),

  /*
    Import
    74,718,986 monthly downloads
    Import with sanity.
    https://github.com/import-js/eslint-plugin-import
  */
  ...(disable.includes("eslint-plugin-import")
    ? []
    : [
        {
          files,
          // This is defined in AirBnb
          // plugins: { i: importPlugin },
          settings: {
            "import/parsers": {
              "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
              typescript: { alwaysTryTypes: true },
              node: true,
            },
          },
          rules: {
            ...importPlugin.configs.recommended.rules,
            ...importPlugin.configs.typescript.rules,
            ...("eslint-plugin-import" in override
              ? override["eslint-plugin-import"]
              : {}),
          },
        },
      ]),

  /*
    Prettier
    105,055,416 monthly downloads
    Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
    https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
  */
  ...(!disable.includes("eslint-plugin-prettier") &&
  !disable.includes("eslint-config-prettier")
    ? [
        {
          files,
          plugins: {
            prettier,
          },
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
      ]
    : []),

  /*
    TypeScript
    176,935,126 monthly downloads
    An ESLint custom parser which leverages TypeScript ESTree / TypeScript plugin for ESLint
    https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme
  */
  ...(!disable.includes("@typescript-eslint/parser") &&
  !disable.includes("@typescript-eslint/eslint-plugin")
    ? [
        {
          files,
          linterOptions: { reportUnusedDisableDirectives: true },
          languageOptions: {
            parser: typescriptParser,
            parserOptions: {
              ecmaVersion: "latest",
              sourceType: "module",
              project: "./tsconfig.json",
            },
            globals: {
              ...globals.browser,
              ...globals.node,
            },
          },
          plugins: { "@ts": typescriptPlugin },
          rules: {
            ...typescriptPlugin.configs.recommended.rules,
            ...typescriptPlugin.configs["recommended-requiring-type-checking"]
              .rules,
            // "allowNullableObject: false," autofixes type `object | undefined` poorly.
            // When checking a nullable object, `if (obj)...` it autofixes to `if (obj != null)...`.
            // This violates both the "unicorn/no-null" rule and the "eqeqeq" rule, causing unneeded further corrections.
            // See: https://eslint.org/docs/latest/rules/eqeqeq
            //      https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md
            //      https://typescript-eslint.io/rules/strict-boolean-expressions/#fixes-and-suggestions
            "@typescript-eslint/strict-boolean-expressions": [
              2,
              {
                allowString: false,
                allowNumber: false,
                allowNullableObject: true,
                allowNullableBoolean: false,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false,
              },
            ],
            ...("@typescript-eslint/parser" in override
              ? override["@typescript-eslint/parser"]
              : {}),
            ...("@typescript-eslint/eslint-plugin" in override
              ? override["@typescript-eslint/eslint-plugin"]
              : {}),
          },
        },
      ]
    : []),
];
