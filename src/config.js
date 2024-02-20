/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable tsdoc/syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable sonarjs/no-duplicate-string */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 2/20/2024
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
// Import standard from "eslint-config-standard";
// import standardTS from "eslint-config-standard-with-typescript";
import nextjs from "@next/eslint-plugin-next";
import reactNativeConfig from "@react-native-community/eslint-config";
import shopify from "@shopify/eslint-plugin";
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
import jestDom from "eslint-plugin-jest-dom";
import jestFormatting from "eslint-plugin-jest-formatting";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nNode from "eslint-plugin-n";
import unsanitized from "eslint-plugin-no-unsanitized";
import node from "eslint-plugin-node";
// Import airbnbBase from "eslint-config-airbnb";
// import airBnbTypescript from "eslint-config-airbnb-typescript";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
// Import reactPerf from "eslint-plugin-react-perf";
import reactNative from "eslint-plugin-react-native";
// Import typescriptParser from "@typescript-eslint/parser";
// import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
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
    316,527 monthly downloads
    Performance-minded React linting rules for ESLint
    https://github.com/cvazac/eslint-plugin-react-perf#readme

  ...(!disable.includes("eslint-plugin-react-perf") ? [
        {
    files,
		plugins: { "react-perf": reactPerf },
    rules: { ...reactPerf.configs.recommended.rules,
               ...("eslint-plugin-react-perf" in override ? override["eslint-plugin-react-perf"] : {})
               },
  }] : []),
  */
  /*
    Shopify
    467,776 monthly downloads
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
    Standard React
    501,590 monthly downloads
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
    You Dont Need Lodash
    633,935 monthly downloads
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
    Functional
    734,768 monthly downloads
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
    Sort Class Members
    762,874 monthly downloads
    ESLint rule for enforcing consistent ES6 class member order.
    https://github.com/bryanrsmith/eslint-plugin-sort-class-members
  */
  ...(disable.includes("eslint-plugin-sort-class-members")
    ? []
    : [
        {
          files,
          plugins: { "sort-class-members": sortClassMembers },
          // There are no recomended ways to use this rule, but Shopify has opinions about it.
          rules: {
            ...("eslint-plugin-sort-class-members" in override
              ? override["eslint-plugin-sort-class-members"]
              : {}),
          },
        },
      ]),

  /*
    No Unsanitized
    1,024,770 monthly downloads
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
    XO
    1,089,658 monthly downloads
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
    1,446,783 monthly downloads
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
    Google
    1,679,697 monthly downloads
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
    1,692,684 monthly downloads
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
    Jest Formatting
    1,897,503 monthly downloads
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
    Compat
    1,919,170 monthly downloads
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
    2,202,440 monthly downloads
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
    Standard JSX
    2,286,991 monthly downloads
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
    3,338,685 monthly downloads
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
    3,792,264 monthly downloads
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
    React Refresh
    3,914,429 monthly downloads
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
    Jest Dom
    3,950,161 monthly downloads
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
    React Native
    4,458,475 monthly downloads
    React Native specific linting rules for ESLint
    https://github.com/intellicode/eslint-plugin-react-native
  */
  ...(disable.includes("eslint-plugin-react-native")
    ? []
    : [
        {
          files,
          plugins: { "react-native": reactNative },
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
    JSDoc
    7,610,009 monthly downloads
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
    Simple Import Sort
    7,614,096 monthly downloads
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
    Unicorn
    8,442,138 monthly downloads
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
    8,487,241 monthly downloads
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
    Standard
    14,023,340 monthly downloads
    JavaScript Standard Style - ESLint Shareable Config / An ESLint Shareable Config for JavaScript Standard Style with TypeScript support
    https://github.com/standard/eslint-config-standard / https://github.com/mightyiam/eslint-config-standard-with-typescript#readme
  */
  ...(!disable.includes("eslint-config-standard") &&
  !disable.includes("eslint-config-standard-with-typescript")
    ? [
        {
          files,
          rules: {
            ...compat.extends("standard")[0].rules,
            ...compat.extends("standard-with-typescript")[0].rules,
            // Types can be infered by typescript
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
    Promises
    17,538,755 monthly downloads
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
    Create React App
    17,627,959 monthly downloads
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
    NextJS
    17,714,563 monthly downloads
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
            // Irrelevant for broad JS, and polutes logs when it doesn't apply.
            "@next/next/no-html-link-for-pages": 0,
            ...("@next/eslint-plugin-next" in override
              ? override["@next/eslint-plugin-next"]
              : {}),
          },
        },
      ]),

  /*
    Flowtype
    19,203,732 monthly downloads
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
    AirBnb/AirBnb-Typescript
    22,573,221 monthly downloads
    Airbnb's ESLint config, following our styleguide / Airbnb's ESLint config with TypeScript support
    https://github.com/airbnb/javascript / https://github.com/iamturns/eslint-config-airbnb-typescript
  */
  ...(!disable.includes("eslint-config-airbnb") &&
  !disable.includes("eslint-config-airbnb-typescript")
    ? [
        {
          files,
          rules: {
            ...compat.extends("airbnb")[0].rules,
            ...compat.extends("airbnb/hooks")[0].rules,
            ...compat.extends("airbnb-typescript")[0].rules,
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
    Node.js
    22,948,574 monthly downloads
    Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
    https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
  */
  ...(!disable.includes("eslint-plugin-n") &&
  !disable.includes("eslint-plugin-node")
    ? [
        {
          files,
          plugins: {
            // eslint-disable-next-line id-length
            n: nNode,
            node,
          },
          rules: {
            // There are no recomended ways to use "node", as the "n" rule obsoletes
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
      ]
    : []),

  /*
    Jest
    41,036,255 monthly downloads
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
    50,609,309 monthly downloads
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
    56,443,778 monthly downloads
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
    68,186,824 monthly downloads
    React specific linting rules for ESLint
    https://github.com/jsx-eslint/eslint-plugin-react
  */
  ...(disable.includes("eslint-plugin-react")
    ? []
    : [
        {
          files,
          plugins: { react },
          settings: {
            react: {
              pragma: "React",
              version: "detect",
            },
          },
          languageOptions: {
            ecmaVersion: "latest",
            parserOptions: {
              ecmaFeatures: {
                jsx: true,
              },
            },
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
    ESLint
    80,569,781 monthly downloads
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
    87,205,421 monthly downloads
    Import with sanity.
    https://github.com/import-js/eslint-plugin-import
  */
  ...(disable.includes("eslint-plugin-import")
    ? []
    : [
        {
          files,
          plugins: { import: importPlugin },
          settings: {
            "import/parsers": {
              "@typescript-eslint/parser": [".ts", ".tsx"],
            },
            "import/resolver": {
              typescript: { alwaysTryTypes: true },
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
            },
            "import/extensions": [
              ".js",
              ".mjs",
              ".jsx",
              ".ts",
              ".tsx",
              ".d.ts",
            ],
            "import/core-modules": [],
            "import/ignore": [
              "node_modules",
              ".(coffee|scss|css|less|hbs|svg|json)$",
            ],
            "import/external-module-folders": [
              "node_modules",
              "node_modules/@types",
            ],
          },
          rules: {
            ...importPlugin.configs.recommended.rules,
            ...importPlugin.configs.typescript.rules,
            "import/order": 0,
            ...("eslint-plugin-import" in override
              ? override["eslint-plugin-import"]
              : {}),
          },
        },
      ]),

  /*
    Prettier
    129,340,116 monthly downloads
    Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
    https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
  */
  ...(!disable.includes("eslint-plugin-prettier") &&
  !disable.includes("eslint-config-prettier")
    ? [
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
      ]
    : []),

  /*
    TypeScript
    221,305,495 monthly downloads
    Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree / TypeScript plugin for ESLint
    https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme / https://github.com/typescript-eslint/typescript-eslint#readme
  */
  ...(!disable.includes("typescript-eslint") &&
  !disable.includes("@typescript-eslint/parser") &&
  !disable.includes("@typescript-eslint/eslint-plugin")
    ? [
        ...tseslint.config(...tseslint.configs.recommendedTypeChecked, {
          languageOptions: {
            parserOptions: { project: true },
          },
          rules: {
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
      ]
    : []),
];

export default configGen;
