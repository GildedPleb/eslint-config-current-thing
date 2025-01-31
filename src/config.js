// PathMark: ./src/config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-config.ts
  Generated on 1/31/2025
*/

/* eslint-disable import/extensions */
import babelPlugin from "@babel/eslint-plugin";
import { rules as emotion } from "@emotion/eslint-plugin";
import eslint from "@eslint/js";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import {
  configs as graphqlConfigs,
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
      1,019,564 monthly downloads
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
      1,788,947 monthly downloads
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
      3,401,428 monthly downloads
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
      7,576,529 monthly downloads
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
      148,498,317 monthly downloads
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
      162,259,444 monthly downloads
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
      264,805 monthly downloads
      ESLint plugin that prevents the use of JSX class components
      https://github.com/tatethurston/eslint-plugin-react-prefer-function-component#readme
      Requires: react-prefer-function-component
    */
    ...(disable.includes("eslint-plugin-react-prefer-function-component") ||
    threshold > 264_805
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
      Microsoft SDL
      271,798 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl") || threshold > 271_798
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
      271,798 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: node, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/node") ||
    threshold > 271_798
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
      271,798 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: react, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/react") ||
    threshold > 271_798
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
      271,798 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @typescript-eslint, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/ts") ||
    threshold > 271_798
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
      Standard React
      359,783 monthly downloads
      JavaScript Standard Style React/JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-react
      Requires: react, react-hooks
    */
    ...(disable.includes("eslint-config-standard-react") || threshold > 359_783
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
      383,753 monthly downloads
      Checks that you are using the existent css/scss/less classes, no more no less
      undefined
      Requires: css-modules
    */
    ...(disable.includes("eslint-plugin-css-modules") || threshold > 383_753
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, eslint-comments, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/core") || threshold > 404_835
      ? []
      : [
          {
            files,
            rules: {
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
              "@typescript-eslint/object-curly-spacing": 0,
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @babel, promise, sort-class-members, import
    */
    ...(disable.includes("@shopify/eslint-plugin/esnext") || threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: jest, jest-formatting, @shopify, @shopify/jest
    */
    ...(disable.includes("@shopify/eslint-plugin/jest") || threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify, node
    */
    ...(disable.includes("@shopify/eslint-plugin/node") || threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/polaris") ||
    threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @babel, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier") ||
    threshold > 404_835
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
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
              "comma-dangle": 0,
              curly: 0,
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: prettier, @typescript-eslint
    */
    ...(disable.includes("@shopify/eslint-plugin/prettier-ts") ||
    threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react, jsx-a11y, react-hooks, @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react") || threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @shopify
    */
    ...(disable.includes("@shopify/eslint-plugin/react-test") ||
    threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: react
    */
    ...(disable.includes("@shopify/eslint-plugin/react-ts") ||
    threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts") || threshold > 404_835
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
      404,835 monthly downloads
      Shopify's ESLint rules and configs.
      https://github.com/Shopify/web-configs/blob/main/packages/eslint-plugin/README.md
      Requires: @typescript-eslint, @shopify/typescript
    */
    ...(disable.includes("@shopify/eslint-plugin/ts-typecheck") ||
    threshold > 404_835
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
      Ava
      474,066 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: ava
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 474_066
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
      474,066 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: no-use-extend-native
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 474_066
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
      React Performance
      574,717 monthly downloads
      Performance-minded React linting rules for ESLint
      https://github.com/cvazac/eslint-plugin-react-perf#readme
      Requires: react-perf
    */
    ...(disable.includes("eslint-plugin-react-perf") || threshold > 574_717
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
      Functional
      598,835 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional") || threshold > 598_835
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
      598,835 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional/stylistic") ||
    threshold > 598_835
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
      598,835 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: @typescript-eslint, functional
    */
    ...(disable.includes("eslint-plugin-functional/ts") || threshold > 598_835
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
      You Don't Need Lodash
      681,393 monthly downloads
      Check methods you can use natively without lodash/underscore
      https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
      Requires: you-dont-need-lodash-underscore
    */
    ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
    threshold > 681_393
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
      726,800 monthly downloads
      ESLint plugin for i18n
      https://github.com/edvardchen/eslint-plugin-i18next#readme
      Requires: i18next
    */
    ...(disable.includes("eslint-plugin-i18next") || threshold > 726_800
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
      Jasmine
      728,476 monthly downloads
      ESLint rules for Jasmine
      https://github.com/tlvince/eslint-plugin-jasmine
      Requires: jasmine
    */
    ...(disable.includes("eslint-plugin-jasmine") || threshold > 728_476
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
      Emotion CSS
      733,483 monthly downloads
      ESLint rules for emotion
      https://github.com/emotion-js/emotion/tree/main#readme
      Requires: @emotion
    */
    ...(disable.includes("@emotion/eslint-plugin") || threshold > 733_483
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
      Sort Class Members
      814,244 monthly downloads
      ESLint rule for enforcing consistent ES6 class member order.
      https://github.com/bryanrsmith/eslint-plugin-sort-class-members
      Requires: sort-class-members
    */
    ...(disable.includes("eslint-plugin-sort-class-members") ||
    threshold > 814_244
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
      RxJS
      920,228 monthly downloads
      ESLint rules for RxJS
      https://github.com/cartant/eslint-plugin-rxjs
      Requires: rxjs
    */
    ...(disable.includes("eslint-plugin-rxjs") || threshold > 920_228
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
      XO
      983,040 monthly downloads
      ESLint shareable config for XO
      https://github.com/xojs/eslint-config-xo#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-xo") || threshold > 983_040
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
      MDX - Code-Blocks
      1,004,276 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_004_276
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
      No Unsanitized
      1,085,557 monthly downloads
      ESLint rule to disallow unsanitized code
      https://github.com/mozilla/eslint-plugin-no-unsanitized/
      Requires: no-unsanitized
    */
    ...(disable.includes("eslint-plugin-no-unsanitized") ||
    threshold > 1_085_557
      ? []
      : [
          {
            files,
            rules: {
              ...unsanitized.configs.recommended.rules,

              ...("eslint-plugin-no-unsanitized" in override
                ? override["eslint-plugin-no-unsanitized"]
                : {}),
            },
          },
        ]),

    /*
      Chai Friendly
      1,160,779 monthly downloads
      This plugin makes 'no-unused-expressions' rule friendly towards chai expect statements.
      https://github.com/ihordiachenko/eslint-plugin-chai-friendly#readme
      Requires: chai-friendly
    */
    ...(disable.includes("eslint-plugin-chai-friendly") || threshold > 1_160_779
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
      Typescript Sort Keys
      1,411,722 monthly downloads
      Sort interface and string enum keys
      https://github.com/infctr/eslint-plugin-typescript-sort-keys#readme
      Requires: typescript-sort-keys
    */
    ...(disable.includes("eslint-plugin-typescript-sort-keys") ||
    threshold > 1_411_722
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
      Google
      1,415,557 monthly downloads
      ESLint shareable config for the Google style
      https://github.com/google/eslint-config-google#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-google") || threshold > 1_415_557
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
      Perfectionist
      1,704,915 monthly downloads
      ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
      https://perfectionist.dev
      Requires: perfectionist
    */
    ...(disable.includes("eslint-plugin-perfectionist") || threshold > 1_704_915
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
      YML
      1,788,269 monthly downloads
      This ESLint plugin provides linting rules for YAML.
      https://ota-meshi.github.io/eslint-plugin-yml/
      Requires: yml
    */
    ...(disable.includes("eslint-plugin-yml") || threshold > 1_788_269
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
      JSONC
      1,788,497 monthly downloads
      ESLint plugin for JSON, JSONC and JSON5 files.
      https://ota-meshi.github.io/eslint-plugin-jsonc/
      Requires: jsonc
    */
    ...(disable.includes("eslint-plugin-jsonc") || threshold > 1_788_497
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
      GraphQL
      1,788,947 monthly downloads
      GraphQL plugin for ESLint
      https://github.com/dimaMachina/graphql-eslint#readme
      Requires: @graphql-eslint
    */
    ...(disable.includes("@graphql-eslint/eslint-plugin") ||
    threshold > 1_788_947
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
      Regular Expressions
      1,823,213 monthly downloads
      ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
      https://github.com/ota-meshi/eslint-plugin-regexp#readme
      Requires: regexp
    */
    ...(disable.includes("eslint-plugin-regexp") || threshold > 1_823_213
      ? []
      : [
          {
            files,
            rules: {
              ...regexp.configs["flat/recommended"].rules,

              ...("eslint-plugin-regexp" in override
                ? override["eslint-plugin-regexp"]
                : {}),
            },
          },
        ]),

    /*
      Markdown
      1,850,978 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 1_850_978
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
      1,868,389 monthly downloads
      JavaScript Standard Style JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-jsx
      Requires: react
    */
    ...(disable.includes("eslint-config-standard-jsx") || threshold > 1_868_389
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
      Jest Formatting
      1,892,292 monthly downloads
      ESLint rules for formatting jest tests
      https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
      Requires: jest-formatting
    */
    ...(disable.includes("eslint-plugin-jest-formatting") ||
    threshold > 1_892_292
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
      Compat
      2,013,585 monthly downloads
      Lint browser compatibility of API used
      https://github.com/amilajack/eslint-plugin-compat#readme
      Requires: compat
    */
    ...(disable.includes("eslint-plugin-compat") || threshold > 2_013_585
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
      TSDoc
      2,131,388 monthly downloads
      An ESLint plugin that validates TypeScript doc comments
      https://tsdoc.org/
      Requires: tsdoc
    */
    ...(disable.includes("eslint-plugin-tsdoc") || threshold > 2_131_388
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
      Standard TS
      2,161,701 monthly downloads
      An ESLint Shareable Config for JavaScript Standard Style with TypeScript support / A TypeScript ESLint config that loves you
      https://github.com/mightyiam/eslint-config-standard-with-typescript#readme / https://github.com/mightyiam/eslint-config-love#readme
      Requires: @typescript-eslint, n, import, promise
    */
    ...(disable.includes("eslint-config-standard-with-typescript") ||
    disable.includes("eslint-config-love") ||
    threshold > 2_161_701
      ? []
      : [
          {
            files: tsFiles,
            rules: {
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
      MDX
      2,282,138 monthly downloads
      ESLint Plugin for MDX / remark plugin to lint Markdown code style / remark preset to configure remark-lint with rules that prevent mistakes or stuff that fails across vendors.
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx / https://github.com/remarkjs/remark-lint/tree/main#readme / https://github.com/remarkjs/remark-lint/tree/main#readme
      Requires: mdx, react
    */
    ...(disable.includes("eslint-plugin-mdx") ||
    disable.includes("remark-lint") ||
    disable.includes("remark-preset-lint-recommended") ||
    threshold > 2_282_138
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
      Security
      2,564,230 monthly downloads
      Security rules for eslint
      https://github.com/eslint-community/eslint-plugin-security#readme
      Requires: security
    */
    ...(disable.includes("eslint-plugin-security") || threshold > 2_564_230
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
      Tailwind CSS
      2,600,164 monthly downloads
      Rules enforcing best practices while using Tailwind CSS
      https://github.com/francoismassart/eslint-plugin-tailwindcss
      Requires: tailwindcss
    */
    ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 2_600_164
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
      React Native Plugin
      2,714,286 monthly downloads
      ESLint rules for @react-native/eslint-config / ESLint rules for @react-native-community/eslint-config
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme / https://github.com/facebook/react-native#readme
      Requires: @react-native
    */
    ...(disable.includes("@react-native/eslint-plugin") ||
    disable.includes("@react-native-community/eslint-plugin") ||
    threshold > 2_714_286
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
      React Native Config - Flowtype
      2,743,753 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: ft-flow
    */
    ...(disable.includes("@react-native-community/eslint-config/flowtype") ||
    disable.includes("@react-native/eslint-config/flowtype") ||
    threshold > 2_743_753
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
      2,743,753 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: react-native
    */
    ...(disable.includes("@react-native-community/eslint-config/jest") ||
    disable.includes("@react-native/eslint-config/jest") ||
    threshold > 2_743_753
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
      2,743,753 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("@react-native-community/eslint-config/ts") ||
    disable.includes("@react-native/eslint-config/ts") ||
    threshold > 2_743_753
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
      Prettier Plugin PackageJSON
      2,962,011 monthly downloads
      Prettier package.json plugin to make the order of properties nice.
      https://github.com/matzkoh/prettier-plugin-packagejson#readme
      Requires: prettier-package-json
    */
    ...(disable.includes("prettier-plugin-packagejson") || threshold > 2_962_011
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
      Prefer Arrow
      3,065,850 monthly downloads
      Prefer arrow functions in most cases
      https://github.com/TristonJ/eslint-plugin-prefer-arrow#readme
      Requires: prefer-arrow
    */
    ...(disable.includes("eslint-plugin-prefer-arrow") || threshold > 3_065_850
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
      Stylistic
      3,638,297 monthly downloads
      Stylistic rules for ESLint, works for both JavaScript and TypeScript.
      https://github.com/eslint-stylistic/eslint-stylistic#readme
      Requires: @stylistic
    */
    ...(disable.includes("@stylistic/eslint-plugin") || threshold > 3_638_297
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
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/semi": 0,
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
      Mocha
      3,685,912 monthly downloads
      Eslint rules for mocha.
      https://github.com/lo1tuma/eslint-plugin-mocha
      Requires: mocha
    */
    ...(disable.includes("eslint-plugin-mocha") || threshold > 3_685_912
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
      3,742,407 monthly downloads
      React Native specific linting rules for ESLint
      https://github.com/intellicode/eslint-plugin-react-native
      Requires: react-native
    */
    ...(disable.includes("eslint-plugin-react-native") || threshold > 3_742_407
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
      Jest Dom
      3,963,778 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
      https://github.com/testing-library/eslint-plugin-jest-dom#readme
      Requires: jest-dom
    */
    ...(disable.includes("eslint-plugin-jest-dom") || threshold > 3_963_778
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
      SonarJS
      4,223,106 monthly downloads
      SonarJS rules for ESLint
      https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md
      Requires: sonarjs
    */
    ...(disable.includes("eslint-plugin-sonarjs") || threshold > 4_223_106
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
      No Only Tests
      4,409,412 monthly downloads
      ESLint rule for .only blocks in mocha tests
      https://github.com/levibuzolic/no-only-tests#readme
      Requires: no-only-tests
    */
    ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_409_412
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
      Playwright
      5,299,334 monthly downloads
      ESLint plugin for Playwright testing.
      https://github.com/playwright-community/eslint-plugin-playwright#readme
      Requires: playwright
    */
    ...(disable.includes("eslint-plugin-playwright") || threshold > 5_299_334
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
      React Native Config
      5,938,702 monthly downloads
      ESLint config for React Native / ESLint config for React Native / ESLint Environment for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/satya164/eslint-plugin-react-native-globals#readme
      Requires: eslint-comments, react, react-hooks, react-native, jest
    */
    ...(disable.includes("@react-native-community/eslint-config") ||
    disable.includes("@react-native/eslint-config") ||
    disable.includes("eslint-plugin-react-native-globals") ||
    threshold > 5_938_702
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: reactNativeConfig.globals,
            },
            rules: {
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
      AirBnb-Typescript
      7,434,491 monthly downloads
      Airbnb's ESLint config with TypeScript support
      https://github.com/iamturns/eslint-config-airbnb-typescript
      Requires: @typescript-eslint, import, react
    */
    ...(disable.includes("eslint-config-airbnb-typescript") ||
    threshold > 7_434_491
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
      Comments
      8,479,574 monthly downloads
      Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
      https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
      Requires: eslint-comments, @eslint-community/eslint-comments
    */
    ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
    disable.includes("eslint-plugin-eslint-comments") ||
    threshold > 8_479_574
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
      Prettier Plugin Tailwind
      8,564,294 monthly downloads
      A Prettier plugin for sorting Tailwind CSS classes.
      https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme
      Requires: prettier-tailwind
    */
    ...(disable.includes("prettier-plugin-tailwindcss") || threshold > 8_564_294
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
              "@typescript-eslint/indent": 0,
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
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
      JSDoc
      8,830,548 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc") || threshold > 8_830_548
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
      8,830,548 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc/ts") || threshold > 8_830_548
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
      React Refresh
      8,839,668 monthly downloads
      Validate that your components can safely be updated with Fast Refresh
      https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
      Requires: react-refresh
    */
    ...(disable.includes("eslint-plugin-react-refresh") || threshold > 8_839_668
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
      Standard
      9,153,993 monthly downloads
      JavaScript Standard Style - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard
      Requires: import, n, promise
    */
    ...(disable.includes("eslint-config-standard") || threshold > 9_153_993
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
      Simple Import Sort
      9,302,676 monthly downloads
      Easy autofixable import sorting
      https://github.com/lydell/eslint-plugin-simple-import-sort#readme
      Requires: simple-import-sort
    */
    ...(disable.includes("eslint-plugin-simple-import-sort") ||
    threshold > 9_302_676
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
      Cypress
      10,521,705 monthly downloads
      An ESLint plugin for projects using Cypress
      https://github.com/cypress-io/eslint-plugin-cypress#readme
      Requires: cypress
    */
    ...(disable.includes("eslint-plugin-cypress") || threshold > 10_521_705
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
      Storybook
      10,727,619 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook, react-hooks, import
    */
    ...(disable.includes("eslint-plugin-storybook") || threshold > 10_727_619
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
      10,727,619 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook
    */
    ...(disable.includes("eslint-plugin-storybook/main") ||
    threshold > 10_727_619
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
      10,781,094 monthly downloads
      More than 100 powerful ESLint rules
      https://github.com/sindresorhus/eslint-plugin-unicorn#readme
      Requires: unicorn
    */
    ...(disable.includes("eslint-plugin-unicorn") || threshold > 10_781_094
      ? []
      : [
          {
            files,
            rules: {
              "@typescript-eslint/no-extra-parens": 0,
              "prettier/prettier": 0,
              "prettier-tailwind/prettier": 0,
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
      No Unused Imports
      11,338,603 monthly downloads
      Report and remove unused es6 modules
      https://github.com/sweepline/eslint-plugin-unused-imports
      Requires: unused-imports
    */
    ...(disable.includes("eslint-plugin-unused-imports") ||
    threshold > 11_338_603
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
      AirBnb - React
      12,215,990 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react
    */
    ...(disable.includes("eslint-config-airbnb/react") || threshold > 12_215_990
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
      12,215,990 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: jsx-a11y, react
    */
    ...(disable.includes("eslint-config-airbnb/react-a11y") ||
    threshold > 12_215_990
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
      12,215,990 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react-hooks
    */
    ...(disable.includes("eslint-config-airbnb/react-hooks") ||
    threshold > 12_215_990
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
      14,484,185 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: react, react-hooks, import, jsx-a11y, flowtype
    */
    ...(disable.includes("eslint-config-react-app") || threshold > 14_484_185
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
      14,484,185 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: jest, testing-library
    */
    ...(disable.includes("eslint-config-react-app/jest") ||
    threshold > 14_484_185
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
      14,484,185 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-config-react-app/ts") || threshold > 14_484_185
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
      Promises
      16,205,339 monthly downloads
      Enforce best practices for JavaScript promises
      https://github.com/eslint-community/eslint-plugin-promise
      Requires: promise
    */
    ...(disable.includes("eslint-plugin-promise") || threshold > 16_205_339
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
      NextJS - Config
      18,378,238 monthly downloads
      ESLint configuration used by Next.js.
      https://nextjs.org/docs/app/api-reference/config/eslint
      Requires: import, react, jsx-a11y
    */
    ...(disable.includes("eslint-config-next/config") || threshold > 18_378_238
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
      Testing Library
      20,105,601 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
      https://github.com/testing-library/eslint-plugin-testing-library
      Requires: testing-library
    */
    ...(disable.includes("eslint-plugin-testing-library") ||
    threshold > 20_105_601
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
      20,340,842 monthly downloads
      ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
      https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
      Requires: es, es-x
    */
    ...(disable.includes("eslint-plugin-es-x") ||
    disable.includes("eslint-plugin-es") ||
    threshold > 20_340_842
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
      20,545,822 monthly downloads
      Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
      https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
      Requires: node, n
    */
    ...(disable.includes("eslint-plugin-n") ||
    disable.includes("eslint-plugin-node") ||
    threshold > 20_545_822
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
      NextJS
      21,057,411 monthly downloads
      ESLint plugin for Next.js.
      https://github.com/vercel/next.js#readme
      Requires: @next/next
    */
    ...(disable.includes("@next/eslint-plugin-next") || threshold > 21_057_411
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
      AirBnb Base - Best-Practices
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/best-practices") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/errors") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/es6") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: import
    */
    ...(disable.includes("eslint-config-airbnb-base/imports") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/node") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/strict") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/style") ||
    threshold > 23_172_092
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
      23,172,092 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/variables") ||
    threshold > 23_172_092
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
      40,014,735 monthly downloads
      ESLint rules for Jest
      https://github.com/jest-community/eslint-plugin-jest#readme
      Requires: jest
    */
    ...(disable.includes("eslint-plugin-jest") || threshold > 40_014_735
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
      50,945,960 monthly downloads
      Static AST checker for accessibility rules on JSX elements.
      https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
      Requires: jsx-a11y
    */
    ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 50_945_960
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
      55,677,739 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/json") ||
    threshold > 55_677_739
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
      55,677,739 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/md") || threshold > 55_677_739
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
      55,677,739 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/yml") || threshold > 55_677_739
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
      55,677,739 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/plugin") ||
    threshold > 55_677_739
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
              "@typescript-eslint/member-delimiter-style": 0,
              "@typescript-eslint/no-extra-parens": 0,
              "@typescript-eslint/object-curly-spacing": 0,
              "@typescript-eslint/quotes": 0,
              "comma-dangle": 0,
              curly: 0,
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
      65,166,851 monthly downloads
      ESLint rules for React Hooks
      https://react.dev/
      Requires: react-hooks
    */
    ...(disable.includes("eslint-plugin-react-hooks") || threshold > 65_166_851
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
      71,652,859 monthly downloads
      React specific linting rules for ESLint
      https://github.com/jsx-eslint/eslint-plugin-react
      Requires: react
    */
    ...(disable.includes("eslint-plugin-react") || threshold > 71_652_859
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
      81,213,631 monthly downloads
      Turns off all rules that are unnecessary or might conflict with Prettier.
      https://github.com/prettier/eslint-config-prettier#readme
      Requires: prettier, @typescript-eslint, @babel, unicorn, flowtype, react
    */
    ...(disable.includes("eslint-config-prettier") || threshold > 81_213_631
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
      114,379,692 monthly downloads
      ESLint JavaScript language implementation
      https://eslint.org
      Requires: (None)
    */
    ...(disable.includes("@eslint/js") || threshold > 114_379_692
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
      Import - ts
      119,737,821 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import/ts") ||
    disable.includes("eslint-import-resolver-typescript/ts") ||
    threshold > 119_737_821
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
      119,737,821 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import") ||
    disable.includes("eslint-import-resolver-typescript") ||
    threshold > 119_737_821
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
      TypeScript
      138,624,513 monthly downloads
      Tooling which enables you to use TypeScript with ESLint / TypeScript plugin for ESLint
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/eslint-plugin
      Requires: @typescript-eslint
    */
    ...(disable.includes("typescript-eslint") ||
    disable.includes("@typescript-eslint/eslint-plugin") ||
    threshold > 138_624_513
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

    /* CONTEXT OVERRIDES */
    /*
      MDX - Code-Blocks
      1,004,276 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_004_276
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
      1,850,978 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 1_850_978
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
