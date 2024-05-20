// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-config.ts
  Generated on 5/20/2024
*/

/* eslint-disable import/extensions */
import babelPlugin from "@babel/eslint-plugin";
import { rules as emotion } from "@emotion/eslint-plugin";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import {
  flatConfigs as graphqlConfigs,
  parseForESLint as graphQLparseForESLint,
  processors as graphqlProcessors,
  rules as graphQLRules,
} from "@graphql-eslint/eslint-plugin";
import msdl from "@microsoft/eslint-plugin-sdl";
import nextjs from "@next/eslint-plugin-next";
import rnPlugin from "@react-native/eslint-plugin";
import reactNativeConfig from "@react-native-community/eslint-config";
import shopify from "@shopify/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import restrictedGlobals from "confusing-browser-globals";
import airbnbReact from "eslint-config-airbnb/rules/react";
import airbnbReactA11y from "eslint-config-airbnb/rules/react-a11y";
import airbnbReactHooks from "eslint-config-airbnb/rules/react-hooks";
import airbnbBaseBestPractices from "eslint-config-airbnb-base/rules/best-practices";
import airbnbBaseErrors from "eslint-config-airbnb-base/rules/errors";
import airbnbBaseES6 from "eslint-config-airbnb-base/rules/es6";
import airbnbBaseImports from "eslint-config-airbnb-base/rules/imports";
import airbnbBaseNode from "eslint-config-airbnb-base/rules/node";
import airbnbBaseStrict from "eslint-config-airbnb-base/rules/strict";
import airbnbBaseStyle from "eslint-config-airbnb-base/rules/style";
import airbnbBaseVariables from "eslint-config-airbnb-base/rules/variables";
import airbnbTypescript from "eslint-config-airbnb-typescript/lib/shared.js";
import google from "eslint-config-google";
import standardTS from "eslint-config-love";
import prettierConfig from "eslint-config-prettier";
import standard from "eslint-config-standard";
import standardJsx from "eslint-config-standard-jsx";
import standardReact from "eslint-config-standard-react";
import xo from "eslint-config-xo";
import { defineFlatConfig } from "eslint-define-config";
import * as eslintMdx from "eslint-mdx";
import ava from "eslint-plugin-ava";
import chaiFriendly from "eslint-plugin-chai-friendly";
import checkFile from "eslint-plugin-check-file";
import compat from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
import cypress from "eslint-plugin-cypress";
import es from "eslint-plugin-es";
import esX from "eslint-plugin-es-x";
import commentsOld from "eslint-plugin-eslint-comments";
import flowtype from "eslint-plugin-flowtype";
import ftFlow from "eslint-plugin-ft-flow";
import functional from "eslint-plugin-functional";
import header from "eslint-plugin-header";
import html from "eslint-plugin-html";
import i18next from "eslint-plugin-i18next";
import importPlugin from "eslint-plugin-import";
import jasmine from "eslint-plugin-jasmine";
import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";
import jestFormatting from "eslint-plugin-jest-formatting";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import markdown from "eslint-plugin-markdown";
import * as mdx from "eslint-plugin-mdx";
import mocha from "eslint-plugin-mocha";
import nNode from "eslint-plugin-n";
import noOnlyTest from "eslint-plugin-no-only-tests";
import unsanitized from "eslint-plugin-no-unsanitized";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";
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
import preferFC from "eslint-plugin-react-prefer-function-component";
import reactRefresh from "eslint-plugin-react-refresh";
import regexp from "eslint-plugin-regexp";
import rxjs from "eslint-plugin-rxjs";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import tsdoc from "eslint-plugin-tsdoc";
import sortKeys from "eslint-plugin-typescript-sort-keys";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import yml from "eslint-plugin-yml";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import * as espree from "espree";
import globals from "globals";
import jsoncEslintParser from "jsonc-eslint-parser";
import tseslint from "typescript-eslint";
import ymlEslintParser from "yaml-eslint-parser";
/* eslint-enable import/extensions */

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
      1,046,442 monthly downloads
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
      2,025,605 monthly downloads
      GraphQL plugin for ESLint
      https://github.com/B2o5T/graphql-eslint#readme
    */
    {
      files: graphQLFiles,
      languageOptions: {
        parser: graphQLparseForESLint,
      },
    },
    /*
      YML
      2,743,507 monthly downloads
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
      6,187,301 monthly downloads
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
      123,382,973 monthly downloads
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
      148,728,936 monthly downloads
      An Esprima-compatible JavaScript parser built on Acorn
      https://github.com/eslint/espree
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
        "@babel": babelPlugin,
        "@emotion": { rules: emotion },
        "@eslint-community/eslint-comments": comments,
        "@graphql-eslint": { rules: graphQLRules },
        "@microsoft/sdl": msdl,
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
        ava,
        "chai-friendly": chaiFriendly,
        "check-file": checkFile,
        compat,
        "css-modules": cssModules,
        cypress,
        es,
        "es-x": esX,
        "eslint-comments": commentsOld,
        flowtype,
        "ft-flow": ftFlow,
        functional,
        header,
        html,
        i18next,
        import: importPlugin,
        jasmine,
        jest,
        "jest-dom": jestDom,
        "jest-formatting": jestFormatting,
        jsdoc,
        jsonc,
        "jsx-a11y": jsxA11y,
        markdown,
        mdx,
        mocha,
        n: nNode,
        "no-only-tests": noOnlyTest,
        "no-unsanitized": unsanitized,
        "no-use-extend-native": noUseExtendNative,
        node,
        perfectionist,
        playwright,
        "prefer-arrow": preferArrow,
        prettier,
        "prettier-package-json": prettier,
        "prettier-tailwind": prettier,
        promise,
        react,
        "react-hooks": reactHooks,
        "react-native": reactNativeIndie,
        "react-perf": reactPerf,
        "react-prefer-function-component": preferFC,
        "react-refresh": reactRefresh,
        regexp,
        rxjs,
        security,
        "simple-import-sort": importSort,
        sonarjs,
        "sort-class-members": sortClassMembers,
        storybook,
        tailwindcss,
        "testing-library": testingLibrary,
        tsdoc,
        "typescript-sort-keys": sortKeys,
        unicorn,
        "unused-imports": unusedImports,
        yml,
        "you-dont-need-lodash-underscore": youDontNeedLodash,
      },
    },
    /* CONFIGS */
    /*
      React Prefer Function Component
      436,799 monthly downloads
      ESLint plugin that prevents the use of JSX class components
      https://github.com/tatethurston/eslint-plugin-react-prefer-function-component#readme
      Requires: react-prefer-function-component
    */
    ...(disable.includes("eslint-plugin-react-prefer-function-component") ||
    threshold > 436_799
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              ...preferFC.configs.recommended.rules,

              ...("eslint-plugin-react-prefer-function-component" in override
                ? override["eslint-plugin-react-prefer-function-component"]
                : {}),
            },
          },
        ]),

    /*
      React Performance
      485,424 monthly downloads
      Performance-minded React linting rules for ESLint
      https://github.com/cvazac/eslint-plugin-react-perf#readme
      Requires: react-perf
    */
    ...(disable.includes("eslint-plugin-react-perf") || threshold > 485_424
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
      Standard React
      489,721 monthly downloads
      JavaScript Standard Style React/JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-react
      Requires: react, react-hooks
    */
    ...(disable.includes("eslint-config-standard-react") || threshold > 489_721
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
      CSS Modules
      511,375 monthly downloads
      Checks that you are using the existent css/scss/less classes, no more no less
      undefined
      Requires: css-modules
    */
    ...(disable.includes("eslint-plugin-css-modules") || threshold > 511_375
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
      Shopify - Core
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, eslint-comments, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/core") || threshold > 532_799
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
              "prettier-tailwind/prettier": 0,
              ...shopify.configs.core.rules,

              ...("@shopify/eslint-plugin/core" in override
                ? override["@shopify/eslint-plugin/core"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - ESNext
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @babel, promise, sort-class-members, import
    */
    ...(disable.includes("@shopify/eslint-plugin/esnext") || threshold > 532_799
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/semi": 0,
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
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: jest, jest-formatting, @shopify, @shopify/jest
    */
    ...(disable.includes("@shopify/eslint-plugin/jest") || threshold > 532_799
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
              "jest/no-if": 0,

              ...("@shopify/eslint-plugin/jest" in override
                ? override["@shopify/eslint-plugin/jest"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Node
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, node
    */
    ...(disable.includes("@shopify/eslint-plugin/node") || threshold > 532_799
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
      Shopify - Polaris
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/polaris") ||
    threshold > 532_799
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
      Shopify - Prettier
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @babel, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier") ||
    threshold > 532_799
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-indent": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@stylistic/yield-star-spacing": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              "comma-dangle": 0,
              "generator-star-spacing": 0,
              indent: 0,
              "indent-legacy": 0,
              "jsx-quotes": 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              quotes: 0,
              "react/jsx-indent": 0,
              semi: 0,
              "space-before-function-paren": 0,
              "unicorn/no-nested-ternary": 0,
              "yield-star-spacing": 0,
              ...shopify.configs.prettier.rules,

              ...("@shopify/eslint-plugin/prettier" in override
                ? override["@shopify/eslint-plugin/prettier"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - Prettier-TS
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @typescript-eslint
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier-ts") ||
    threshold > 532_799
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
      Shopify - React
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react, jsx-a11y, react-hooks, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react") || threshold > 532_799
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
              "prettier-tailwind/prettier": 0,
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
      Shopify - React-Test
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react-test") ||
    threshold > 532_799
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
      Shopify - React-TS
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react
    */
    ...(disable.includes("@shopify/eslint-plugin/react-ts") ||
    threshold > 532_799
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
      Shopify - TS
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts") || threshold > 532_799
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
              "prettier/prettier": 0,
              "prettier-tailwind/prettier": 0,
              "unicorn/no-nested-ternary": 0,
              ...shopify.configs.typescript.overrides[0].rules,

              ...("@shopify/eslint-plugin/ts" in override
                ? override["@shopify/eslint-plugin/ts"]
                : {}),
            },
          },
        ]),

    /*
      Shopify - TS-TypeCheck
      532,799 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts-typecheck") ||
    threshold > 532_799
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
      Functional
      541,521 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional") || threshold > 541_521
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...functional.configs["external-vanilla-recommended"].rules,
              ...functional.configs.recommended.rules,
              ...functional.configs["disable-type-checked"].rules,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-functional" in override
                ? override["eslint-plugin-functional"]
                : {}),
            },
          },
        ]),

    /*
      Functional - Stylistic
      541,521 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional/stylistic") ||
    threshold > 541_521
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
      541,521 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: @typescript-eslint, functional
    */
    ...(disable.includes("eslint-plugin-functional/ts") || threshold > 541_521
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...functional.configs.recommended.rules,
              ...functional.configs["external-typescript-recommended"].rules,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-plugin-functional/ts" in override
                ? override["eslint-plugin-functional/ts"]
                : {}),
            },
          },
        ]),

    /*
      Ava
      577,634 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: ava
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 577_634
      ? []
      : [
          {
            files: testFiles,
            rules: {
              ...ava.configs.recommended.rules,

              ...("eslint-plugin-ava" in override
                ? override["eslint-plugin-ava"]
                : {}),
            },
          },
        ]),

    /*
      No Use Extend Native
      577,634 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: no-use-extend-native
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 577_634
      ? []
      : [
          {
            files,
            rules: {
              ...noUseExtendNative.configs.recommended.rules,

              ...("eslint-plugin-ava" in override
                ? override["eslint-plugin-ava"]
                : {}),
            },
          },
        ]),

    /*
      You Don't Need Lodash
      588,524 monthly downloads
      Check methods you can use natively without lodash/underscore
      https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
      Requires: you-dont-need-lodash-underscore
    */
    ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
    threshold > 588_524
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
      Internationalization (i18n)
      628,000 monthly downloads
      ESLint plugin for i18n
      https://github.com/edvardchen/eslint-plugin-i18next#readme
      Requires: i18next
    */
    ...(disable.includes("eslint-plugin-i18next") || threshold > 628_000
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
      Regular Expressions
      649,782 monthly downloads
      ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
      https://github.com/ota-meshi/eslint-plugin-regexp#readme
      Requires: regexp
    */
    ...(disable.includes("eslint-plugin-regexp") || threshold > 649_782
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
      Emotion CSS
      740,245 monthly downloads
      ESLint rules for emotion
      https://github.com/emotion-js/emotion/tree/main#readme
      Requires: @emotion
    */
    ...(disable.includes("@emotion/eslint-plugin") || threshold > 740_245
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
      Jasmine
      798,861 monthly downloads
      ESLint rules for Jasmine
      https://github.com/tlvince/eslint-plugin-jasmine
      Requires: jasmine
    */
    ...(disable.includes("eslint-plugin-jasmine") || threshold > 798_861
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: {
                jasmine: true,
              },
            },
            rules: {
              ...jasmine.configs.recommended.rules,

              ...("eslint-plugin-jasmine" in override
                ? override["eslint-plugin-jasmine"]
                : {}),
            },
          },
        ]),

    /*
      RxJS
      839,494 monthly downloads
      ESLint rules for RxJS
      https://github.com/cartant/eslint-plugin-rxjs
      Requires: rxjs
    */
    ...(disable.includes("eslint-plugin-rxjs") || threshold > 839_494
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...rxjs.configs.recommended.rules,

              ...("eslint-plugin-rxjs" in override
                ? override["eslint-plugin-rxjs"]
                : {}),
            },
          },
        ]),

    /*
      Sort Class Members
      928,117 monthly downloads
      ESLint rule for enforcing consistent ES6 class member order.
      https://github.com/bryanrsmith/eslint-plugin-sort-class-members
      Requires: sort-class-members
    */
    ...(disable.includes("eslint-plugin-sort-class-members") ||
    threshold > 928_117
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
      931,547 monthly downloads
      ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
      https://eslint-plugin-perfectionist.azat.io
      Requires: perfectionist
    */
    ...(disable.includes("eslint-plugin-perfectionist") || threshold > 931_547
      ? []
      : [
          {
            files,
            rules: {
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
      Stylistic
      1,039,669 monthly downloads
      Stylistic rules for ESLint, works for both JavaScript and TypeScript.
      https://github.com/eslint-stylistic/eslint-stylistic#readme
      Requires: @stylistic
    */
    ...(disable.includes("@stylistic/eslint-plugin") || threshold > 1_039_669
      ? []
      : [
          {
            files,
            languageOptions: {
              parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
              },
            },
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
              "prettier-tailwind/prettier": 0,
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
      MDX - Code-Blocks
      1,042,366 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_042_366
      ? []
      : [
          {
            files: codeBlocks,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  impliedStrict: true,
                },
              },
            },
            rules: {
              // MDX "recommended" is composed of Overrides, Base, and CodeBlocks but with unneeded conditional logic
              // CodeBlocks:
              ...mdx.configs.codeBlocks.rules,

              ...("eslint-plugin-mdx/code-blocks" in override
                ? override["eslint-plugin-mdx/code-blocks"]
                : {}),
            },
          },
        ]),

    /*
      XO
      1,112,161 monthly downloads
      ESLint shareable config for XO
      https://github.com/xojs/eslint-config-xo#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-xo") || threshold > 1_112_161
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
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
      Chai Friendly
      1,134,449 monthly downloads
      This plugin makes 'no-unused-expressions' rule friendly towards chai expect statements.
      https://github.com/ihordiachenko/eslint-plugin-chai-friendly#readme
      Requires: chai-friendly
    */
    ...(disable.includes("eslint-plugin-chai-friendly") || threshold > 1_134_449
      ? []
      : [
          {
            files: testFiles,
            rules: {
              ...chaiFriendly.configs.recommended.rules,

              ...("eslint-plugin-chai-friendly" in override
                ? override["eslint-plugin-chai-friendly"]
                : {}),
            },
          },
        ]),

    /*
      No Unsanitized
      1,136,233 monthly downloads
      ESLint rule to disallow unsanitized code
      https://github.com/mozilla/eslint-plugin-no-unsanitized/
      Requires: no-unsanitized
    */
    ...(disable.includes("eslint-plugin-no-unsanitized") ||
    threshold > 1_136_233
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
      Typescript Sort Keys
      1,315,974 monthly downloads
      Sort interface and string enum keys
      https://github.com/infctr/eslint-plugin-typescript-sort-keys#readme
      Requires: typescript-sort-keys
    */
    ...(disable.includes("eslint-plugin-typescript-sort-keys") ||
    threshold > 1_315_974
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...sortKeys.configs.recommended.rules,

              ...("eslint-plugin-typescript-sort-keys" in override
                ? override["eslint-plugin-typescript-sort-keys"]
                : {}),
            },
          },
        ]),

    /*
      Microsoft SDL
      1,339,858 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl") ||
    threshold > 1_339_858
      ? []
      : [
          {
            files,
            rules: {
              // "Recommended" is just a smattering of everything: If Angular ever becomes a thing then we should add the angular modules here.
              ...msdl.configs.common.rules,

              ...("@microsoft/eslint-plugin-sdl" in override
                ? override["@microsoft/eslint-plugin-sdl"]
                : {}),
            },
          },
        ]),

    /*
      Microsoft SDL - Node
      1,339,858 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: node, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/node") ||
    threshold > 1_339_858
      ? []
      : [
          {
            files,
            rules: {
              // "Recommended" is just a smattering of everything
              ...msdl.configs.node.rules,

              ...("@microsoft/eslint-plugin-sdl/node" in override
                ? override["@microsoft/eslint-plugin-sdl/node"]
                : {}),
            },
          },
        ]),

    /*
      Microsoft SDL - React
      1,339,858 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: react, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/react") ||
    threshold > 1_339_858
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
              // "Recommended" is just a smattering of everything
              ...msdl.configs.react.rules,

              ...("@microsoft/eslint-plugin-sdl/react" in override
                ? override["@microsoft/eslint-plugin-sdl/react"]
                : {}),
            },
          },
        ]),

    /*
      Microsoft SDL - TS
      1,339,858 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @typescript-eslint, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/ts") ||
    threshold > 1_339_858
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              // "Recommended" is just a smattering of everything
              ...msdl.configs.typescript.rules,

              ...("@microsoft/eslint-plugin-sdl/ts" in override
                ? override["@microsoft/eslint-plugin-sdl/ts"]
                : {}),
            },
          },
        ]),

    /*
      JSONC
      1,392,700 monthly downloads
      ESLint plugin for JSON, JSONC and JSON5 files.
      https://ota-meshi.github.io/eslint-plugin-jsonc/
      Requires: jsonc
    */
    ...(disable.includes("eslint-plugin-jsonc") || threshold > 1_392_700
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
      YML
      1,468,248 monthly downloads
      This ESLint plugin provides linting rules for YAML.
      https://ota-meshi.github.io/eslint-plugin-yml/
      Requires: yml
    */
    ...(disable.includes("eslint-plugin-yml") || threshold > 1_468_248
      ? []
      : [
          {
            files: ymlFiles,
            rules: {
              ...yml.configs.base.overrides[0].rules,
              ...yml.configs.standard.rules,
              ...yml.configs.recommended.rules,
              "prettier/prettier": 0,
              ...("eslint-plugin-yml" in override
                ? override["eslint-plugin-yml"]
                : {}),
            },
          },
        ]),

    /*
      Google
      1,607,112 monthly downloads
      ESLint shareable config for the Google style
      https://github.com/google/eslint-config-google#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-google") || threshold > 1_607_112
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/block-spacing": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/semi": 0,
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
      1,917,011 monthly downloads
      Lint browser compatibility of API used
      https://github.com/amilajack/eslint-plugin-compat#readme
      Requires: compat
    */
    ...(disable.includes("eslint-plugin-compat") || threshold > 1_917_011
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
              ...compat.configs.recommended.rules,

              ...("eslint-plugin-compat" in override
                ? override["eslint-plugin-compat"]
                : {}),
            },
          },
        ]),

    /*
      Tailwind CSS
      1,971,630 monthly downloads
      Rules enforcing best practices while using Tailwind CSS
      https://github.com/francoismassart/eslint-plugin-tailwindcss
      Requires: tailwindcss
    */
    ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 1_971_630
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
      Jest Formatting
      1,979,458 monthly downloads
      ESLint rules for formatting jest tests
      https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
      Requires: jest-formatting
    */
    ...(disable.includes("eslint-plugin-jest-formatting") ||
    threshold > 1_979_458
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
      GraphQL
      2,025,605 monthly downloads
      GraphQL plugin for ESLint
      https://github.com/B2o5T/graphql-eslint#readme
      Requires: @graphql-eslint
    */
    ...(disable.includes("@graphql-eslint/eslint-plugin") ||
    threshold > 2_025_605
      ? []
      : [
          {
            files: graphQLFiles,
            rules: {
              ...graphqlConfigs["schema-recommended"].rules,
              ...graphqlConfigs["operations-recommended"].rules,

              ...("@graphql-eslint/eslint-plugin" in override
                ? override["@graphql-eslint/eslint-plugin"]
                : {}),
            },
          },
        ]),

    /*
      MDX
      2,073,312 monthly downloads
      ESLint Plugin for MDX / remark plugin to lint Markdown code style / remark preset to configure remark-lint with rules that prevent mistakes or stuff that fails across vendors.
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx / https://github.com/remarkjs/remark-lint/tree/main#readme / https://github.com/remarkjs/remark-lint/tree/main#readme
      Requires: mdx, react
    */
    ...(disable.includes("eslint-plugin-mdx") ||
    disable.includes("remark-lint") ||
    disable.includes("remark-preset-lint-recommended") ||
    threshold > 2_073_312
      ? []
      : [
          {
            files: mdFiles,
            rules: {
              // MDX "recommended" is composed of Overrides, Base, and CodeBlocks but with unneeded conditional logic
              // Overrides:
              "react/jsx-no-undef": [2, { allowGlobals: true }],
              "react/react-in-jsx-scope": 0,
              // Base:
              ...mdx.configs.base.rules,

              ...("eslint-plugin-mdx" in override
                ? override["eslint-plugin-mdx"]
                : {}),
              ...("remark-lint" in override ? override["remark-lint"] : {}),
              ...("remark-preset-lint-recommended" in override
                ? override["remark-preset-lint-recommended"]
                : {}),
            },
          },
        ]),

    /*
      TSDoc
      2,132,125 monthly downloads
      An ESLint plugin that validates TypeScript doc comments
      https://tsdoc.org/
      Requires: tsdoc
    */
    ...(disable.includes("eslint-plugin-tsdoc") || threshold > 2_132_125
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
      Markdown
      2,139,291 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 2_139_291
      ? []
      : [
          {
            files: codeBlocks,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  impliedStrict: true,
                },
              },
            },
            rules: {
              ...markdown.configs.recommended[2].rules,
              "unused-imports/no-unused-vars": 0,
              ...("eslint-plugin-markdown" in override
                ? override["eslint-plugin-markdown"]
                : {}),
            },
          },
        ]),

    /*
      Standard JSX
      2,293,278 monthly downloads
      JavaScript Standard Style JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-jsx
      Requires: react
    */
    ...(disable.includes("eslint-config-standard-jsx") || threshold > 2_293_278
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
              "prettier-tailwind/prettier": 0,
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
      Standard TS
      2,512,217 monthly downloads
      An ESLint Shareable Config for JavaScript Standard Style with TypeScript support / A TypeScript ESLint config that loves you
      https://github.com/mightyiam/eslint-config-standard-with-typescript#readme / https://github.com/mightyiam/eslint-config-love#readme
      Requires: @typescript-eslint, n, import, promise
    */
    ...(disable.includes("eslint-config-standard-with-typescript") ||
    disable.includes("eslint-config-love") ||
    threshold > 2_512_217
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@stylistic/comma-dangle": 0,
              "@stylistic/space-before-function-paren": 0,
              "prettier/prettier": 0,
              "prettier-tailwind/prettier": 0,
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
      Prettier Plugin PackageJSON
      2,547,606 monthly downloads
      Prettier package.json plugin to make the order of properties nice.
      https://github.com/matzkoh/prettier-plugin-packagejson#readme
      Requires: prettier-package-json
    */
    ...(disable.includes("prettier-plugin-packagejson") || threshold > 2_547_606
      ? []
      : [
          {
            files: ["**/*package.json"],
            rules: {
              "prettier-package-json/prettier": [
                2,
                { plugins: ["prettier-plugin-packagejson"] },
              ],

              ...("prettier-plugin-packagejson" in override
                ? override["prettier-plugin-packagejson"]
                : {}),
            },
          },
        ]),

    /*
      React Native Plugin
      3,092,070 monthly downloads
      ESLint rules for @react-native/eslint-config / ESLint rules for @react-native-community/eslint-config
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme / https://github.com/facebook/react-native#readme
      Requires: @react-native
    */
    ...(disable.includes("@react-native/eslint-plugin") ||
    disable.includes("@react-native-community/eslint-plugin") ||
    threshold > 3_092_070
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
      Prefer Arrow
      3,326,792 monthly downloads
      Prefer arrow functions in most cases
      https://github.com/TristonJ/eslint-plugin-prefer-arrow#readme
      Requires: prefer-arrow
    */
    ...(disable.includes("eslint-plugin-prefer-arrow") || threshold > 3_326_792
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
      React Native Config - Flowtype
      3,439,569 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: ft-flow
    */
    ...(disable.includes("@react-native-community/eslint-config/flowtype") ||
    disable.includes("@react-native/eslint-config/flowtype") ||
    threshold > 3_439_569
      ? []
      : [
          {
            files: ["**/*.js"],
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
      React Native Config - Jest
      3,439,569 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: react-native
    */
    ...(disable.includes("@react-native-community/eslint-config/jest") ||
    disable.includes("@react-native/eslint-config/jest") ||
    threshold > 3_439_569
      ? []
      : [
          {
            files: testFiles,
            languageOptions: {
              globals: {
                jest: true,
                "jest/globals": true,
              },
            },
            rules: {
              ...reactNativeConfig.overrides[2].rules,

              ...("@react-native-community/eslint-config/jest" in override
                ? override["@react-native-community/eslint-config/jest"]
                : {}),
              ...("@react-native/eslint-config/jest" in override
                ? override["@react-native/eslint-config/jest"]
                : {}),
            },
          },
        ]),

    /*
      React Native Config - TS
      3,439,569 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("@react-native-community/eslint-config/ts") ||
    disable.includes("@react-native/eslint-config/ts") ||
    threshold > 3_439_569
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
      Security
      3,651,062 monthly downloads
      Security rules for eslint
      https://github.com/eslint-community/eslint-plugin-security#readme
      Requires: security
    */
    ...(disable.includes("eslint-plugin-security") || threshold > 3_651_062
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
      3,835,107 monthly downloads
      ESLint plugin for Playwright testing.
      https://github.com/playwright-community/eslint-plugin-playwright#readme
      Requires: playwright
    */
    ...(disable.includes("eslint-plugin-playwright") || threshold > 3_835_107
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
      3,956,183 monthly downloads
      SonarJS rules for ESLint
      https://github.com/SonarSource/eslint-plugin-sonarjs
      Requires: sonarjs
    */
    ...(disable.includes("eslint-plugin-sonarjs") || threshold > 3_956_183
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
      Jest Dom
      3,961,249 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
      https://github.com/testing-library/eslint-plugin-jest-dom#readme
      Requires: jest-dom
    */
    ...(disable.includes("eslint-plugin-jest-dom") || threshold > 3_961_249
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
      4,099,109 monthly downloads
      ESLint rule for .only blocks in mocha tests
      https://github.com/levibuzolic/no-only-tests#readme
      Requires: no-only-tests
    */
    ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_099_109
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
      Mocha
      4,167,493 monthly downloads
      Eslint rules for mocha.
      https://github.com/lo1tuma/eslint-plugin-mocha
      Requires: mocha
    */
    ...(disable.includes("eslint-plugin-mocha") || threshold > 4_167_493
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
      React Native (Independent Plugin/Config)
      4,823,546 monthly downloads
      React Native specific linting rules for ESLint
      https://github.com/intellicode/eslint-plugin-react-native
      Requires: react-native
    */
    ...(disable.includes("eslint-plugin-react-native") || threshold > 4_823_546
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
      5,275,865 monthly downloads
      Validate that your components can safely be updated with fast refresh
      https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
      Requires: react-refresh
    */
    ...(disable.includes("eslint-plugin-react-refresh") || threshold > 5_275_865
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
      Prettier Plugin Tailwind
      6,555,168 monthly downloads
      A Prettier plugin for sorting Tailwind CSS classes.
      https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme
      Requires: prettier-tailwind
    */
    ...(disable.includes("prettier-plugin-tailwindcss") || threshold > 6_555_168
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/indent": 0,
              "@stylistic/jsx-indent": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
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
              "jsx-quotes": 0,
              "object-curly-spacing": 0,
              "prettier-tailwind/prettier": [
                2,
                { plugins: ["prettier-plugin-tailwindcss"] },
              ],
              quotes: 0,
              "react/jsx-indent": 0,
              "unicorn/no-nested-ternary": 0,

              ...("prettier-plugin-tailwindcss" in override
                ? override["prettier-plugin-tailwindcss"]
                : {}),
            },
          },
        ]),

    /*
      React Native Config
      7,070,229 monthly downloads
      ESLint config for React Native / ESLint config for React Native / ESLint Environment for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/satya164/eslint-plugin-react-native-globals#readme
      Requires: eslint-comments, react, react-hooks, react-native, jest
    */
    ...(disable.includes("@react-native-community/eslint-config") ||
    disable.includes("@react-native/eslint-config") ||
    disable.includes("eslint-plugin-react-native-globals") ||
    threshold > 7_070_229
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
      7,595,828 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc") || threshold > 7_595_828
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
      7,595,828 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc/ts") || threshold > 7_595_828
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...jsdoc.configs["flat/recommended-typescript"].rules,
              "jsdoc/require-yields": 0,
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
      8,057,220 monthly downloads
      Easy autofixable import sorting
      https://github.com/lydell/eslint-plugin-simple-import-sort#readme
      Requires: simple-import-sort
    */
    ...(disable.includes("eslint-plugin-simple-import-sort") ||
    threshold > 8_057_220
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
      8,082,059 monthly downloads
      Airbnb's ESLint config with TypeScript support
      https://github.com/iamturns/eslint-config-airbnb-typescript
      Requires: @typescript-eslint, import, react
    */
    ...(disable.includes("eslint-config-airbnb-typescript") ||
    threshold > 8_082_059
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              "@stylistic/semi": 0,
              "prettier/prettier": 0,
              "prettier-tailwind/prettier": 0,
              ...airbnbTypescript.rules,
              ...airbnbTypescript.overrides[0].rules,
              "react/jsx-filename-extension": [
                2,
                { extensions: [".jsx", ".tsx"] },
              ],

              ...("eslint-config-airbnb-typescript" in override
                ? override["eslint-config-airbnb-typescript"]
                : {}),
            },
          },
        ]),

    /*
      No Unused Imports
      8,945,052 monthly downloads
      Report and remove unused es6 modules
      https://github.com/sweepline/eslint-plugin-unused-imports
      Requires: unused-imports
    */
    ...(disable.includes("eslint-plugin-unused-imports") ||
    threshold > 8_945_052
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "@typescript-eslint/no-unused-vars": 0,
              "no-unused-vars": 0,
              // These rules all come "recommended"
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
      Comments
      9,258,252 monthly downloads
      Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
      https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
      Requires: eslint-comments, @eslint-community/eslint-comments
    */
    ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
    disable.includes("eslint-plugin-eslint-comments") ||
    threshold > 9_258_252
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
      9,418,955 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook, react-hooks, import
    */
    ...(disable.includes("eslint-plugin-storybook") || threshold > 9_418_955
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
      9,418,955 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook
    */
    ...(disable.includes("eslint-plugin-storybook/main") ||
    threshold > 9_418_955
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
      Unicorn
      9,529,919 monthly downloads
      More than 100 powerful ESLint rules
      https://github.com/sindresorhus/eslint-plugin-unicorn#readme
      Requires: unicorn
    */
    ...(disable.includes("eslint-plugin-unicorn") || threshold > 9_529_919
      ? []
      : [
          {
            files,
            rules: {
              "@typescript-eslint/no-extra-parens": 0,
              "prettier/prettier": 0,
              "prettier-tailwind/prettier": 0,
              "regexp/strict": 0,
              ...unicorn.configs.recommended.rules,
              "functional/no-loop-statements": 0,
              "functional/prefer-immutable-types": 0,
              "no-restricted-syntax": 0,
              // Recommended if using eslint-plugin-markdown (which we are) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v52.0.0/docs/rules/filename-case.md
              "unicorn/filename-case": [
                2,
                {
                  case: "kebabCase",
                  ignore: [".*.md$", ".*.md/.*"],
                },
              ],
              ...("eslint-plugin-unicorn" in override
                ? override["eslint-plugin-unicorn"]
                : {}),
            },
          },
        ]),

    /*
      Cypress
      11,146,841 monthly downloads
      An ESLint plugin for projects using Cypress
      https://github.com/cypress-io/eslint-plugin-cypress#readme
      Requires: cypress
    */
    ...(disable.includes("eslint-plugin-cypress") || threshold > 11_146_841
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
      11,337,262 monthly downloads
      JavaScript Standard Style - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard
      Requires: import, n, promise
    */
    ...(disable.includes("eslint-config-standard") || threshold > 11_337_262
      ? []
      : [
          {
            files: jsFiles,
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
              "prettier/prettier": 0,
              ...standard.rules,

              ...("eslint-config-standard" in override
                ? override["eslint-config-standard"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb - React
      14,064,852 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react
    */
    ...(disable.includes("eslint-config-airbnb/react") || threshold > 14_064_852
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
              ...airbnbReact.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-airbnb/react" in override
                ? override["eslint-config-airbnb/react"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb - React-A11y
      14,064,852 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: jsx-a11y, react
    */
    ...(disable.includes("eslint-config-airbnb/react-a11y") ||
    threshold > 14_064_852
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
              ...airbnbReactA11y.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-airbnb/react-a11y" in override
                ? override["eslint-config-airbnb/react-a11y"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb - React-Hooks
      14,064,852 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react-hooks
    */
    ...(disable.includes("eslint-config-airbnb/react-hooks") ||
    threshold > 14_064_852
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
              ...airbnbReactHooks.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
              ...("eslint-config-airbnb/react-hooks" in override
                ? override["eslint-config-airbnb/react-hooks"]
                : {}),
            },
          },
        ]),

    /*
      Create React App
      16,484,039 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: react, react-hooks, import, jsx-a11y, flowtype
    */
    ...(disable.includes("eslint-config-react-app") || threshold > 16_484_039
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
      Create React App - Jest
      16,484,039 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: jest, testing-library
    */
    ...(disable.includes("eslint-config-react-app/jest") ||
    threshold > 16_484_039
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
      Create React App - TS
      16,484,039 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-config-react-app/ts") || threshold > 16_484_039
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
                warnOnUnsupportedTypeScriptVersion: false,
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
      NextJS - Config
      16,805,298 monthly downloads
      ESLint configuration used by Next.js.
      https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-config
      Requires: import, react, jsx-a11y
    */
    ...(disable.includes("eslint-config-next/config") || threshold > 16_805_298
      ? []
      : [
          {
            files,
            rules: {
              // Rules Ejected because requires no longer needed: "@rushstack/eslint-patch/modern-module-resolution"
              "import/no-anonymous-default-export": 1,
              "jsx-a11y/alt-text": [
                1,
                {
                  elements: ["img"],
                  img: ["Image"],
                },
              ],
              "jsx-a11y/aria-props": 1,
              "jsx-a11y/aria-proptypes": 1,
              "jsx-a11y/aria-unsupported-elements": 1,
              "jsx-a11y/role-has-required-aria-props": 1,
              "jsx-a11y/role-supports-aria-props": 1,
              "react/jsx-no-target-blank": 0,
              "react/no-unknown-property": 0,
              "react/prop-types": 0,
              "react/react-in-jsx-scope": 0,

              ...("eslint-config-next/config" in override
                ? override["eslint-config-next/config"]
                : {}),
            },
          },
        ]),

    /*
      Promises
      17,394,368 monthly downloads
      Enforce best practices for JavaScript promises
      https://github.com/eslint-community/eslint-plugin-promise
      Requires: promise
    */
    ...(disable.includes("eslint-plugin-promise") || threshold > 17_394_368
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
      NextJS
      19,104,253 monthly downloads
      ESLint plugin for Next.js.
      https://github.com/vercel/next.js#readme
      Requires: @next/next
    */
    ...(disable.includes("@next/eslint-plugin-next") || threshold > 19_104_253
      ? []
      : [
          {
            files,
            rules: {
              ...nextjs.configs.recommended.rules,

              ...("@next/eslint-plugin-next" in override
                ? override["@next/eslint-plugin-next"]
                : {}),
            },
          },
        ]),

    /*
      Testing Library
      20,634,454 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
      https://github.com/testing-library/eslint-plugin-testing-library
      Requires: testing-library
    */
    ...(disable.includes("eslint-plugin-testing-library") ||
    threshold > 20_634_454
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
      23,125,049 monthly downloads
      ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
      https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
      Requires: es, es-x
    */
    ...(disable.includes("eslint-plugin-es-x") ||
    disable.includes("eslint-plugin-es") ||
    threshold > 23_125_049
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
      23,450,769 monthly downloads
      Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
      https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
      Requires: node, n
    */
    ...(disable.includes("eslint-plugin-n") ||
    disable.includes("eslint-plugin-node") ||
    threshold > 23_450_769
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
              "functional/no-expression-statements": 0,
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
      AirBnb Base - Best-Practices
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/best-practices") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "prettier/prettier": 0,
              ...airbnbBaseBestPractices.rules,

              ...("eslint-config-airbnb-base/best-practices" in override
                ? override["eslint-config-airbnb-base/best-practices"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Errors
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/errors") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...airbnbBaseErrors.rules,

              ...("eslint-config-airbnb-base/errors" in override
                ? override["eslint-config-airbnb-base/errors"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - ES6
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/es6") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            ignores: testFiles,
            rules: {
              "@stylistic/arrow-parens": 0,
              ...airbnbBaseES6.rules,
              "mocha/no-mocha-arrows": 0,
              ...("eslint-config-airbnb-base/es6" in override
                ? override["eslint-config-airbnb-base/es6"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Imports
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: import
    */
    ...(disable.includes("eslint-config-airbnb-base/imports") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...airbnbBaseImports.rules,

              ...("eslint-config-airbnb-base/imports" in override
                ? override["eslint-config-airbnb-base/imports"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Node
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/node") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...airbnbBaseNode.rules,

              ...("eslint-config-airbnb-base/node" in override
                ? override["eslint-config-airbnb-base/node"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Strict
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/strict") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...airbnbBaseStrict.rules,

              ...("eslint-config-airbnb-base/strict" in override
                ? override["eslint-config-airbnb-base/strict"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Style
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/style") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              "@babel/object-curly-spacing": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
              "prettier/prettier": 0,
              ...airbnbBaseStyle.rules,
              // Added to modernize this config
              "no-restricted-syntax": [
                2,
                {
                  message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
                  selector: "ForInStatement",
                },
                // {
                //   selector: 'ForOfStatement',
                //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
                // },
                {
                  message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
                  selector: "LabeledStatement",
                },
                {
                  message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
                  selector: "WithStatement",
                },
              ],

              ...("eslint-config-airbnb-base/style" in override
                ? override["eslint-config-airbnb-base/style"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Variables
      25,511,714 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/variables") ||
    threshold > 25_511_714
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...airbnbBaseVariables.rules,

              ...("eslint-config-airbnb-base/variables" in override
                ? override["eslint-config-airbnb-base/variables"]
                : {}),
            },
          },
        ]),

    /*
      Jest
      40,765,978 monthly downloads
      ESLint rules for Jest
      https://github.com/jest-community/eslint-plugin-jest#readme
      Requires: jest
    */
    ...(disable.includes("eslint-plugin-jest") || threshold > 40_765_978
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
      50,171,375 monthly downloads
      Static AST checker for accessibility rules on JSX elements.
      https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
      Requires: jsx-a11y
    */
    ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 50_171_375
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
      Prettier - JSON
      53,040,241 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/json") ||
    threshold > 53_040_241
      ? []
      : [
          {
            files: jsonFiles,
            rules: {
              "prettier/prettier": 2,

              ...("eslint-plugin-prettier/json" in override
                ? override["eslint-plugin-prettier/json"]
                : {}),
            },
          },
        ]),

    /*
      Prettier - MD
      53,040,241 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/md") || threshold > 53_040_241
      ? []
      : [
          {
            files: mdFiles,
            rules: {
              "prettier/prettier": 2,

              ...("eslint-plugin-prettier/md" in override
                ? override["eslint-plugin-prettier/md"]
                : {}),
            },
          },
        ]),

    /*
      Prettier - YML
      53,040,241 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/yml") || threshold > 53_040_241
      ? []
      : [
          {
            files: ymlFiles,
            rules: {
              "prettier/prettier": 2,
              "yml/flow-mapping-curly-spacing": 0,
              ...("eslint-plugin-prettier/yml" in override
                ? override["eslint-plugin-prettier/yml"]
                : {}),
            },
          },
        ]),

    /*
      Prettier - Plugin
      53,040,241 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/plugin") ||
    threshold > 53_040_241
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-indent": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@stylistic/yield-star-spacing": 0,
              "@typescript-eslint/comma-dangle": 0,
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
              "@typescript-eslint/semi": 0,
              "@typescript-eslint/space-before-function-paren": 0,
              "comma-dangle": 0,
              "generator-star-spacing": 0,
              indent: 0,
              "jsx-quotes": 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              "prettier/prettier": 2,
              quotes: 0,
              "react/jsx-indent": 0,
              semi: 0,
              "space-before-function-paren": 0,
              "unicorn/no-nested-ternary": 0,
              "yield-star-spacing": 0,

              ...("eslint-plugin-prettier/plugin" in override
                ? override["eslint-plugin-prettier/plugin"]
                : {}),
            },
          },
        ]),

    /*
      React Hooks
      59,532,641 monthly downloads
      ESLint rules for React Hooks
      https://reactjs.org/
      Requires: react-hooks
    */
    ...(disable.includes("eslint-plugin-react-hooks") || threshold > 59_532_641
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
      70,333,977 monthly downloads
      React specific linting rules for ESLint
      https://github.com/jsx-eslint/eslint-plugin-react
      Requires: react
    */
    ...(disable.includes("eslint-plugin-react") || threshold > 70_333_977
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
      Prettier
      78,958,067 monthly downloads
      Turns off all rules that are unnecessary or might conflict with Prettier.
      https://github.com/prettier/eslint-config-prettier#readme
      Requires: prettier, @typescript-eslint, @babel, unicorn, flowtype, react
    */
    ...(disable.includes("eslint-config-prettier") || threshold > 78_958_067
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-indent": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@stylistic/yield-star-spacing": 0,
              ...prettierConfig.rules,
              "@next/next/no-html-link-for-pages": 0,
              "prettier/prettier": 2,
              ...("eslint-config-prettier" in override
                ? override["eslint-config-prettier"]
                : {}),
            },
          },
        ]),

    /*
      ESLint
      89,597,819 monthly downloads
      ESLint JavaScript language implementation
      https://eslint.org
      Requires: (None)
    */
    ...(disable.includes("@eslint/js") || threshold > 89_597_819
      ? []
      : [
          {
            files: jsFiles,
            rules: {
              ...eslint.configs.recommended.rules,
              "@next/next/no-html-link-for-pages": 0,
              ...("@eslint/js" in override ? override["@eslint/js"] : {}),
            },
          },
        ]),

    /*
      TypeScript
      109,621,517 monthly downloads
      Tooling which enables you to use TypeScript with ESLint / TypeScript plugin for ESLint
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/eslint-plugin
      Requires: @typescript-eslint
    */
    ...(disable.includes("typescript-eslint") ||
    disable.includes("@typescript-eslint/eslint-plugin") ||
    threshold > 109_621_517
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...tseslint.configs.recommendedTypeChecked[1].rules,
              ...tseslint.configs.recommendedTypeChecked[2].rules,
              "@next/next/no-html-link-for-pages": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "prefer-arrow/prefer-arrow-functions": 0,
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
      Import - ts
      117,062,677 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import/ts") ||
    disable.includes("eslint-import-resolver-typescript/ts") ||
    threshold > 117_062_677
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
      Import
      117,062,677 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import") ||
    disable.includes("eslint-import-resolver-typescript") ||
    threshold > 117_062_677
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

    /* CONTEXT OVERRIDES */
    /*
      MDX - Code-Blocks
      1,042,366 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_042_366
      ? []
      : [
          {
            files: codeBlocks,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  impliedStrict: true,
                },
              },
            },
            rules: {
              // MDX "recommended" is composed of Overrides, Base, and CodeBlocks but with unneeded conditional logic
              // CodeBlocks:
              ...mdx.configs.codeBlocks.rules,

              ...("eslint-plugin-mdx/code-blocks" in override
                ? override["eslint-plugin-mdx/code-blocks"]
                : {}),
            },
          },
        ]),
    /*
      Markdown
      2,139,291 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 2_139_291
      ? []
      : [
          {
            files: codeBlocks,
            languageOptions: {
              parserOptions: {
                ecmaFeatures: {
                  impliedStrict: true,
                },
              },
            },
            rules: {
              ...markdown.configs.recommended[2].rules,
              "unused-imports/no-unused-vars": 0,
              ...("eslint-plugin-markdown" in override
                ? override["eslint-plugin-markdown"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen;
// EOF
