// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 4/12/2024
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
import { rules as emotion } from "@emotion/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import nextjs from "@next/eslint-plugin-next";
import rnPlugin from "@react-native/eslint-plugin";
import reactNativeConfig from "@react-native-community/eslint-config";
import shopify from "@shopify/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import restrictedGlobals from "confusing-browser-globals";
import google from "eslint-config-google";
import standardTS from "eslint-config-love";
import prettierConfig from "eslint-config-prettier";
import standard from "eslint-config-standard";
import standardJsx from "eslint-config-standard-jsx";
import standardReact from "eslint-config-standard-react";
import xo from "eslint-config-xo";
import { defineFlatConfig } from "eslint-define-config";
import comp from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
import cypress from "eslint-plugin-cypress";
import es from "eslint-plugin-es";
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
import jsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import mocha from "eslint-plugin-mocha";
import nNode from "eslint-plugin-n";
import noOnlyTest from "eslint-plugin-no-only-tests";
import unsanitized from "eslint-plugin-no-unsanitized";
import node from "eslint-plugin-node";
import perfectionist from "eslint-plugin-perfectionist";
import playwright from "eslint-plugin-playwright";
import preferArrow from "eslint-plugin-prefer-arrow";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNativeIndie from "eslint-plugin-react-native";
import reactPerf from "eslint-plugin-react-perf";
import reactRefresh from "eslint-plugin-react-refresh";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import tsdoc from "eslint-plugin-tsdoc";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import globals from "globals";
import jsoncEslintParser from "jsonc-eslint-parser";
import tseslint from "typescript-eslint";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

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

const testFiles = [
  "**/*.test.*",
  "**/*_test.*",
  "**/*Test.*",
  "**/*.spec.*",
  "**/*_spec.*",
  "**/*Spec.*",
  "**/__{mocks,tests}__/**/*",
  "**/*.{spec,test}.[jt]s?(x)",
];

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
    /* PARSERS */
    /*
      JSONC
      5,951,309 monthly downloads
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
      121,882,601 monthly downloads
      Tooling which enables you to use TypeScript with ESLint / An ESLint custom parser which leverages TypeScript ESTree
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/parser
    */
    {
      files,
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          ecmaVersion: "latest",
          project: true,
        },
      },
    },
    /* PLUGINS */
    {
      plugins: {
        "@babel": babelPlugin,
        "@emotion": { rules: emotion },
        "@eslint-community/eslint-comments": comments,
        "@next/next": nextjs,
        "@react-native": rnPlugin,
        "@shopify": shopify,
        "@shopify/jest": {
          rules: Object.fromEntries(
            Object.entries(shopify.rules).map(([key, value]) => [
              key.startsWith("jest/") ? key.slice(5) : key,
              value,
            ]),
          ),
        },
        "@shopify/typescript": {
          rules: Object.fromEntries(
            Object.entries(shopify.rules).map(([key, value]) => [
              key.startsWith("typescript/") ? key.slice(11) : key,
              value,
            ]),
          ),
        },
        "@stylistic": stylistic,
        "@typescript-eslint": tseslint.plugin,
        compat: comp,
        "css-modules": cssModules,
        cypress,
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
        jsonc,
        "jsx-a11y": jsxA11y,
        mocha,
        n: nNode,
        "no-only-tests": noOnlyTest,
        "no-unsanitized": unsanitized,
        node,
        perfectionist,
        playwright,
        "prefer-arrow": preferArrow,
        prettier,
        promise,
        react,
        "react-hooks": reactHooks,
        "react-native": reactNativeIndie,
        "react-perf": reactPerf,
        "react-refresh": reactRefresh,
        regexp,
        security,
        "simple-import-sort": importSort,
        sonarjs,
        "sort-class-members": sortClassMembers,
        storybook,
        tailwindcss,
        "testing-library": testingLibrary,
        tsdoc,
        unicorn,
        "unused-imports": unusedImports,
        "you-dont-need-lodash-underscore": youDontNeedLodash,
      },
    },
    /* CONFIGS */
    /*
      React Performance
      344,095 monthly downloads
      Performance-minded React linting rules for ESLint
      https://github.com/cvazac/eslint-plugin-react-perf#readme
      Requires: react-perf
    */
    ...(disable.includes("eslint-plugin-react-perf") || threshold > 344_095
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              ...reactPerf.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-react-perf" in override
                ? override["eslint-plugin-react-perf"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - TS
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts") || threshold > 488_054
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@stylistic/block-spacing": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/block-spacing": 0,
              "no-confusing-arrow": 0,
              "prettier/prettier": 0,
              "unicorn/no-nested-ternary": 0,
              ...shopify.configs.typescript.overrides[0].rules,

              ...("@shopify/eslint-plugin/ts" in override
                ? override["@shopify/eslint-plugin/ts"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Core
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, eslint-comments, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/core") || threshold > 488_054
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "prettier/prettier": 0,
              ...shopify.configs.core.rules,

              ...("@shopify/eslint-plugin/core" in override
                ? override["@shopify/eslint-plugin/core"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - ESNext
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @babel, promise, sort-class-members, import
    */
    ...(disable.includes("@shopify/eslint-plugin/esnext") || threshold > 488_054
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "perfectionist/sort-imports": 0,
              "prettier/prettier": 0,
              semi: 0,
              ...shopify.configs.esnext.rules,
              "mocha/no-mocha-arrows": 0,
              "simple-import-sort/imports": 0,
              ...("@shopify/eslint-plugin/esnext" in override
                ? override["@shopify/eslint-plugin/esnext"]
                : {}),
            },
            settings: {
              "import/ignore": ["node_modules", ".s?css"],
            },
          },
        ]),

    /*
      Shopify - Jest
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: jest, jest-formatting, @shopify, @shopify/jest
    */
    ...(disable.includes("@shopify/eslint-plugin/jest") || threshold > 488_054
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: {
                "jest/globals": true,
              },
            },
            rules: {
              ...shopify.configs.jest.rules,

              ...("@shopify/eslint-plugin/jest" in override
                ? override["@shopify/eslint-plugin/jest"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Node
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, node
    */
    ...(disable.includes("@shopify/eslint-plugin/node") || threshold > 488_054
      ? []
      : [
          {
            files,
            rules: {
              ...shopify.configs.node.rules,

              ...("@shopify/eslint-plugin/node" in override
                ? override["@shopify/eslint-plugin/node"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Prettier
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @babel, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier") ||
    threshold > 488_054
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              curly: 0,
              indent: 0,
              "indent-legacy": 0,
              "jsx-quotes": 0,
              "lines-around-comment": 0,
              "no-confusing-arrow": 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              "quote-props": 0,
              quotes: 0,
              "wrap-iife": 0,
              ...shopify.configs.prettier.rules,

              ...("@shopify/eslint-plugin/prettier" in override
                ? override["@shopify/eslint-plugin/prettier"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Prettier-TS
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @typescript-eslint
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier-ts") ||
    threshold > 488_054
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...shopify.configs.prettier.overrides[0].rules,

              ...("@shopify/eslint-plugin/prettier-ts" in override
                ? override["@shopify/eslint-plugin/prettier-ts"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Polaris
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/polaris") ||
    threshold > 488_054
      ? []
      : [
          {
            files,
            rules: {
              ...shopify.configs.polaris.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@shopify/eslint-plugin/polaris" in override
                ? override["@shopify/eslint-plugin/polaris"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - React
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react, jsx-a11y, react-hooks, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react") || threshold > 488_054
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
              ...shopify.configs.react.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              "react/jsx-filename-extension": [
                2,
                { extensions: [".jsx", ".tsx"] },
              ],
              ...("@shopify/eslint-plugin/react" in override
                ? override["@shopify/eslint-plugin/react"]
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
      Shopify - React-TS
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react
    */
    ...(disable.includes("@shopify/eslint-plugin/react-ts") ||
    threshold > 488_054
      ? []
      : [
          {
            files: tsxFiles,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
              },
            },
            rules: {
              ...shopify.configs.react.overrides[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@shopify/eslint-plugin/react-ts" in override
                ? override["@shopify/eslint-plugin/react-ts"]
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
      Shopify - React-Test
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react-test") ||
    threshold > 488_054
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  jsx: true,
                },
              },
            },
            rules: {
              ...shopify.configs.react.overrides[1].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "playwright/no-standalone-expect": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@shopify/eslint-plugin/react-test" in override
                ? override["@shopify/eslint-plugin/react-test"]
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
      Shopify - TS-TypeCheck
      488,054 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts-typecheck") ||
    threshold > 488_054
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...shopify.configs["typescript-type-checking"].overrides[0].rules,

              ...("@shopify/eslint-plugin/ts-typecheck" in override
                ? override["@shopify/eslint-plugin/ts-typecheck"]
                : {}),
            },
          },
        ]),

    /*
      CSS Modules
      488,067 monthly downloads
      Checks that you are using the existent css/scss/less classes, no more no less
      undefined
      Requires: css-modules
    */
    ...(disable.includes("eslint-plugin-css-modules") || threshold > 488_067
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
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
      512,396 monthly downloads
      JavaScript Standard Style React/JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-react
      Requires: react, react-hooks
    */
    ...(disable.includes("eslint-config-standard-react") || threshold > 512_396
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
              ...standardReact.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-standard-react" in override
                ? override["eslint-config-standard-react"]
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
      Internationalization (i18n)
      611,921 monthly downloads
      ESLint plugin for i18n
      https://github.com/edvardchen/eslint-plugin-i18next#readme
      Requires: i18next
    */
    ...(disable.includes("eslint-plugin-i18next") || threshold > 611_921
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              ...i18next.configs.recommended.rules,

              ...("eslint-plugin-i18next" in override
                ? override["eslint-plugin-i18next"]
                : {}),
            },
          },
        ]),

    /*
      You Don't Need Lodash
      620,803 monthly downloads
      Check methods you can use natively without lodash/underscore
      https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
      Requires: you-dont-need-lodash-underscore
    */
    ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
    threshold > 620_803
      ? []
      : [
          {
            files,
            rules: {
              ...youDontNeedLodash.configs.compatible.rules,

              ...("eslint-plugin-you-dont-need-lodash-underscore" in override
                ? override["eslint-plugin-you-dont-need-lodash-underscore"]
                : {}),
            },
          },
        ]),

    /*
      Regular Expressions
      645,304 monthly downloads
      ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
      https://github.com/ota-meshi/eslint-plugin-regexp#readme
      Requires: regexp
    */
    ...(disable.includes("eslint-plugin-regexp") || threshold > 645_304
      ? []
      : [
          {
            files,
            rules: {
              "unicorn/better-regex": 0,
              ...regexp.configs["flat/recommended"].rules,

              ...("eslint-plugin-regexp" in override
                ? override["eslint-plugin-regexp"]
                : {}),
            },
          },
        ]),

    /*
      Functional
      671,144 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional") || threshold > 671_144
      ? []
      : [
          {
            files,
            rules: {
              ...functional.configs["external-vanilla-recommended"].rules,
              ...functional.configs.recommended.rules,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-functional" in override
                ? override["eslint-plugin-functional"]
                : {}),
            },
          },
        ]),

    /*
      Functional - Stylistic
      671,144 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional/stylistic") ||
    threshold > 671_144
      ? []
      : [
          {
            files,
            rules: {
              ...functional.configs.stylistic.rules,

              ...("eslint-plugin-functional/stylistic" in override
                ? override["eslint-plugin-functional/stylistic"]
                : {}),
            },
          },
        ]),

    /*
      Functional - TS
      671,144 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-plugin-functional/ts") || threshold > 671_144
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...functional.configs["external-typescript-recommended"].rules,

              ...("eslint-plugin-functional/ts" in override
                ? override["eslint-plugin-functional/ts"]
                : {}),
            },
          },
        ]),

    /*
      Emotion CSS
      697,166 monthly downloads
      ESLint rules for emotion
      https://github.com/emotion-js/emotion/tree/main#readme
      Requires: @emotion
    */
    ...(disable.includes("@emotion/eslint-plugin") || threshold > 697_166
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
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
      Stylistic
      826,682 monthly downloads
      Stylistic rules for ESLint, works for both JavaScript and TypeScript.
      https://github.com/eslint-stylistic/eslint-stylistic#readme
      Requires: @stylistic
    */
    ...(disable.includes("@stylistic/eslint-plugin") || threshold > 826_682
      ? []
      : [
          {
            files,
            rules: {
              "@babel/object-curly-spacing": 0,
              "@babel/semi": 0,
              "@typescript-eslint/brace-style": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              "arrow-parens": 0,
              "block-spacing": 0,
              "brace-style": 0,
              "comma-dangle": 0,
              indent: 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              "prettier/prettier": 0,
              "quote-props": 0,
              semi: 0,
              "space-before-function-paren": 0,
              ...stylistic.configs["recommended-flat"].rules,

              ...("@stylistic/eslint-plugin" in override
                ? override["@stylistic/eslint-plugin"]
                : {}),
            },
          },
        ]),

    /*
      Sort Class Members
      831,470 monthly downloads
      ESLint rule for enforcing consistent ES6 class member order.
      https://github.com/bryanrsmith/eslint-plugin-sort-class-members
      Requires: sort-class-members
    */
    ...(disable.includes("eslint-plugin-sort-class-members") ||
    threshold > 831_470
      ? []
      : [
          {
            files,
            rules: {
              "perfectionist/sort-classes": 0,
              ...sortClassMembers.configs["flat/recommended"].rules,

              ...("eslint-plugin-sort-class-members" in override
                ? override["eslint-plugin-sort-class-members"]
                : {}),
            },
          },
        ]),

    /*
      Perfectionist
      851,073 monthly downloads
      ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
      https://eslint-plugin-perfectionist.azat.io
      Requires: perfectionist
    */
    ...(disable.includes("eslint-plugin-perfectionist") || threshold > 851_073
      ? []
      : [
          {
            files,
            rules: {
              "import/order": 0,
              "simple-import-sort/imports": 0,
              "sort-class-members/sort-class-members": 0,
              ...perfectionist.configs["recommended-natural"].rules,

              ...("eslint-plugin-perfectionist" in override
                ? override["eslint-plugin-perfectionist"]
                : {}),
            },
          },
        ]),

    /*
      No Unsanitized
      970,789 monthly downloads
      ESLint rule to disallow unsanitized code
      https://github.com/mozilla/eslint-plugin-no-unsanitized/
      Requires: no-unsanitized
    */
    ...(disable.includes("eslint-plugin-no-unsanitized") || threshold > 970_789
      ? []
      : [
          {
            files,
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
      1,115,089 monthly downloads
      ESLint shareable config for XO
      https://github.com/xojs/eslint-config-xo#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-xo") || threshold > 1_115_089
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              "indent-legacy": 0,
              "prettier/prettier": 0,
              ...xo.rules,
              "mocha/no-mocha-arrows": 0,
              ...("eslint-config-xo" in override
                ? override["eslint-config-xo"]
                : {}),
            },
          },
        ]),

    /*
      JSONC
      1,312,619 monthly downloads
      ESLint plugin for JSON, JSONC and JSON5 files.
      https://ota-meshi.github.io/eslint-plugin-jsonc/
      Requires: jsonc
    */
    ...(disable.includes("eslint-plugin-jsonc") || threshold > 1_312_619
      ? []
      : [
          {
            files: jsonFiles,
            rules: {
              ...jsonc.configs.base.overrides[0].rules,
              ...jsonc.configs["recommended-with-json"].rules,
              ...jsonc.configs["recommended-with-jsonc"].rules,
              ...jsonc.configs["recommended-with-json5"].rules,

              ...("eslint-plugin-jsonc" in override
                ? override["eslint-plugin-jsonc"]
                : {}),
            },
          },
        ]),

    /*
      Google
      1,622,163 monthly downloads
      ESLint shareable config for the Google style
      https://github.com/google/eslint-config-google#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-google") || threshold > 1_622_163
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/block-spacing": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/block-spacing": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "jsdoc/check-tag-names": 0,
              "prettier/prettier": 0,
              ...google.rules,

              ...("eslint-config-google" in override
                ? override["eslint-config-google"]
                : {}),
            },
          },
        ]),

    /*
      Compat
      1,834,759 monthly downloads
      Lint browser compatibility of API used
      https://github.com/amilajack/eslint-plugin-compat#readme
      Requires: compat
    */
    ...(disable.includes("eslint-plugin-compat") || threshold > 1_834_759
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
      Tailwind CSS
      1,928,564 monthly downloads
      Rules enforcing best practices while using Tailwind CSS
      https://github.com/francoismassart/eslint-plugin-tailwindcss
      Requires: tailwindcss
    */
    ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 1_928_564
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              ...tailwindcss.configs.recommended.rules,

              ...("eslint-plugin-tailwindcss" in override
                ? override["eslint-plugin-tailwindcss"]
                : {}),
            },
          },
        ]),

    /*
      TSDoc
      1,943,845 monthly downloads
      An ESLint plugin that validates TypeScript doc comments
      https://tsdoc.org/
      Requires: tsdoc
    */
    ...(disable.includes("eslint-plugin-tsdoc") || threshold > 1_943_845
      ? []
      : [
          {
            files: tsFiles,
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
      2,007,730 monthly downloads
      ESLint rules for formatting jest tests
      https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
      Requires: jest-formatting
    */
    ...(disable.includes("eslint-plugin-jest-formatting") ||
    threshold > 2_007_730
      ? []
      : [
          {
            files: testFiles,
            rules: {
              ...jestFormatting.configs.recommended.overrides[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "playwright/no-standalone-expect": 0,
              ...("eslint-plugin-jest-formatting" in override
                ? override["eslint-plugin-jest-formatting"]
                : {}),
            },
          },
        ]),

    /*
      Standard JSX
      2,258,973 monthly downloads
      JavaScript Standard Style JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-jsx
      Requires: react
    */
    ...(disable.includes("eslint-config-standard-jsx") || threshold > 2_258_973
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
              "prettier/prettier": 0,
              ...standardJsx.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-standard-jsx" in override
                ? override["eslint-config-standard-jsx"]
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
      React Native Plugin
      2,741,827 monthly downloads
      ESLint rules for @react-native/eslint-config / ESLint rules for @react-native-community/eslint-config
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme / https://github.com/facebook/react-native#readme
      Requires: @react-native
    */
    ...(disable.includes("@react-native/eslint-plugin") ||
    disable.includes("@react-native-community/eslint-plugin") ||
    threshold > 2_741_827
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            // Not added in any config
            rules: {
              "@react-native/platform-colors": 1,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@react-native/eslint-plugin" in override
                ? override["@react-native/eslint-plugin"]
                : {}),
              ...("@react-native-community/eslint-plugin" in override
                ? override["@react-native-community/eslint-plugin"]
                : {}),
            },
          },
        ]),

    /*
      Standard
      2,779,016 monthly downloads
      An ESLint Shareable Config for JavaScript Standard Style with TypeScript support / A TypeScript ESLint config that loves you
      https://github.com/mightyiam/eslint-config-standard-with-typescript#readme / https://github.com/mightyiam/eslint-config-love#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-config-standard-with-typescript") ||
    disable.includes("eslint-config-love") ||
    threshold > 2_779_016
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@babel/object-curly-spacing": 0,
              "@babel/semi": 0,
              "@stylistic/comma-dangle": 0,
              "@stylistic/space-before-function-paren": 0,
              "prettier/prettier": 0,
              ...standardTS.rules,

              ...("eslint-config-standard-with-typescript" in override
                ? override["eslint-config-standard-with-typescript"]
                : {}),
              ...("eslint-config-love" in override
                ? override["eslint-config-love"]
                : {}),
            },
          },
        ]),

    /*
      React Native Config - Flowtype
      3,023,635 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: ft-flow
    */
    ...(disable.includes("@react-native-community/eslint-config/flowtype") ||
    disable.includes("@react-native/eslint-config/flowtype") ||
    threshold > 3_023_635
      ? []
      : [
          {
            files: ["*.js"],
            rules: {
              ...reactNativeConfig.overrides[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@react-native-community/eslint-config/flowtype" in override
                ? override["@react-native-community/eslint-config/flowtype"]
                : {}),
              ...("@react-native/eslint-config/flowtype" in override
                ? override["@react-native/eslint-config/flowtype"]
                : {}),
            },
          },
        ]),

    /*
      React Native Config - TS
      3,023,635 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("@react-native-community/eslint-config/ts") ||
    disable.includes("@react-native/eslint-config/ts") ||
    threshold > 3_023_635
      ? []
      : [
          {
            files: tsxFiles,
            rules: {
              ...reactNativeConfig.overrides[1].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("@react-native-community/eslint-config/ts" in override
                ? override["@react-native-community/eslint-config/ts"]
                : {}),
              ...("@react-native/eslint-config/ts" in override
                ? override["@react-native/eslint-config/ts"]
                : {}),
            },
          },
        ]),

    /*
      Prefer Arrow
      3,452,485 monthly downloads
      Prefer arrow functions in most cases
      https://github.com/TristonJ/eslint-plugin-prefer-arrow#readme
      Requires: prefer-arrow
    */
    ...(disable.includes("eslint-plugin-prefer-arrow") || threshold > 3_452_485
      ? []
      : [
          {
            files,
            rules: {
              "prefer-arrow/prefer-arrow-functions": [
                1,
                {
                  classPropertiesAllowed: false,
                  disallowPrototype: true,
                  singleReturnOnly: false,
                },
              ],

              ...("eslint-plugin-prefer-arrow" in override
                ? override["eslint-plugin-prefer-arrow"]
                : {}),
            },
          },
        ]),

    /*
      Security
      3,462,463 monthly downloads
      Security rules for eslint
      https://github.com/eslint-community/eslint-plugin-security#readme
      Requires: security
    */
    ...(disable.includes("eslint-plugin-security") || threshold > 3_462_463
      ? []
      : [
          {
            files,
            rules: {
              ...security.configs.recommended.rules,

              ...("eslint-plugin-security" in override
                ? override["eslint-plugin-security"]
                : {}),
            },
          },
        ]),

    /*
      Playwright
      3,556,470 monthly downloads
      ESLint plugin for Playwright testing.
      https://github.com/playwright-community/eslint-plugin-playwright#readme
      Requires: playwright
    */
    ...(disable.includes("eslint-plugin-playwright") || threshold > 3_556_470
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: globals["shared-node-browser"],
            },
            rules: {
              ...playwright.configs.recommended.rules,

              ...("eslint-plugin-playwright" in override
                ? override["eslint-plugin-playwright"]
                : {}),
            },
          },
        ]),

    /*
      SonarJS
      3,952,537 monthly downloads
      SonarJS rules for ESLint
      https://github.com/SonarSource/eslint-plugin-sonarjs
      Requires: sonarjs
    */
    ...(disable.includes("eslint-plugin-sonarjs") || threshold > 3_952_537
      ? []
      : [
          {
            files,
            rules: {
              ...sonarjs.configs.recommended.rules,

              ...("eslint-plugin-sonarjs" in override
                ? override["eslint-plugin-sonarjs"]
                : {}),
            },
          },
        ]),

    /*
      Mocha
      3,955,342 monthly downloads
      Eslint rules for mocha.
      https://github.com/lo1tuma/eslint-plugin-mocha
      Requires: mocha
    */
    ...(disable.includes("eslint-plugin-mocha") || threshold > 3_955_342
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: globals.node,
            },
            rules: {
              ...mocha.configs.recommended.rules,
              "prefer-arrow/prefer-arrow-functions": 0,
              "prefer-arrow-callback": 0,
              ...("eslint-plugin-mocha" in override
                ? override["eslint-plugin-mocha"]
                : {}),
            },
          },
        ]),

    /*
      Jest Dom
      3,984,120 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
      https://github.com/testing-library/eslint-plugin-jest-dom#readme
      Requires: jest-dom
    */
    ...(disable.includes("eslint-plugin-jest-dom") || threshold > 3_984_120
      ? []
      : [
          {
            files: testFiles,
            rules: {
              ...jestDom.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "playwright/no-standalone-expect": 0,
              ...("eslint-plugin-jest-dom" in override
                ? override["eslint-plugin-jest-dom"]
                : {}),
            },
          },
        ]),

    /*
      No Only Tests
      4,057,867 monthly downloads
      ESLint rule for .only blocks in mocha tests
      https://github.com/levibuzolic/no-only-tests#readme
      Requires: no-only-tests
    */
    ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_057_867
      ? []
      : [
          {
            files: testFiles,
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "no-only-tests/no-only-tests": 2,
              "playwright/no-standalone-expect": 0,
              ...("eslint-plugin-no-only-tests" in override
                ? override["eslint-plugin-no-only-tests"]
                : {}),
            },
          },
        ]),

    /*
      React Native (Independent Plugin/Config)
      4,525,004 monthly downloads
      React Native specific linting rules for ESLint
      https://github.com/intellicode/eslint-plugin-react-native
      Requires: react-native
    */
    ...(disable.includes("eslint-plugin-react-native") || threshold > 4_525_004
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: reactNativeIndie.environments["react-native"].globals,
            },
            rules: {
              ...reactNativeIndie.configs.all.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-react-native" in override
                ? override["eslint-plugin-react-native"]
                : {}),
            },
          },
        ]),

    /*
      React Refresh
      5,174,471 monthly downloads
      Validate that your components can safely be updated with fast refresh
      https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
      Requires: react-refresh
    */
    ...(disable.includes("eslint-plugin-react-refresh") || threshold > 5_174_471
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              "react-refresh/only-export-components": 1,
              ...("eslint-plugin-react-refresh" in override
                ? override["eslint-plugin-react-refresh"]
                : {}),
            },
          },
        ]),

    /*
      React Native Config
      6,447,424 monthly downloads
      ESLint config for React Native / ESLint config for React Native / ESLint Environment for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/satya164/eslint-plugin-react-native-globals#readme
      Requires: eslint-comments, react, react-hooks, react-native, jest
    */
    ...(disable.includes("@react-native-community/eslint-config") ||
    disable.includes("@react-native/eslint-config") ||
    disable.includes("eslint-plugin-react-native-globals") ||
    threshold > 6_447_424
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: reactNativeConfig.globals,
            },
            rules: {
              "@typescript-eslint/comma-dangle": 0,
              ...reactNativeConfig.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              // Deprecated rule format needs to be overwritten
              quotes: [
                0,
                "single",
                { allowTemplateLiterals: true, avoidEscape: true },
              ],
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

    /*
      JSDoc
      7,558,506 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc") || threshold > 7_558_506
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "valid-jsdoc": 0,
              ...jsdoc.configs["flat/recommended"].rules,

              ...("eslint-plugin-jsdoc" in override
                ? override["eslint-plugin-jsdoc"]
                : {}),
            },
          },
        ]),

    /*
      JSDoc - TS
      7,558,506 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc/ts") || threshold > 7_558_506
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...jsdoc.configs["flat/recommended-typescript"].rules,
              "valid-jsdoc": 0,
              ...("eslint-plugin-jsdoc/ts" in override
                ? override["eslint-plugin-jsdoc/ts"]
                : {}),
            },
            settings: {
              jsdoc: {
                mode: "typescript",
              },
            },
          },
        ]),

    /*
      Simple Import Sort
      8,059,723 monthly downloads
      Easy autofixable import sorting
      https://github.com/lydell/eslint-plugin-simple-import-sort#readme
      Requires: simple-import-sort
    */
    ...(disable.includes("eslint-plugin-simple-import-sort") ||
    threshold > 8_059_723
      ? []
      : [
          {
            files,
            rules: {
              "import/order": 0,
              "perfectionist/sort-imports": 0,
              "perfectionist/sort-named-imports": 0,
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
      8,288,380 monthly downloads
      Airbnb's ESLint config with TypeScript support
      https://github.com/iamturns/eslint-config-airbnb-typescript
      Requires: @typescript-eslint, import
    */
    ...(disable.includes("eslint-config-airbnb-typescript") ||
    threshold > 8_288_380
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@babel/object-curly-spacing": 0,
              "@stylistic/semi": 0,
              "prettier/prettier": 0,
              ...compat.extends("airbnb-typescript")[0].rules,

              ...("eslint-config-airbnb-typescript" in override
                ? override["eslint-config-airbnb-typescript"]
                : {}),
            },
          },
        ]),

    /*
      Comments
      8,764,218 monthly downloads
      Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
      https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
      Requires: eslint-comments, @eslint-community/eslint-comments
    */
    ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
    disable.includes("eslint-plugin-eslint-comments") ||
    threshold > 8_764_218
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
      No Unused Imports
      8,836,705 monthly downloads
      Report and remove unused es6 modules
      https://github.com/sweepline/eslint-plugin-unused-imports
      Requires: unused-imports
    */
    ...(disable.includes("eslint-plugin-unused-imports") ||
    threshold > 8_836_705
      ? []
      : [
          {
            files,
            rules: {
              "@typescript-eslint/no-unused-vars": 0,
              // These rules all come "recommended"
              "no-unused-vars": 0,
              "unused-imports/no-unused-imports": 2,
              "unused-imports/no-unused-vars": [
                1,
                {
                  args: "after-used",
                  argsIgnorePattern: "^_",
                  vars: "all",
                  varsIgnorePattern: "^_",
                },
              ],

              ...("eslint-plugin-unused-imports" in override
                ? override["eslint-plugin-unused-imports"]
                : {}),
            },
          },
        ]),

    /*
      Unicorn
      9,192,294 monthly downloads
      More than 100 powerful ESLint rules
      https://github.com/sindresorhus/eslint-plugin-unicorn#readme
      Requires: unicorn
    */
    ...(disable.includes("eslint-plugin-unicorn") || threshold > 9_192_294
      ? []
      : [
          {
            files,
            rules: {
              "@typescript-eslint/no-extra-parens": 0,
              "prettier/prettier": 0,
              "regexp/strict": 0,
              ...unicorn.configs.recommended.rules,
              "functional/no-loop-statements": 0,
              "functional/prefer-immutable-types": 0,
              ...("eslint-plugin-unicorn" in override
                ? override["eslint-plugin-unicorn"]
                : {}),
            },
          },
        ]),

    /*
      Storybook
      9,349,388 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook, react-hooks, import
    */
    ...(disable.includes("eslint-plugin-storybook") || threshold > 9_349_388
      ? []
      : [
          {
            files: storybook.configs.recommended.overrides[0].files,
            rules: {
              ...storybook.configs.recommended.overrides[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-storybook" in override
                ? override["eslint-plugin-storybook"]
                : {}),
            },
          },
        ]),

    /*
      Storybook - Main
      9,349,388 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook
    */
    ...(disable.includes("eslint-plugin-storybook/main") ||
    threshold > 9_349_388
      ? []
      : [
          {
            files: storybook.configs.recommended.overrides[1].files,
            rules: {
              ...storybook.configs.recommended.overrides[1].rules,

              ...("eslint-plugin-storybook/main" in override
                ? override["eslint-plugin-storybook/main"]
                : {}),
            },
          },
        ]),

    /*
      Cypress
      10,959,842 monthly downloads
      An ESLint plugin for projects using Cypress
      https://github.com/cypress-io/eslint-plugin-cypress#readme
      Requires: cypress
    */
    ...(disable.includes("eslint-plugin-cypress") || threshold > 10_959_842
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: {
                ...cypress.environments.globals.globals,
              },
            },
            rules: {
              ...cypress.configs.recommended.rules,

              ...("eslint-plugin-cypress" in override
                ? override["eslint-plugin-cypress"]
                : {}),
            },
          },
        ]),

    /*
      Standard
      11,908,307 monthly downloads
      JavaScript Standard Style - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard
      Requires: import, n, promise
    */
    ...(disable.includes("eslint-config-standard") || threshold > 11_908_307
      ? []
      : [
          {
            files,
            languageOptions: {
              globals: {
                document: "readonly",
                navigator: "readonly",
                window: "readonly",
              },
            },
            rules: {
              "@babel/object-curly-spacing": 0,
              "@babel/semi": 0,
              "@stylistic/comma-dangle": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/space-before-function-paren": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              "prettier/prettier": 0,
              ...standard.rules,

              ...("eslint-config-standard" in override
                ? override["eslint-config-standard"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb
      14,210,879 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: jsx-a11y, import, react, react-hooks
    */
    ...(disable.includes("eslint-config-airbnb") || threshold > 14_210_879
      ? []
      : [
          {
            files,
            rules: {
              "prettier/prettier": 0,
              ...compat.extends("airbnb")[0].rules,
              ...compat.extends("airbnb/hooks")[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-airbnb" in override
                ? override["eslint-config-airbnb"]
                : {}),
            },
          },
        ]),

    /*
      Create React App
      16,785,417 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: react, react-hooks, import, jsx-a11y, flowtype
    */
    ...(disable.includes("eslint-config-react-app") || threshold > 16_785_417
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
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
              },
            },
            rules: {
              "array-callback-return": 1,
              "default-case": [1, { commentPattern: "^no default$" }],
              "dot-location": [1, "property"],
              eqeqeq: [1, "smart"],
              "flowtype/define-flow-type": 1,
              "flowtype/require-valid-file-annotation": 1,
              "flowtype/use-flow-type": 1,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "getter-return": 1,
              "import/first": 2,
              "import/no-amd": 2,
              "import/no-anonymous-default-export": 1,
              "import/no-webpack-loader-syntax": 2,
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
              "prefer-arrow/prefer-arrow-functions": 0,
              "react/forbid-foreign-prop-types": [
                1,
                { allowInPropTypes: true },
              ],
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
              "react/no-direct-mutation-state": 1,
              "react/no-is-mounted": 1,
              "react/no-typos": 2,
              "react/require-render-return": 2,
              "react/style-prop-object": 1,
              "react-hooks/exhaustive-deps": 1,
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
      Create React App - TS
      16,785,417 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-config-react-app/ts") || threshold > 16_785_417
      ? []
      : [
          {
            files: tsxFiles,
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
              },
            },
            rules: {
              "@typescript-eslint/consistent-type-assertions": 1,
              "@typescript-eslint/no-array-constructor": 1,
              "@typescript-eslint/no-redeclare": 1,
              "@typescript-eslint/no-unused-expressions": [
                2,
                {
                  allowShortCircuit: true,
                  allowTaggedTemplates: true,
                  allowTernary: true,
                },
              ],
              "@typescript-eslint/no-unused-vars": [
                1,
                {
                  args: "none",
                  ignoreRestSiblings: true,
                },
              ],
              "@typescript-eslint/no-use-before-define": [
                1,
                {
                  classes: false,
                  functions: false,
                  typedefs: false,
                  variables: false,
                },
              ],
              "@typescript-eslint/no-useless-constructor": 1,

              "default-case": 0,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "no-array-constructor": 0,
              "no-dupe-class-members": 0,
              "no-redeclare": 0,
              "no-undef": 0,
              "no-unused-expressions": 0,
              "no-unused-vars": 0,
              "no-use-before-define": 0,
              "no-useless-constructor": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-react-app/ts" in override
                ? override["eslint-config-react-app/ts"]
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
      Create React App - Jest
      16,785,417 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: jest, testing-library
    */
    ...(disable.includes("eslint-config-react-app/jest") ||
    threshold > 16_785_417
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: {
                "jest/globals": true,
              },
            },
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              // https://github.com/jest-community/eslint-plugin-jest
              "jest/no-conditional-expect": 2,
              "jest/no-identical-title": 2,
              "jest/no-interpolation-in-snapshots": 2,

              "jest/no-jasmine-globals": 2,
              "jest/no-mocks-import": 2,
              "jest/valid-describe-callback": 2,
              "jest/valid-expect": 2,
              "jest/valid-expect-in-promise": 2,
              "jest/valid-title": 1,
              "playwright/no-standalone-expect": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              // https://github.com/testing-library/eslint-plugin-testing-library
              "testing-library/await-async-queries": 2,
              "testing-library/await-async-utils": 2,
              "testing-library/no-await-sync-queries": 2,
              "testing-library/no-container": 2,
              "testing-library/no-debugging-utils": 2,
              "testing-library/no-dom-import": [2, "react"],
              "testing-library/no-node-access": 2,
              "testing-library/no-promise-in-fire-event": 2,
              "testing-library/no-render-in-lifecycle": 2,
              "testing-library/no-unnecessary-act": 2,
              "testing-library/no-wait-for-multiple-assertions": 2,
              "testing-library/no-wait-for-side-effects": 2,
              "testing-library/no-wait-for-snapshot": 2,
              "testing-library/prefer-find-by": 2,
              "testing-library/prefer-presence-queries": 2,
              "testing-library/prefer-query-by-disappearance": 2,
              "testing-library/prefer-screen-queries": 2,
              "testing-library/render-result-naming-convention": 2,
              ...("eslint-config-react-app/jest" in override
                ? override["eslint-config-react-app/jest"]
                : {}),
            },
          },
        ]),

    /*
      Promises
      17,774,611 monthly downloads
      Enforce best practices for JavaScript promises
      https://github.com/eslint-community/eslint-plugin-promise
      Requires: promise
    */
    ...(disable.includes("eslint-plugin-promise") || threshold > 17_774_611
      ? []
      : [
          {
            files,
            rules: {
              ...promise.configs.recommended.rules,
              "functional/immutable-data": 0,
              "functional/no-let": 0,
              "functional/no-throw-statements": 0,
              ...("eslint-plugin-promise" in override
                ? override["eslint-plugin-promise"]
                : {}),
            },
          },
        ]),

    /*
      Testing Library
      20,737,610 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
      https://github.com/testing-library/eslint-plugin-testing-library
      Requires: testing-library
    */
    ...(disable.includes("eslint-plugin-testing-library") ||
    threshold > 20_737_610
      ? []
      : [
          {
            files: testFiles,
            rules: {
              ...testingLibrary.configs.react.rules,
              "functional/functional-parameters": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "playwright/no-standalone-expect": 0,
              ...("eslint-plugin-testing-library" in override
                ? override["eslint-plugin-testing-library"]
                : {}),
            },
          },
        ]),

    /*
      ES-X
      23,177,802 monthly downloads
      ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
      https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
      Requires: es, es-x
    */
    ...(disable.includes("eslint-plugin-es-x") ||
    disable.includes("eslint-plugin-es") ||
    threshold > 23_177_802
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
      23,537,152 monthly downloads
      Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
      https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
      Requires: node, n
    */
    ...(disable.includes("eslint-plugin-n") ||
    disable.includes("eslint-plugin-node") ||
    threshold > 23_537_152
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
            // There are no recommended ways to use "node", as the "n" rule obsoletes
            // it, but "node" is still used by the Shopify config.
            rules: {
              ...nNode.configs["flat/recommended-module"].rules,
              "functional/no-conditional-statements": 0,
              "functional/no-throw-statements": 0,
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
      AirBnb Base
      26,053,293 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: import
    */
    ...(disable.includes("eslint-config-airbnb-base") || threshold > 26_053_293
      ? []
      : [
          {
            files,
            rules: {
              "prettier/prettier": 0,
              ...compat.extends("airbnb-base")[0].rules,

              ...("eslint-config-airbnb-base" in override
                ? override["eslint-config-airbnb-base"]
                : {}),
            },
          },
        ]),

    /*
      NextJS
      34,977,943 monthly downloads
      ESLint plugin for Next.js. / ESLint configuration used by Next.js.
      https://github.com/vercel/next.js#readme / https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config
      Requires: @next/next
    */
    ...(disable.includes("@next/eslint-plugin-next") ||
    disable.includes("eslint-config-next") ||
    threshold > 34_977_943
      ? []
      : [
          {
            files,
            rules: {
              ...nextjs.configs.recommended.rules,

              ...("@next/eslint-plugin-next" in override
                ? override["@next/eslint-plugin-next"]
                : {}),
              ...("eslint-config-next" in override
                ? override["eslint-config-next"]
                : {}),
            },
          },
        ]),

    /*
      Jest
      40,279,638 monthly downloads
      ESLint rules for Jest
      https://github.com/jest-community/eslint-plugin-jest#readme
      Requires: jest
    */
    ...(disable.includes("eslint-plugin-jest") || threshold > 40_279_638
      ? []
      : [
          {
            files: testFiles,
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
              "functional/functional-parameters": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "playwright/no-standalone-expect": 0,
              ...("eslint-plugin-jest" in override
                ? override["eslint-plugin-jest"]
                : {}),
            },
          },
        ]),

    /*
      JSX Accessibility (JSX A11y)
      49,965,139 monthly downloads
      Static AST checker for accessibility rules on JSX elements.
      https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
      Requires: jsx-a11y
    */
    ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 49_965_139
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
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
      57,200,875 monthly downloads
      ESLint rules for React Hooks
      https://reactjs.org/
      Requires: react-hooks
    */
    ...(disable.includes("eslint-plugin-react-hooks") || threshold > 57_200_875
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              ...reactHooks.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-react-hooks" in override
                ? override["eslint-plugin-react-hooks"]
                : {}),
            },
          },
        ]),

    /*
      React
      70,993,829 monthly downloads
      React specific linting rules for ESLint
      https://github.com/jsx-eslint/eslint-plugin-react
      Requires: react
    */
    ...(disable.includes("eslint-plugin-react") || threshold > 70_993_829
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
              ...react.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
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
      87,117,559 monthly downloads
      ESLint JavaScript language implementation
      https://eslint.org
      Requires: (None)
    */
    ...(disable.includes("@eslint/js") || threshold > 87_117_559
      ? []
      : [
          {
            files,
            rules: {
              ...eslint.configs.recommended.rules,
              "@next/next/no-html-link-for-pages": 0,
              ...("@eslint/js" in override ? override["@eslint/js"] : {}),
            },
          },
        ]),

    /*
      TypeScript
      108,794,830 monthly downloads
      Tooling which enables you to use TypeScript with ESLint / TypeScript plugin for ESLint
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/eslint-plugin
      Requires: @typescript-eslint
    */
    ...(disable.includes("typescript-eslint") ||
    disable.includes("@typescript-eslint/eslint-plugin") ||
    threshold > 108_794_830
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...tseslint.configs.recommendedTypeChecked[1].rules,
              ...tseslint.configs.recommendedTypeChecked[2].rules,
              "@next/next/no-html-link-for-pages": 0,
              "functional/no-conditional-statements": 0,
              ...("typescript-eslint" in override
                ? override["typescript-eslint"]
                : {}),
              ...("@typescript-eslint/eslint-plugin" in override
                ? override["@typescript-eslint/eslint-plugin"]
                : {}),
            },
          },
        ]),

    /*
      Import
      118,356,075 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import") ||
    disable.includes("eslint-import-resolver-typescript") ||
    threshold > 118_356_075
      ? []
      : [
          {
            files,
            rules: {
              ...importPlugin.configs.recommended.rules,
              "n/no-missing-import": 0,
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
                "@typescript-eslint/parser": [
                  ".ts",
                  ".tsx",
                  ".js",
                  ".jsx",
                  ".mjs",
                  ".cjs",
                  ".mts",
                  ".cts",
                ],
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
      Import - ts
      118,356,075 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import/ts") ||
    disable.includes("eslint-import-resolver-typescript/ts") ||
    threshold > 118_356_075
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...importPlugin.configs.typescript.rules,

              ...("eslint-plugin-import/ts" in override
                ? override["eslint-plugin-import/ts"]
                : {}),
              ...("eslint-import-resolver-typescript/ts" in override
                ? override["eslint-import-resolver-typescript/ts"]
                : {}),
            },
          },
        ]),

    /*
      Prettier
      131,701,898 monthly downloads
      Runs prettier as an eslint rule / Turns off all rules that are unnecessary or might conflict with Prettier.
      https://github.com/prettier/eslint-plugin-prettier#readme / https://github.com/prettier/eslint-config-prettier#readme
      Requires: prettier, @typescript-eslint, @babel, unicorn, flowtype, react
    */
    ...(disable.includes("eslint-plugin-prettier") ||
    disable.includes("eslint-config-prettier") ||
    threshold > 131_701_898
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              ...prettierConfig.rules,
              "@next/next/no-html-link-for-pages": 0,
              "prettier/prettier": 2,
              ...("eslint-plugin-prettier" in override
                ? override["eslint-plugin-prettier"]
                : {}),
              ...("eslint-config-prettier" in override
                ? override["eslint-config-prettier"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen;
// EOF
