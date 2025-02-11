// PathMark: ./src/config.js
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable sonarjs/cognitive-complexity */

/*
  This file is fully generated, to edit it change ./generate-config.ts
  Generated on 2/10/2025
*/

import antfuConfig from "@antfu/eslint-config";
import babelPlugin from "@babel/eslint-plugin";
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
import stylistic from "@stylistic/eslint-plugin";
import tanstack from "@tanstack/eslint-plugin-query";
import vitest from "@vitest/eslint-plugin";
import restrictedGlobals from "confusing-browser-globals";
import standardTS from "eslint-config-love";
import prettierConfig from "eslint-config-prettier";
import xo from "eslint-config-xo";
import { defineFlatConfig } from "eslint-define-config";
import * as eslintMdx from "eslint-mdx";
import antfu from "eslint-plugin-antfu";
import ava from "eslint-plugin-ava";
import chaiFriendly from "eslint-plugin-chai-friendly";
import checkFile from "eslint-plugin-check-file";
import command from "eslint-plugin-command";
import compat from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
import cypress from "eslint-plugin-cypress";
import depend from "eslint-plugin-depend";
import esX from "eslint-plugin-es-x";
import formatJs from "eslint-plugin-formatjs";
import functional from "eslint-plugin-functional";
import header from "eslint-plugin-header";
import html from "eslint-plugin-html";
import i18next from "eslint-plugin-i18next";
import importPlugin from "eslint-plugin-import";
import importX from "eslint-plugin-import-x";
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
import noRelativeImport from "eslint-plugin-no-relative-import-paths";
import unsanitized from "eslint-plugin-no-unsanitized";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";
import perfectionist from "eslint-plugin-perfectionist";
import playwright from "eslint-plugin-playwright";
import preferArrow from "eslint-plugin-prefer-arrow";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactDebug from "eslint-plugin-react-debug";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactHooksExtra from "eslint-plugin-react-hooks-extra";
import reactNamingConvention from "eslint-plugin-react-naming-convention";
import reactNativeIndie from "eslint-plugin-react-native";
import reactPerf from "eslint-plugin-react-perf";
import preferFC from "eslint-plugin-react-prefer-function-component";
import reactRefresh from "eslint-plugin-react-refresh";
import reactWebAPI from "eslint-plugin-react-web-api";
import reactX from "eslint-plugin-react-x";
import regexp from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import importSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import sortClassMembers from "eslint-plugin-sort-class-members";
import sortDestructure from "eslint-plugin-sort-destructure-keys";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import toml from "eslint-plugin-toml";
import tsdoc from "eslint-plugin-tsdoc";
import turbo from "eslint-plugin-turbo";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import yml from "eslint-plugin-yml";
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import * as espree from "espree";
import globals from "globals";
import gts from "gts";
import jsoncEslintParser from "jsonc-eslint-parser";
import tomlEslintParser from "toml-eslint-parser";
import tseslint from "typescript-eslint";
import ymlEslintParser from "yaml-eslint-parser";

const antfuConfigRaw = await antfuConfig({
  lessOpinionated: true,
  // formatters: {
  //   css: true,
  //   html: true,
  //   markdown: "prettier",
  // },
  react: true,
}).renamePlugins({
  import: "import-x",
  node: "n",
  react: "react-x",
  style: "@stylistic",
  test: "vitest",
  ts: "@typescript-eslint",
  yaml: "yml",
});

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
const tomlFiles = ["**/*.toml"];
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
      processor: graphqlProcessors.graphql,
    },
    /* PARSERS */
    /*
      MDX
      1,120,211 monthly downloads
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
      1,470,450 monthly downloads
      A TOML parser that produces output compatible with ESLint
      https://github.com/ota-meshi/toml-eslint-parser#readme
    */
    {
      files: tomlFiles,
      languageOptions: {
        parser: tomlEslintParser,
      },
    },
    /*
      GraphQL
      2,039,986 monthly downloads
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
      3,726,915 monthly downloads
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
      8,412,568 monthly downloads
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
      166,575,913 monthly downloads
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
      180,412,104 monthly downloads
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
        "@graphql-eslint": { rules: graphQLRules },
        "@microsoft/sdl": msdl,
        "@next/next": nextjs,
        "@react-native": rnPlugin,
        "@stylistic": stylistic,
        "@tanstack": tanstack,
        "@typescript-eslint": tseslint.plugin,
        antfu,
        ava,
        "chai-friendly": chaiFriendly,
        "check-file": checkFile,
        command,
        compat,
        "css-modules": cssModules,
        cypress,
        depend,
        "es-x": esX,
        "eslint-comments": comments,
        formatjs: formatJs,
        functional,
        header,
        html,
        i18next,
        import: importPlugin,
        "import-x": importX,
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
        "no-relative-import-paths": noRelativeImport,
        "no-unsanitized": unsanitized,
        "no-use-extend-native": noUseExtendNative,
        perfectionist,
        playwright,
        "prefer-arrow": preferArrow,
        prettier,
        "prettier-package-json": prettier,
        "prettier-tailwind": prettier,
        promise,
        react,
        "react-compiler": reactCompiler,
        "react-debug": reactDebug,
        "react-dom": reactDom,
        "react-hooks": reactHooks,
        "react-hooks-extra": reactHooksExtra,
        "react-naming-convention": reactNamingConvention,
        "react-native": reactNativeIndie,
        "react-perf": reactPerf,
        "react-prefer-function-component": preferFC,
        "react-refresh": reactRefresh,
        "react-web-api": reactWebAPI,
        "react-x": reactX,
        regexp,
        security,
        "simple-import-sort": importSort,
        sonarjs,
        "sort-class-members": sortClassMembers,
        "sort-destructure-keys": sortDestructure,
        storybook,
        tailwindcss,
        "testing-library": testingLibrary,
        toml,
        tsdoc,
        turbo,
        unicorn,
        "unused-imports": unusedImports,
        vitest,
        yml,
        "you-dont-need-lodash-underscore": youDontNeedLodash,
      },
    },
    /* CONFIGS */
    /*
      React Prefer Function Component
      290,592 monthly downloads
      ESLint plugin that prevents the use of JSX class components
      https://github.com/tatethurston/eslint-plugin-react-prefer-function-component#readme
      Requires: react-prefer-function-component
    */
    ...(disable.includes("eslint-plugin-react-prefer-function-component") ||
    threshold > 290_592
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "React Prefer Function Component",
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
      311,615 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl") || threshold > 311_615
      ? []
      : [
          {
            files,
            name: "Microsoft SDL",
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
      311,615 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: n, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/node") ||
    threshold > 311_615
      ? []
      : [
          {
            files,
            name: "Microsoft SDL/node",
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
      311,615 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: react, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/react") ||
    threshold > 311_615
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
            name: "Microsoft SDL/react",
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
      311,615 monthly downloads
      ESLint plugin focused on common security issues and misconfigurations discoverable during static testing as part of Microsoft Security Development Lifecycle (SDL)
      https://github.com/microsoft/eslint-plugin-sdl
      Requires: @typescript-eslint, @microsoft/sdl
    */
    ...(disable.includes("@microsoft/eslint-plugin-sdl/ts") ||
    threshold > 311_615
      ? []
      : [
          {
            files: tsFiles,
            name: "Microsoft SDL/ts",
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
      410,427 monthly downloads
      JavaScript Standard Style React/JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-react
      Requires: react, react-hooks
    */
    ...(disable.includes("eslint-config-standard-react") || threshold > 410_427
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
            name: "Standard React",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "react-hooks/exhaustive-deps": 1,
              "react-hooks/rules-of-hooks": 2,
              "react/jsx-no-bind": [
                2,
                {
                  allowArrowFunctions: true,
                  allowBind: false,
                  ignoreRefs: true,
                },
              ],
              "react/no-did-update-set-state": 2,
              "react/no-unknown-property": 2,
              "react/no-unused-prop-types": 2,
              "react/prop-types": 2,
              "react/react-in-jsx-scope": 2,
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
      452,832 monthly downloads
      Checks that you are using the existent css/scss/less classes, no more no less
      undefined
      Requires: css-modules
    */
    ...(disable.includes("eslint-plugin-css-modules") || threshold > 452_832
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "CSS Modules",
            rules: {
              ...cssModules.configs.recommended.rules,

              ...("eslint-plugin-css-modules" in override
                ? override["eslint-plugin-css-modules"]
                : {}),
            },
          },
        ]),

    /*
      Ava
      515,479 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: ava
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 515_479
      ? []
      : [
          {
            files: jsTestFiles,
            name: "Ava",
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
      515,479 monthly downloads
      ESLint rules for AVA
      https://github.com/avajs/eslint-plugin-ava#readme
      Requires: no-use-extend-native
    */
    ...(disable.includes("eslint-plugin-ava") || threshold > 515_479
      ? []
      : [
          {
            files,
            name: "No Use Extend Native",
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
      575,629 monthly downloads
      Performance-minded React linting rules for ESLint
      https://github.com/cvazac/eslint-plugin-react-perf#readme
      Requires: react-perf
    */
    ...(disable.includes("eslint-plugin-react-perf") || threshold > 575_629
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "React Performance",
            rules: {
              ...reactPerf.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              ...("eslint-plugin-react-perf" in override
                ? override["eslint-plugin-react-perf"]
                : {}),
            },
          },
        ]),

    /*
      Depend
      598,961 monthly downloads
      An ESLint plugin to suggest optimized dependencies, native alternatives and more
      https://github.com/es-tooling/eslint-plugin-depend#readme
      Requires: depend
    */
    ...(disable.includes("eslint-plugin-depend") || threshold > 598_961
      ? []
      : [
          {
            files,
            name: "Depend",
            rules: {
              "depend/ban-dependencies": [
                2,
                {
                  // Allowing these because they are not deprecated / abandoned
                  allowed: ["eslint-plugin-import", "eslint-plugin-react"],
                },
              ],

              ...("eslint-plugin-depend" in override
                ? override["eslint-plugin-depend"]
                : {}),
            },
          },
        ]),

    /*
      TOML
      621,228 monthly downloads
      This ESLint plugin provides linting rules for TOML.
      https://ota-meshi.github.io/eslint-plugin-toml/
      Requires: toml
    */
    ...(disable.includes("eslint-plugin-toml") || threshold > 621_228
      ? []
      : [
          {
            files: tomlFiles,
            name: "TOML",
            rules: {
              ...toml.configs.base.overrides[0].rules,
              ...toml.configs.recommended.rules,
              ...toml.configs.standard.rules,

              ...("eslint-plugin-toml" in override
                ? override["eslint-plugin-toml"]
                : {}),
            },
          },
        ]),

    /*
      Antfu
      652,247 monthly downloads
      Anthony's ESLint config
      https://github.com/antfu/eslint-config
      Requires: antfu, command, @typescript-eslint, n, import-x, yml, @stylistic, vitest, no-only-tests, jsdoc, jsonc, perfectionist, regexp, toml, unicorn, unused-imports, eslint-comments, react-dom, react-hooks, react-hooks-extra, react-naming-convention, react-refresh, react-web-api, react-x
    */
    ...(disable.includes("@antfu/eslint-config") || threshold > 652_247
      ? []
      : [
          ...antfuConfigRaw.map(({ plugins: _plugins, ...config }) => {
            // Change the test name space
            if (config.name === "antfu/test/rules") {
              return {
                ...config,
                rules: {
                  ...config.rules,
                  "no-only-tests/no-only-tests":
                    config.rules?.["vitest/no-only-tests"] ?? 0,
                  "vitest/no-only-tests": 0,
                },
              };
            }
            // Change the ecma version for JS files to allow 'with' imports
            if (config.name === "antfu/javascript/setup") {
              return {
                ...config,
                languageOptions: {
                  ...config.languageOptions,
                  ecmaVersion: "latest",
                  parserOptions: {
                    ...config.languageOptions?.parserOptions,
                    ecmaVersion: "latest",
                  },
                },
              };
            }
            return config;
          }),
          {
            files,
            name: "Antfu",
            rules: {
              "arrow-parens": 0,
              "block-spacing": 0,
              "brace-style": 0,
              "comma-dangle": 0,
              indent: 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              "prettier-tailwind/prettier": 0,
              "prettier/prettier": 0,
              "quote-props": 0,
              semi: 0,
              "space-before-function-paren": 0,

              ...("@antfu/eslint-config" in override
                ? override["@antfu/eslint-config"]
                : {}),
            },
          },
        ]),

    /*
      React Web API
      677,041 monthly downloads
      ESLint React's ESLint plugin for interacting with Web APIs
      https://github.com/Rel1cx/eslint-react
      Requires: react-web-api
    */
    ...(disable.includes("eslint-plugin-react-web-api") || threshold > 677_041
      ? []
      : [
          {
            files: tsFiles,
            name: "React Web API",
            rules: {
              "react-web-api/no-leaked-event-listener": "warn",
              "react-web-api/no-leaked-interval": "warn",
              "react-web-api/no-leaked-resize-observer": "warn",
              "react-web-api/no-leaked-timeout": "warn",

              ...("eslint-plugin-react-web-api" in override
                ? override["eslint-plugin-react-web-api"]
                : {}),
            },
          },
        ]),

    /*
      Functional
      679,488 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional") || threshold > 679_488
      ? []
      : [
          {
            files: jsFiles,
            name: "Functional",
            rules: {
              ...functional.configs.externalVanillaRecommended.rules,
              ...functional.configs.recommended.rules,
              ...functional.configs.disableTypeChecked.rules,

              ...("eslint-plugin-functional" in override
                ? override["eslint-plugin-functional"]
                : {}),
            },
          },
        ]),

    /*
      Functional - Stylistic
      679,488 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: functional
    */
    ...(disable.includes("eslint-plugin-functional/stylistic") ||
    threshold > 679_488
      ? []
      : [
          {
            files,
            name: "Functional/stylistic",
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
      679,488 monthly downloads
      ESLint rules to promote functional programming in TypeScript.
      https://github.com/eslint-functional/eslint-plugin-functional#readme
      Requires: @typescript-eslint, functional
    */
    ...(disable.includes("eslint-plugin-functional/ts") || threshold > 679_488
      ? []
      : [
          {
            files: tsFiles,
            name: "Functional/ts",
            rules: {
              ...functional.configs.recommended.rules,
              ...functional.configs.externalTypeScriptRecommended.rules,

              ...("eslint-plugin-functional/ts" in override
                ? override["eslint-plugin-functional/ts"]
                : {}),
            },
          },
        ]),

    /*
      React Debug
      681,626 monthly downloads
      ESLint React's ESLint plugin for debugging related rules.
      https://github.com/Rel1cx/eslint-react
      Requires: react-debug
    */
    ...(disable.includes("eslint-plugin-react-debug") || threshold > 681_626
      ? []
      : [
          {
            files: tsFiles,
            name: "React Debug",
            rules: {
              "react-debug/class-component": "warn",
              "react-debug/function-component": "warn",
              "react-debug/hook": "warn",
              "react-debug/is-from-react": "off",

              ...("eslint-plugin-react-debug" in override
                ? override["eslint-plugin-react-debug"]
                : {}),
            },
          },
        ]),

    /*
      React Naming Convention
      684,249 monthly downloads
      ESLint React's ESLint plugin for naming convention related rules.
      https://github.com/Rel1cx/eslint-react
      Requires: react-naming-convention
    */
    ...(disable.includes("eslint-plugin-react-naming-convention") ||
    threshold > 684_249
      ? []
      : [
          {
            files: tsFiles,
            name: "React Naming Convention",
            rules: {
              "react-naming-convention/filename-extension": [
                "warn",
                "as-needed",
              ],
              "react-naming-convention/use-state": "warn",

              ...("eslint-plugin-react-naming-convention" in override
                ? override["eslint-plugin-react-naming-convention"]
                : {}),
            },
          },
        ]),

    /*
      React X
      686,746 monthly downloads
      A set of composable linting rules for libraries and frameworks that use React as a UI runtime.
      https://github.com/Rel1cx/eslint-react
      Requires: react-x
    */
    ...(disable.includes("eslint-plugin-react-x") || threshold > 686_746
      ? []
      : [
          {
            files: tsFiles,
            name: "React X",
            rules: {
              "react-x/ensure-forward-ref-using-ref": "warn",
              "react-x/no-access-state-in-setstate": "error",
              "react-x/no-array-index-key": "warn",
              "react-x/no-children-count": "warn",
              "react-x/no-children-for-each": "warn",
              "react-x/no-children-map": "warn",
              "react-x/no-children-only": "warn",
              "react-x/no-children-to-array": "warn",
              "react-x/no-clone-element": "warn",
              "react-x/no-comment-textnodes": "warn",
              "react-x/no-component-will-mount": "error",
              "react-x/no-component-will-receive-props": "error",
              "react-x/no-component-will-update": "error",
              "react-x/no-context-provider": "warn",
              "react-x/no-create-ref": "error",
              "react-x/no-default-props": "error",
              "react-x/no-direct-mutation-state": "error",
              "react-x/no-duplicate-jsx-props": "warn",
              "react-x/no-duplicate-key": "error",
              "react-x/no-forward-ref": "warn",
              "react-x/no-implicit-key": "warn",
              "react-x/no-missing-key": "error",
              "react-x/no-nested-components": "error",
              "react-x/no-prop-types": "error",
              "react-x/no-redundant-should-component-update": "error",
              "react-x/no-set-state-in-component-did-mount": "warn",
              "react-x/no-set-state-in-component-did-update": "warn",
              "react-x/no-set-state-in-component-will-update": "warn",
              "react-x/no-string-refs": "error",
              "react-x/no-unsafe-component-will-mount": "warn",
              "react-x/no-unsafe-component-will-receive-props": "warn",
              "react-x/no-unsafe-component-will-update": "warn",
              "react-x/no-unstable-context-value": "warn",
              "react-x/no-unstable-default-props": "warn",
              "react-x/no-unused-class-component-members": "warn",
              "react-x/no-unused-state": "warn",
              "react-x/no-use-context": "warn",
              "react-x/use-jsx-vars": "warn",

              ...("eslint-plugin-react-x" in override
                ? override["eslint-plugin-react-x"]
                : {}),
            },
          },
        ]),

    /*
      React DOM
      686,830 monthly downloads
      ESLint React's ESLint plugin for React DOM related rules.
      https://github.com/Rel1cx/eslint-react
      Requires: react-dom
    */
    ...(disable.includes("eslint-plugin-react-dom") || threshold > 686_830
      ? []
      : [
          {
            files: tsFiles,
            name: "React DOM",
            rules: {
              "react-dom/no-dangerously-set-innerhtml": "warn",
              "react-dom/no-dangerously-set-innerhtml-with-children": "error",
              "react-dom/no-find-dom-node": "error",
              "react-dom/no-missing-button-type": "warn",
              "react-dom/no-missing-iframe-sandbox": "warn",
              "react-dom/no-namespace": "error",
              "react-dom/no-render-return-value": "error",
              "react-dom/no-script-url": "warn",
              "react-dom/no-unknown-property": "warn",
              "react-dom/no-unsafe-iframe-sandbox": "warn",
              "react-dom/no-unsafe-target-blank": "warn",
              "react-dom/no-void-elements-with-children": "warn",

              ...("eslint-plugin-react-dom" in override
                ? override["eslint-plugin-react-dom"]
                : {}),
            },
          },
        ]),

    /*
      Sort Destructure Keys
      719,889 monthly downloads
      require object destructure key to be sorted
      https://github.com/mthadley/eslint-plugin-sort-destructure-keys#readme
      Requires: sort-destructure-keys
    */
    ...(disable.includes("eslint-plugin-sort-destructure-keys") ||
    threshold > 719_889
      ? []
      : [
          {
            files,
            name: "Sort Destructure Keys",
            rules: {
              "sort-destructure-keys/sort-destructure-keys": [
                "error",
                {
                  caseSensitive: false,
                },
              ],

              ...("eslint-plugin-sort-destructure-keys" in override
                ? override["eslint-plugin-sort-destructure-keys"]
                : {}),
            },
          },
        ]),

    /*
      You Don't Need Lodash
      725,786 monthly downloads
      Check methods you can use natively without lodash/underscore
      https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git
      Requires: you-dont-need-lodash-underscore
    */
    ...(disable.includes("eslint-plugin-you-dont-need-lodash-underscore") ||
    threshold > 725_786
      ? []
      : [
          {
            files,
            name: "You Don't Need Lodash",
            rules: {
              ...youDontNeedLodash.configs.compatible.rules,

              ...("eslint-plugin-you-dont-need-lodash-underscore" in override
                ? override["eslint-plugin-you-dont-need-lodash-underscore"]
                : {}),
            },
          },
        ]),

    /*
      React Hooks Extra
      736,527 monthly downloads
      ESLint React's ESLint plugin for React Hooks related rules.
      https://github.com/Rel1cx/eslint-react
      Requires: react-hooks-extra
    */
    ...(disable.includes("eslint-plugin-react-hooks-extra") ||
    threshold > 736_527
      ? []
      : [
          {
            files: tsFiles,
            name: "React Hooks Extra",
            rules: {
              "react-hooks-extra/no-direct-set-state-in-use-effect": "warn",
              "react-hooks-extra/no-useless-custom-hooks": "warn",
              "react-hooks-extra/prefer-use-state-lazy-initialization": "warn",

              ...("eslint-plugin-react-hooks-extra" in override
                ? override["eslint-plugin-react-hooks-extra"]
                : {}),
            },
          },
        ]),

    /*
      Jasmine
      793,244 monthly downloads
      ESLint rules for Jasmine
      https://github.com/tlvince/eslint-plugin-jasmine
      Requires: jasmine
    */
    ...(disable.includes("eslint-plugin-jasmine") || threshold > 793_244
      ? []
      : [
          {
            files: jsTestFiles,
            languageOptions: {
              globals: {
                jasmine: true,
              },
            },
            name: "Jasmine",
            rules: {
              ...jasmine.configs.recommended.rules,

              ...("eslint-plugin-jasmine" in override
                ? override["eslint-plugin-jasmine"]
                : {}),
            },
          },
        ]),

    /*
      Internationalization (i18n)
      814,733 monthly downloads
      ESLint plugin for i18n
      https://github.com/edvardchen/eslint-plugin-i18next#readme
      Requires: i18next
    */
    ...(disable.includes("eslint-plugin-i18next") || threshold > 814_733
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "Internationalization (i18n)",
            rules: {
              ...i18next.configs.recommended.rules,

              ...("eslint-plugin-i18next" in override
                ? override["eslint-plugin-i18next"]
                : {}),
            },
          },
        ]),

    /*
      FormatJS
      817,845 monthly downloads
      ESLint plugin for formatjs
      https://github.com/formatjs/formatjs#readme
      Requires: formatjs
    */
    ...(disable.includes("eslint-plugin-formatjs") || threshold > 817_845
      ? []
      : [
          {
            files,
            name: "FormatJS",
            rules: {
              ...formatJs.configs.recommended.rules,

              ...("eslint-plugin-formatjs" in override
                ? override["eslint-plugin-formatjs"]
                : {}),
            },
          },
        ]),

    /*
      Sort Class Members
      894,748 monthly downloads
      ESLint rule for enforcing consistent ES6 class member order.
      https://github.com/bryanrsmith/eslint-plugin-sort-class-members
      Requires: sort-class-members
    */
    ...(disable.includes("eslint-plugin-sort-class-members") ||
    threshold > 894_748
      ? []
      : [
          {
            files,
            name: "Sort Class Members",
            rules: {
              ...sortClassMembers.configs["flat/recommended"].rules,

              ...("eslint-plugin-sort-class-members" in override
                ? override["eslint-plugin-sort-class-members"]
                : {}),
            },
          },
        ]),

    /*
      Google Typescript Style
      1,047,901 monthly downloads
      Google TypeScript Style
      https://github.com/google/gts#readme
      Requires: n, prettier
    */
    ...(disable.includes("gts") || threshold > 1_047_901
      ? []
      : [
          {
            files: jsFiles,
            name: "Google Typescript Style",
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@stylistic/yield-star-spacing": 0,
              "comma-dangle": 0,
              "generator-star-spacing": 0,
              indent: 0,
              semi: 0,
              "space-before-function-paren": 0,
              "unicorn/no-nested-ternary": 0,
              "yield-star-spacing": 0,
              ...gts.rules,

              ...("gts" in override ? override.gts : {}),
            },
          },
        ]),

    /*
      Google Typescript Style - TS
      1,047,901 monthly downloads
      Google TypeScript Style
      https://github.com/google/gts#readme
      Requires: n, @typescript-eslint
    */
    ...(disable.includes("gts/ts") || threshold > 1_047_901
      ? []
      : [
          {
            files: tsFiles,
            name: "Google Typescript Style/ts",
            rules: {
              ...gts.overrides[0].rules,

              ...("gts/ts" in override ? override["gts/ts"] : {}),
            },
          },
        ]),

    /*
      XO
      1,078,500 monthly downloads
      ESLint shareable config for XO
      https://github.com/xojs/eslint-config-xo#readme
      Requires: (None)
    */
    ...(disable.includes("eslint-config-xo") || threshold > 1_078_500
      ? []
      : [
          {
            files: jsFiles,
            name: "XO",
            rules: {
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
      1,106,654 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_106_654
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
            name: "MDX/code-blocks",
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
      No Relative Import Paths
      1,171,403 monthly downloads
      Moving a file to different folder, could result in changing all imports statement in that file. This will not happen is the import paths are absolute. The eslint rule helps enforcing having absolute import paths. Support eslint --fix to automatically chan
      https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths#readme
      Requires: no-relative-import-paths
    */
    ...(disable.includes("eslint-plugin-no-relative-import-paths") ||
    threshold > 1_171_403
      ? []
      : [
          {
            files,
            name: "No Relative Import Paths",
            rules: {
              "no-relative-import-paths/no-relative-import-paths": [
                "warn",
                {
                  allowedDepth: 2,
                  allowSameFolder: true,
                },
              ],

              ...("eslint-plugin-no-relative-import-paths" in override
                ? override["eslint-plugin-no-relative-import-paths"]
                : {}),
            },
          },
        ]),

    /*
      No Unsanitized
      1,199,734 monthly downloads
      ESLint rule to disallow unsanitized code
      https://github.com/mozilla/eslint-plugin-no-unsanitized/
      Requires: no-unsanitized
    */
    ...(disable.includes("eslint-plugin-no-unsanitized") ||
    threshold > 1_199_734
      ? []
      : [
          {
            files,
            name: "No Unsanitized",
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
      1,328,846 monthly downloads
      This plugin makes 'no-unused-expressions' rule friendly towards chai expect statements.
      https://github.com/ihordiachenko/eslint-plugin-chai-friendly#readme
      Requires: chai-friendly
    */
    ...(disable.includes("eslint-plugin-chai-friendly") || threshold > 1_328_846
      ? []
      : [
          {
            files: jsTestFiles,
            name: "Chai Friendly",
            rules: {
              ...chaiFriendly.configs.recommended.rules,

              ...("eslint-plugin-chai-friendly" in override
                ? override["eslint-plugin-chai-friendly"]
                : {}),
            },
          },
        ]),

    /*
      React Compiler
      1,458,545 monthly downloads
      ESLint plugin to display errors found by the React compiler.
      https://github.com/facebook/react#readme
      Requires: react-compiler
    */
    ...(disable.includes("eslint-plugin-react-compiler") ||
    threshold > 1_458_545
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "React Compiler",
            rules: {
              ...reactCompiler.configs.recommended.rules,

              ...("eslint-plugin-react-compiler" in override
                ? override["eslint-plugin-react-compiler"]
                : {}),
            },
          },
        ]),

    /*
      Google
      1,513,258 monthly downloads
      ESLint shareable config for the Google style
      https://github.com/google/eslint-config-google#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-config-google") || threshold > 1_513_258
      ? []
      : [
          {
            files: jsFiles,
            name: "Google",
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/block-spacing": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/object-curly-spacing": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/semi": 0,
              "array-bracket-newline": 0,
              "array-bracket-spacing": [2, "never"],
              "array-element-newline": 0,
              "arrow-parens": [2, "always"],
              "block-spacing": [2, "never"],
              "brace-style": 2,
              camelcase: [2, { properties: "never" }],
              "comma-dangle": [2, "always-multiline"],
              "comma-spacing": 2,
              "comma-style": 2,
              "computed-property-spacing": 2,
              "constructor-super": 2,
              curly: [2, "multi-line"],
              "eol-last": 2,
              "func-call-spacing": 2,
              "generator-star-spacing": [2, "after"],
              "guard-for-in": 2,
              indent: [
                2,
                2,
                {
                  CallExpression: {
                    arguments: 2,
                  },
                  FunctionDeclaration: {
                    body: 1,
                    parameters: 2,
                  },
                  FunctionExpression: {
                    body: 1,
                    parameters: 2,
                  },
                  ignoredNodes: ["ConditionalExpression"],
                  MemberExpression: 2,
                  ObjectExpression: 1,
                  SwitchCase: 1,
                },
              ],
              "jsdoc/require-jsdoc": [
                2,
                {
                  require: {
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                  },
                },
              ],
              "key-spacing": 2,
              "keyword-spacing": 2,
              "linebreak-style": 2,
              "max-len": [
                2,
                {
                  code: 80,
                  ignorePattern: "goog.(module|require)",
                  ignoreUrls: true,
                  tabWidth: 2,
                },
              ],
              "new-cap": 2,
              "no-array-constructor": 2,
              "no-caller": 2,
              "no-cond-assign": 0,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-invalid-this": 2,
              "no-irregular-whitespace": 2,
              "no-mixed-spaces-and-tabs": 2,
              "no-multi-spaces": 2,
              "no-multi-str": 2,
              "no-multiple-empty-lines": [2, { max: 2 }],
              "no-new-object": 2,
              "no-new-symbol": 2,
              "no-new-wrappers": 2,
              "no-tabs": 2,
              "no-this-before-super": 2,
              "no-throw-literal": 2,
              "no-trailing-spaces": 2,
              "no-unexpected-multiline": 2,
              "no-unused-vars": [2, { args: "none" }],
              "no-var": 2,
              "no-with": 2,
              "object-curly-spacing": 2,
              "one-var": [
                2,
                {
                  const: "never",
                  let: "never",
                  var: "never",
                },
              ],
              "operator-linebreak": [2, "after"],
              "padded-blocks": [2, "never"],
              "prefer-const": [2, { destructuring: "all" }],
              "prefer-promise-reject-errors": 2,
              "prefer-rest-params": 2,
              "prefer-spread": 2,
              "prettier/prettier": 0,
              "quote-props": [2, "consistent"],
              quotes: [2, "single", { allowTemplateLiterals: true }],
              "rest-spread-spacing": 2,
              semi: 2,
              "semi-spacing": 2,
              "space-before-blocks": 2,
              "space-before-function-paren": [
                2,
                {
                  anonymous: "never",
                  asyncArrow: "always",
                  named: "never",
                },
              ],
              "spaced-comment": [2, "always"],
              "switch-colon-spacing": 2,
              "yield-star-spacing": [2, "after"],

              ...("eslint-config-google" in override
                ? override["eslint-config-google"]
                : {}),
            },
          },
        ]),

    /*
      Perfectionist
      1,866,837 monthly downloads
      ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
      https://perfectionist.dev
      Requires: perfectionist
    */
    ...(disable.includes("eslint-plugin-perfectionist") || threshold > 1_866_837
      ? []
      : [
          {
            files,
            name: "Perfectionist",
            rules: {
              "simple-import-sort/imports": 0,
              ...perfectionist.configs["recommended-natural"].rules,
              "perfectionist/sort-modules": 0,
              ...("eslint-plugin-perfectionist" in override
                ? override["eslint-plugin-perfectionist"]
                : {}),
            },
          },
        ]),

    /*
      YML
      1,930,888 monthly downloads
      This ESLint plugin provides linting rules for YAML.
      https://ota-meshi.github.io/eslint-plugin-yml/
      Requires: yml
    */
    ...(disable.includes("eslint-plugin-yml") || threshold > 1_930_888
      ? []
      : [
          {
            files: ymlFiles,
            name: "YML",
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
      1,966,280 monthly downloads
      ESLint plugin for JSON, JSONC and JSON5 files.
      https://ota-meshi.github.io/eslint-plugin-jsonc/
      Requires: jsonc
    */
    ...(disable.includes("eslint-plugin-jsonc") || threshold > 1_966_280
      ? []
      : [
          {
            files: jsonFiles,
            name: "JSONC",
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
      Regular Expressions
      2,010,337 monthly downloads
      ESLint plugin for finding RegExp mistakes and RegExp style guide violations.
      https://github.com/ota-meshi/eslint-plugin-regexp#readme
      Requires: regexp
    */
    ...(disable.includes("eslint-plugin-regexp") || threshold > 2_010_337
      ? []
      : [
          {
            files,
            name: "Regular Expressions",
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
      2,028,518 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 2_028_518
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
            name: "Markdown",
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
      2,037,532 monthly downloads
      JavaScript Standard Style JSX support - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard-jsx
      Requires: react
    */
    ...(disable.includes("eslint-config-standard-jsx") || threshold > 2_037_532
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
            name: "Standard JSX",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "jsx-quotes": [2, "prefer-single"],
              "prettier-tailwind/prettier": 0,
              "prettier/prettier": 0,
              "react/jsx-boolean-value": 2,
              "react/jsx-closing-bracket-location": [2, "tag-aligned"],
              "react/jsx-closing-tag-location": 2,
              "react/jsx-curly-brace-presence": [
                2,
                {
                  children: "never",
                  props: "never",
                },
              ],
              "react/jsx-curly-newline": [
                2,
                {
                  multiline: "consistent",
                  singleline: "consistent",
                },
              ],
              "react/jsx-curly-spacing": [
                2,
                {
                  attributes: { allowMultiline: true, when: "never" },
                  children: { allowMultiline: true, when: "never" },
                },
              ],
              "react/jsx-equals-spacing": [2, "never"],
              "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
              "react/jsx-fragments": [2, "syntax"],
              "react/jsx-handler-names": 2,
              "react/jsx-indent": [
                2,
                2,
                {
                  checkAttributes: false,
                  indentLogicalExpressions: true,
                },
              ],
              "react/jsx-indent-props": [2, 2],
              "react/jsx-key": [
                2,
                {
                  checkFragmentShorthand: true,
                },
              ],
              "react/jsx-no-comment-textnodes": 2,
              "react/jsx-no-duplicate-props": 2,
              "react/jsx-no-target-blank": [
                2,
                { enforceDynamicLinks: "always" },
              ],
              "react/jsx-no-undef": [2, { allowGlobals: true }],
              "react/jsx-pascal-case": [2, { allowAllCaps: false }],
              "react/jsx-props-no-multi-spaces": 2,
              "react/jsx-tag-spacing": [
                2,
                {
                  afterOpening: "never",
                  beforeClosing: "never",
                  beforeSelfClosing: "always",
                  closingSlash: "never",
                },
              ],
              "react/jsx-uses-react": 2,
              "react/jsx-uses-vars": 2,
              "react/jsx-wrap-multilines": [
                2,
                {
                  arrow: "ignore",
                  assignment: "parens-new-line",
                  condition: "ignore",
                  declaration: "parens-new-line",
                  logical: "ignore",
                  prop: "ignore",
                  return: "parens-new-line",
                },
              ],
              "react/no-children-prop": 2,
              "react/no-danger-with-children": 2,
              "react/no-deprecated": 2,
              "react/no-direct-mutation-state": 2,
              "react/no-find-dom-node": 2,
              "react/no-is-mounted": 2,
              "react/no-render-return-value": 2,
              "react/no-string-refs": [
                2,
                {
                  noTemplateLiterals: true,
                },
              ],
              "react/no-unescaped-entities": [
                2,
                {
                  forbid: [">", "}"],
                },
              ],
              "react/require-render-return": 2,
              "react/self-closing-comp": 2,
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
      GraphQL
      2,039,986 monthly downloads
      GraphQL plugin for ESLint
      https://github.com/dimaMachina/graphql-eslint#readme
      Requires: @graphql-eslint
    */
    ...(disable.includes("@graphql-eslint/eslint-plugin") ||
    threshold > 2_039_986
      ? []
      : [
          {
            files: graphQLFiles,
            name: "GraphQL",
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
      Jest Formatting
      2,081,219 monthly downloads
      ESLint rules for formatting jest tests
      https://github.com/dangreenisrael/eslint-plugin-jest-formatting#readme
      Requires: jest-formatting
    */
    ...(disable.includes("eslint-plugin-jest-formatting") ||
    threshold > 2_081_219
      ? []
      : [
          {
            files: jsTestFiles,
            name: "Jest Formatting",
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
      2,153,264 monthly downloads
      Lint browser compatibility of API used
      https://github.com/amilajack/eslint-plugin-compat#readme
      Requires: compat
    */
    ...(disable.includes("eslint-plugin-compat") || threshold > 2_153_264
      ? []
      : [
          {
            files,
            languageOptions: {
              globals: {
                browser: true,
              },
            },
            name: "Compat",
            rules: {
              ...compat.configs.recommended.rules,

              ...("eslint-plugin-compat" in override
                ? override["eslint-plugin-compat"]
                : {}),
            },
          },
        ]),

    /*
      Standard TS
      2,359,229 monthly downloads
      An ESLint Shareable Config for JavaScript Standard Style with TypeScript support / A TypeScript ESLint config that loves you
      https://github.com/mightyiam/eslint-config-standard-with-typescript#readme / https://github.com/mightyiam/eslint-config-love#readme
      Requires: @typescript-eslint, n, import, promise, eslint-comments
    */
    ...(disable.includes("eslint-config-standard-with-typescript") ||
    disable.includes("eslint-config-love") ||
    threshold > 2_359_229
      ? []
      : [
          {
            files: tsFiles,
            name: "Standard TS",
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
      TSDoc
      2,397,596 monthly downloads
      An ESLint plugin that validates TypeScript doc comments
      https://tsdoc.org/
      Requires: tsdoc
    */
    ...(disable.includes("eslint-plugin-tsdoc") || threshold > 2_397_596
      ? []
      : [
          {
            files: tsFiles,
            name: "TSDoc",
            rules: {
              "tsdoc/syntax": 2,

              ...("eslint-plugin-tsdoc" in override
                ? override["eslint-plugin-tsdoc"]
                : {}),
            },
          },
        ]),

    /*
      MDX
      2,517,088 monthly downloads
      ESLint Plugin for MDX / remark plugin to lint Markdown code style / remark preset to configure remark-lint with rules that prevent mistakes or stuff that fails across vendors.
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx / https://github.com/remarkjs/remark-lint/tree/main#readme / https://github.com/remarkjs/remark-lint/tree/main#readme
      Requires: mdx, react
    */
    ...(disable.includes("eslint-plugin-mdx") ||
    disable.includes("remark-lint") ||
    disable.includes("remark-preset-lint-recommended") ||
    threshold > 2_517_088
      ? []
      : [
          {
            files: mdFiles,
            name: "MDX",
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
      Import X
      2,706,423 monthly downloads
      Import with sanity.
      https://github.com/un-ts/eslint-plugin-import-x#readme
      Requires: import-x
    */
    ...(disable.includes("eslint-plugin-import-x") || threshold > 2_706_423
      ? []
      : [
          {
            files: jsFiles,
            name: "Import X",
            rules: {
              ...importX.flatConfigs.recommended.rules,

              ...("eslint-plugin-import-x" in override
                ? override["eslint-plugin-import-x"]
                : {}),
            },
            settings: {
              "import-x/resolver": {
                node: {
                  extensions: [".js", ".jsx", ".mjs", ".cjs"],
                  includeScoped: true,
                  paths: ["node_modules"],
                  resolvePaths: ["node_modules"],
                },
                typescript: {},
              },
            },
          },
        ]),

    /*
      Import X - React
      2,706,423 monthly downloads
      Import with sanity.
      https://github.com/un-ts/eslint-plugin-import-x#readme
      Requires: import-x
    */
    ...(disable.includes("eslint-plugin-import-x/react") ||
    threshold > 2_706_423
      ? []
      : [
          {
            files: tsFiles,
            languageOptions: importX.flatConfigs.react.languageOptions,
            name: "Import X/react",
            rules: {
              ...("eslint-plugin-import-x/react" in override
                ? override["eslint-plugin-import-x/react"]
                : {}),
            },
            settings: importX.flatConfigs.react.settings,
          },
        ]),

    /*
      Import X - React-Native
      2,706,423 monthly downloads
      Import with sanity.
      https://github.com/un-ts/eslint-plugin-import-x#readme
      Requires: import-x
    */
    ...(disable.includes("eslint-plugin-import-x/react-native") ||
    threshold > 2_706_423
      ? []
      : [
          {
            files: tsFiles,
            name: "Import X/react-native",
            rules: {
              ...("eslint-plugin-import-x/react-native" in override
                ? override["eslint-plugin-import-x/react-native"]
                : {}),
            },
            settings: importX.flatConfigs["react-native"].settings,
          },
        ]),

    /*
      Import X - TS
      2,706,423 monthly downloads
      Import with sanity.
      https://github.com/un-ts/eslint-plugin-import-x#readme
      Requires: import-x
    */
    ...(disable.includes("eslint-plugin-import-x/ts") || threshold > 2_706_423
      ? []
      : [
          {
            files: tsFiles,
            name: "Import X/ts",
            rules: {
              ...importX.flatConfigs.typescript.rules,

              ...("eslint-plugin-import-x/ts" in override
                ? override["eslint-plugin-import-x/ts"]
                : {}),
            },
            settings: importX.flatConfigs.typescript.settings,
          },
        ]),

    /*
      Security
      2,775,885 monthly downloads
      Security rules for eslint
      https://github.com/eslint-community/eslint-plugin-security#readme
      Requires: security
    */
    ...(disable.includes("eslint-plugin-security") || threshold > 2_775_885
      ? []
      : [
          {
            files,
            name: "Security",
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
      2,927,054 monthly downloads
      Rules enforcing best practices while using Tailwind CSS
      https://github.com/francoismassart/eslint-plugin-tailwindcss
      Requires: tailwindcss
    */
    ...(disable.includes("eslint-plugin-tailwindcss") || threshold > 2_927_054
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "Tailwind CSS",
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
      2,994,014 monthly downloads
      ESLint rules for @react-native/eslint-config / ESLint rules for @react-native-community/eslint-config
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-plugin-react-native#readme / https://github.com/facebook/react-native#readme
      Requires: @react-native
    */
    ...(disable.includes("@react-native/eslint-plugin") ||
    disable.includes("@react-native-community/eslint-plugin") ||
    threshold > 2_994_014
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            // Not added in any config
            name: "React Native Plugin",
            rules: {
              "@react-native/platform-colors": 1,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
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
      React Native Config - Jest
      3,025,354 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: react-native
    */
    ...(disable.includes("@react-native-community/eslint-config/jest") ||
    disable.includes("@react-native/eslint-config/jest") ||
    threshold > 3_025_354
      ? []
      : [
          {
            files: jsTestFiles,
            languageOptions: {
              globals: {
                jest: true,
                "jest/globals": true,
              },
            },
            name: "React Native Config/jest",
            rules: {
              quotes: [
                1,
                "single",
                { allowTemplateLiterals: true, avoidEscape: true },
              ],
              "react-native/no-inline-styles": 0,

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
      3,025,354 monthly downloads
      ESLint config for React Native / ESLint config for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("@react-native-community/eslint-config/ts") ||
    disable.includes("@react-native/eslint-config/ts") ||
    threshold > 3_025_354
      ? []
      : [
          {
            files: tsxFiles,
            name: "React Native Config/ts",
            rules: {
              "@typescript-eslint/no-shadow": 1,
              "@typescript-eslint/no-unused-vars": [
                2,
                {
                  argsIgnorePattern: "^_",
                  destructuredArrayIgnorePattern: "^_",
                },
              ],
              "func-call-spacing": 0,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "no-shadow": 0,
              "no-undef": 0,
              "no-unused-vars": 0,
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
      3,175,420 monthly downloads
      Prettier package.json plugin to make the order of properties nice.
      https://github.com/matzkoh/prettier-plugin-packagejson#readme
      Requires: prettier-package-json
    */
    ...(disable.includes("prettier-plugin-packagejson") || threshold > 3_175_420
      ? []
      : [
          {
            files: ["**/*package.json"],
            name: "Prettier Plugin PackageJSON",
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
      Tanstack Query
      3,299,382 monthly downloads
      ESLint plugin for TanStack Query
      https://tanstack.com/query
      Requires: @tanstack
    */
    ...(disable.includes("@tanstack/eslint-plugin-query") ||
    threshold > 3_299_382
      ? []
      : [
          {
            files,
            name: "Tanstack Query",
            rules: {
              "@tanstack/exhaustive-deps": 2,
              "@tanstack/infinite-query-property-order": 2,
              "@tanstack/no-rest-destructuring": 1,
              "@tanstack/no-unstable-deps": 2,
              "@tanstack/stable-query-client": 2,

              ...("@tanstack/eslint-plugin-query" in override
                ? override["@tanstack/eslint-plugin-query"]
                : {}),
            },
          },
        ]),

    /*
      Prefer Arrow
      3,373,796 monthly downloads
      Prefer arrow functions in most cases
      https://github.com/TristonJ/eslint-plugin-prefer-arrow#readme
      Requires: prefer-arrow
    */
    ...(disable.includes("eslint-plugin-prefer-arrow") || threshold > 3_373_796
      ? []
      : [
          {
            files,
            name: "Prefer Arrow",
            rules: {
              "prefer-arrow/prefer-arrow-functions": [
                "error",
                {
                  allowStandaloneDeclarations: true,
                  classPropertiesAllowed: false,
                  disallowPrototype: false,
                  singleReturnOnly: true,
                },
              ],

              ...("eslint-plugin-prefer-arrow" in override
                ? override["eslint-plugin-prefer-arrow"]
                : {}),
            },
          },
        ]),

    /*
      Vitest
      4,113,360 monthly downloads
      Eslint plugin for vitest / Eslint plugin for vitest
      https://github.com/vitest-dev/eslint-plugin-vitest#readme / https://github.com/veritem/eslint-plugin-vitest#readme
      Requires: vitest
    */
    ...(disable.includes("@vitest/eslint-plugin") ||
    disable.includes("eslint-plugin-vitest") ||
    threshold > 4_113_360
      ? []
      : [
          {
            files: jsTestFiles,
            languageOptions: {
              globals: {
                ...vitest.environments.env.globals,
              },
            },
            name: "Vitest",
            rules: {
              ...vitest.configs.recommended.rules,

              ...("@vitest/eslint-plugin" in override
                ? override["@vitest/eslint-plugin"]
                : {}),
              ...("eslint-plugin-vitest" in override
                ? override["eslint-plugin-vitest"]
                : {}),
            },
          },
        ]),

    /*
      Vitest TS
      4,113,360 monthly downloads
      Eslint plugin for vitest / Eslint plugin for vitest
      https://github.com/vitest-dev/eslint-plugin-vitest#readme / https://github.com/veritem/eslint-plugin-vitest#readme
      Requires: vitest
    */
    ...(disable.includes("@vitest/eslint-plugin") ||
    disable.includes("eslint-plugin-vitest") ||
    threshold > 4_113_360
      ? []
      : [
          {
            files: tsTestFiles,
            languageOptions: {
              globals: {
                ...vitest.environments.env.globals,
              },
              parser: tseslint.parser,
              parserOptions: {
                ecmaVersion: "latest",
                project: true,
                warnOnUnsupportedTypeScriptVersion: false,
              },
            },
            name: "Vitest TS",
            rules: {
              ...vitest.configs.recommended.rules,

              ...("@vitest/eslint-plugin" in override
                ? override["@vitest/eslint-plugin"]
                : {}),
              ...("eslint-plugin-vitest" in override
                ? override["eslint-plugin-vitest"]
                : {}),
            },
            settings: {
              vitest: {
                typecheck: true,
              },
            },
          },
        ]),

    /*
      Stylistic
      4,128,781 monthly downloads
      Stylistic rules for ESLint, works for both JavaScript and TypeScript.
      https://github.com/eslint-stylistic/eslint-stylistic#readme
      Requires: @stylistic
    */
    ...(disable.includes("@stylistic/eslint-plugin") || threshold > 4_128_781
      ? []
      : [
          {
            files,
            languageOptions: {
              parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
              },
            },
            name: "Stylistic",
            rules: {
              "arrow-parens": 0,
              "block-spacing": 0,
              "brace-style": 0,
              "comma-dangle": 0,
              indent: 0,
              "object-curly-spacing": 0,
              "operator-linebreak": 0,
              "prettier-tailwind/prettier": 0,
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
      Mocha
      4,130,057 monthly downloads
      Eslint rules for mocha.
      https://github.com/lo1tuma/eslint-plugin-mocha
      Requires: mocha
    */
    ...(disable.includes("eslint-plugin-mocha") || threshold > 4_130_057
      ? []
      : [
          {
            files: jsTestFiles,
            languageOptions: {
              globals: globals.node,
            },
            name: "Mocha",
            rules: {
              ...mocha.configs.recommended.rules,
              "prefer-arrow-callback": 0,
              ...("eslint-plugin-mocha" in override
                ? override["eslint-plugin-mocha"]
                : {}),
            },
          },
        ]),

    /*
      React Native (Independent Plugin/Config)
      4,186,755 monthly downloads
      React Native specific linting rules for ESLint
      https://github.com/intellicode/eslint-plugin-react-native
      Requires: react-native
    */
    ...(disable.includes("eslint-plugin-react-native") || threshold > 4_186_755
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: reactNativeIndie.environments["react-native"].globals,
            },
            name: "React Native (Independent Plugin/Config)",
            rules: {
              ...reactNativeIndie.configs.all.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              ...("eslint-plugin-react-native" in override
                ? override["eslint-plugin-react-native"]
                : {}),
            },
          },
        ]),

    /*
      Jest Dom
      4,442,565 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom
      https://github.com/testing-library/eslint-plugin-jest-dom#readme
      Requires: jest-dom
    */
    ...(disable.includes("eslint-plugin-jest-dom") || threshold > 4_442_565
      ? []
      : [
          {
            files: [...jsTestFiles, ...tsTestFiles],
            name: "Jest Dom",
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
      4,615,217 monthly downloads
      SonarJS rules for ESLint
      https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md
      Requires: sonarjs
    */
    ...(disable.includes("eslint-plugin-sonarjs") || threshold > 4_615_217
      ? []
      : [
          {
            files,
            name: "SonarJS",
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
      4,841,080 monthly downloads
      ESLint rule for .only blocks in mocha tests
      https://github.com/levibuzolic/no-only-tests#readme
      Requires: no-only-tests
    */
    ...(disable.includes("eslint-plugin-no-only-tests") || threshold > 4_841_080
      ? []
      : [
          {
            files: jsTestFiles,
            name: "No Only Tests",
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
      5,881,655 monthly downloads
      ESLint plugin for Playwright testing.
      https://github.com/playwright-community/eslint-plugin-playwright#readme
      Requires: playwright
    */
    ...(disable.includes("eslint-plugin-playwright") || threshold > 5_881_655
      ? []
      : [
          {
            files: [...jsTestFiles, ...tsTestFiles],
            languageOptions: {
              globals: globals["shared-node-browser"],
            },
            name: "Playwright",
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
      6,625,894 monthly downloads
      ESLint config for React Native / ESLint config for React Native / ESLint Environment for React Native
      https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme / https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme / https://github.com/satya164/eslint-plugin-react-native-globals#readme
      Requires: eslint-comments, react, react-hooks, react-native, jest
    */
    ...(disable.includes("@react-native-community/eslint-config") ||
    disable.includes("@react-native/eslint-config") ||
    disable.includes("eslint-plugin-react-native-globals") ||
    threshold > 6_625_894
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            languageOptions: {
              globals: {
                __DEV__: true,
                __dirname: false,
                __fbBatchedBridgeConfig: false,
                AbortController: false,
                alert: false,
                Blob: true,
                cancelAnimationFrame: false,
                cancelIdleCallback: false,
                clearImmediate: true,
                clearInterval: false,
                clearTimeout: false,
                console: false,
                document: false,
                ErrorUtils: false,
                escape: false,
                Event: false,
                EventTarget: false,
                exports: false,
                fetch: false,
                File: true,
                FileReader: false,
                FormData: false,
                global: false,
                Headers: false,
                Intl: false,
                Map: true,
                module: false,
                navigator: false,
                process: false,
                Promise: true,
                queueMicrotask: true,
                requestAnimationFrame: true,
                requestIdleCallback: true,
                require: false,
                Set: true,
                setImmediate: true,
                setInterval: false,
                setTimeout: false,
                URL: false,
                URLSearchParams: false,
                WebSocket: true,
                window: false,
                XMLHttpRequest: false,
              },
            },
            name: "React Native Config",
            rules: {
              "block-scoped-var": 0,
              "brace-style": 0,
              camelcase: 0,
              "comma-dangle": [1, "always-multiline"],
              "comma-spacing": 0,
              complexity: 0,
              "consistent-return": 0,
              "consistent-this": 1,
              curly: 1,
              "default-case": 0,
              "dot-notation": 1,
              "eol-last": 1,
              eqeqeq: [1, "allow-null"],
              "eslint-comments/no-aggregating-enable": 1,
              "eslint-comments/no-unlimited-disable": 1,
              "eslint-comments/no-unused-disable": 1,
              "eslint-comments/no-unused-enable": 1,
              "func-call-spacing": 1,
              "func-names": 0,
              "func-style": 0,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "guard-for-in": 0,
              "handle-callback-err": 1,
              "jest/no-disabled-tests": 1,
              "jest/no-focused-tests": 1,
              "jest/no-identical-title": 1,
              "jest/valid-expect": 1,
              "jsx-quotes": [1, "prefer-double"],
              "key-spacing": 0,
              "keyword-spacing": 1,
              "max-depth": 0,
              "max-len": 0,
              "max-nested-callbacks": 0,
              "max-params": 0,
              "max-statements": 0,
              "new-cap": 0,
              "new-parens": 1,
              "no-alert": 1,
              "no-array-constructor": 1,
              "no-bitwise": 1,
              "no-caller": 1,
              "no-catch-shadow": 1,
              "no-cond-assign": 1,
              "no-console": 0,
              "no-const-assign": 2,
              "no-constant-condition": 0,
              "no-control-regex": 1,
              "no-debugger": 1,
              "no-delete-var": 1,
              "no-div-regex": 1,
              "no-dupe-class-members": 2,
              "no-dupe-keys": 2,
              "no-else-return": 0,
              "no-empty": 0,
              "no-empty-character-class": 1,
              "no-eq-null": 0,
              "no-eval": 2,
              "no-ex-assign": 1,
              "no-extend-native": 1,
              "no-extra-bind": 1,
              "no-extra-boolean-cast": 1,
              "no-extra-parens": 0,
              "no-extra-semi": 1,
              "no-fallthrough": 1,
              "no-floating-decimal": 1,
              "no-func-assign": 1,
              "no-implied-eval": 1,
              "no-inner-declarations": 0,
              "no-invalid-regexp": 1,
              "no-iterator": 1,
              "no-label-var": 1,
              "no-labels": 1,
              "no-lone-blocks": 1,
              "no-lonely-if": 0,
              "no-loop-func": 0,
              "no-mixed-requires": 1,
              "no-mixed-spaces-and-tabs": 1,
              "no-multi-spaces": 0,
              "no-multi-str": 0,
              "no-native-reassign": 0,
              "no-negated-in-lhs": 1,
              "no-nested-ternary": 0,
              "no-new": 1,
              "no-new-func": 2,
              "no-new-object": 1,
              "no-new-require": 1,
              "no-new-wrappers": 1,
              "no-obj-calls": 1,
              "no-octal": 1,
              "no-octal-escape": 1,
              "no-path-concat": 1,
              "no-plusplus": 0,
              "no-process-exit": 0,
              "no-proto": 1,
              "no-redeclare": 0,
              "no-regex-spaces": 1,
              "no-reserved-keys": 0,
              "no-restricted-modules": 1,
              "no-return-assign": 1,
              "no-script-url": 1,
              "no-self-compare": 1,
              "no-sequences": 1,
              "no-shadow": 1,
              "no-shadow-restricted-names": 1,
              "no-sparse-arrays": 1,
              "no-sync": 0,
              "no-ternary": 0,
              "no-trailing-spaces": 1,
              "no-undef": 2,
              "no-undef-init": 1,
              "no-undefined": 0,
              "no-underscore-dangle": 0,
              "no-unreachable": 2,
              "no-unused-expressions": 0,
              "no-unused-vars": [
                1,
                { args: "none", ignoreRestSiblings: true, vars: "all" },
              ],
              "no-use-before-define": 0,
              "no-useless-escape": 1,
              "no-void": 1,
              "no-warning-comments": 0,
              "no-with": 1,
              "one-var": 0,
              "prettier-tailwind/prettier": 0,
              "prettier/prettier": 0,
              "quote-props": 0,
              quotes: [
                1,
                "single",
                { allowTemplateLiterals: true, avoidEscape: true },
              ],
              radix: 1,
              "react-hooks/exhaustive-deps": 2,
              "react-hooks/rules-of-hooks": 2,
              "react-native/no-inline-styles": 1,
              "react/display-name": 0,
              "react/jsx-boolean-value": 0,
              "react/jsx-no-comment-textnodes": 2,
              "react/jsx-no-duplicate-props": 2,
              "react/jsx-no-undef": 2,
              "react/jsx-sort-props": 0,
              "react/jsx-uses-react": 1,
              "react/jsx-uses-vars": 1,
              "react/no-did-mount-set-state": 1,
              "react/no-did-update-set-state": 1,
              "react/no-multi-comp": 0,
              "react/no-string-refs": 1,
              "react/no-unknown-property": 0,
              "react/no-unstable-nested-components": 1,
              "react/prop-types": 0,
              "react/react-in-jsx-scope": 1,
              "react/self-closing-comp": 1,
              "react/wrap-multilines": 0,
              semi: 1,
              "semi-spacing": 1,
              "sort-vars": 0,
              "space-in-brackets": 0,
              "space-in-parens": 0,
              "space-infix-ops": 1,
              "space-unary-ops": [1, { nonwords: false, words: true }],
              "use-isnan": 1,
              "valid-typeof": 1,
              "vars-on-top": 0,
              "wrap-iife": 0,
              "wrap-regex": 0,
              yoda: 1,
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
      Turbo
      6,704,956 monthly downloads
      ESLint plugin for Turborepo / ESLint config for Turborepo
      https://github.com/vercel/turborepo#readme / https://github.com/vercel/turborepo#readme
      Requires: turbo
    */
    ...(disable.includes("eslint-plugin-turbo") ||
    disable.includes("eslint-config-turbo") ||
    threshold > 6_704_956
      ? []
      : [
          {
            files,
            name: "Turbo",
            rules: {
              ...turbo.configs["flat/recommended"].rules,
              "turbo/no-undeclared-env-vars": 0,

              ...("eslint-plugin-turbo" in override
                ? override["eslint-plugin-turbo"]
                : {}),
              ...("eslint-config-turbo" in override
                ? override["eslint-config-turbo"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb-Typescript
      8,068,312 monthly downloads
      Airbnb's ESLint config with TypeScript support
      https://github.com/iamturns/eslint-config-airbnb-typescript
      Requires: @typescript-eslint, import, react
    */
    ...(disable.includes("eslint-config-airbnb-typescript") ||
    threshold > 8_068_312
      ? []
      : [
          {
            files: tsFiles,
            name: "AirBnb-Typescript",
            rules: {
              "@typescript-eslint/default-param-last": 2,
              "@typescript-eslint/dot-notation": [2, { allowKeywords: true }],
              "@typescript-eslint/naming-convention": [
                2,
                {
                  format: ["camelCase", "PascalCase", "UPPER_CASE"],
                  selector: "variable",
                },
                {
                  format: ["camelCase", "PascalCase"],
                  selector: "function",
                },
                {
                  format: ["PascalCase"],
                  selector: "typeLike",
                },
              ],
              "@typescript-eslint/no-array-constructor": 2,
              "@typescript-eslint/no-dupe-class-members": 2,
              "@typescript-eslint/no-empty-function": [
                2,
                {
                  allow: ["arrowFunctions", "functions", "methods"],
                },
              ],
              "@typescript-eslint/no-extra-parens": [
                0,
                "all",
                {
                  conditionalAssign: true,
                  enforceForArrowConditionals: false,
                  ignoreJSX: "all",
                  nestedBinaryExpressions: false,
                  returnAssign: false,
                },
              ],
              "@typescript-eslint/no-implied-eval": 2,
              "@typescript-eslint/no-loop-func": 2,
              "@typescript-eslint/no-loss-of-precision": 2,
              "@typescript-eslint/no-magic-numbers": [
                0,
                {
                  detectObjects: false,
                  enforceConst: true,
                  ignore: [],
                  ignoreArrayIndexes: true,
                },
              ],
              "@typescript-eslint/no-redeclare": 2,
              "@typescript-eslint/no-shadow": 2,
              "@typescript-eslint/no-unused-expressions": [
                2,
                {
                  allowShortCircuit: false,
                  allowTaggedTemplates: false,
                  allowTernary: false,
                },
              ],
              "@typescript-eslint/no-unused-vars": [
                2,
                { args: "after-used", ignoreRestSiblings: true, vars: "all" },
              ],
              "@typescript-eslint/no-use-before-define": [
                2,
                { classes: true, functions: true, variables: true },
              ],
              "@typescript-eslint/no-useless-constructor": 2,
              "@typescript-eslint/require-await": 0,
              "@typescript-eslint/return-await": [2, "in-try-catch"],
              "brace-style": 0,
              camelcase: 0,
              "comma-dangle": 0,
              "comma-spacing": 0,
              "constructor-super": 0,
              "default-param-last": 0,
              "dot-notation": 0,
              "func-call-spacing": 0,
              "getter-return": 0,
              "import/extensions": [
                2,
                "ignorePackages",
                {
                  js: "never",
                  jsx: "never",
                  mjs: "never",
                  ts: "never",
                  tsx: "never",
                },
              ],
              "import/named": 0,
              "import/no-extraneous-dependencies": [
                2,
                {
                  devDependencies: [
                    "test/**",
                    "tests/**",
                    "spec/**",
                    "**/__tests__/**",
                    "**/__mocks__/**",
                    "test.{js,jsx}",
                    "test.{ts,tsx}",
                    "test-*.{js,jsx}",
                    "test-*.{ts,tsx}",
                    "**/*{.,_}{test,spec}.{js,jsx}",
                    "**/*{.,_}{test,spec}.{ts,tsx}",
                    "**/jest.config.js",
                    "**/jest.config.ts",
                    "**/jest.setup.js",
                    "**/jest.setup.ts",
                    "**/vue.config.js",
                    "**/vue.config.ts",
                    "**/webpack.config.js",
                    "**/webpack.config.ts",
                    "**/webpack.config.*.js",
                    "**/webpack.config.*.ts",
                    "**/rollup.config.js",
                    "**/rollup.config.ts",
                    "**/rollup.config.*.js",
                    "**/rollup.config.*.ts",
                    "**/gulpfile.js",
                    "**/gulpfile.ts",
                    "**/gulpfile.*.js",
                    "**/gulpfile.*.ts",
                    "**/Gruntfile{,.js}",
                    "**/Gruntfile{,.ts}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.ts",
                    "**/protractor.conf.*.js",
                    "**/protractor.conf.*.ts",
                    "**/karma.conf.js",
                    "**/karma.conf.ts",
                    "**/.eslintrc.js",
                    "**/.eslintrc.ts",
                  ],
                  optionalDependencies: false,
                },
              ],
              "import/no-named-as-default-member": 0,
              "import/no-unresolved": 0,
              indent: 0,
              "keyword-spacing": 0,
              "lines-between-class-members": 0,
              "no-array-constructor": 0,
              "no-const-assign": 0,
              "no-dupe-args": 0,
              "no-dupe-class-members": 0,
              "no-dupe-keys": 0,
              "no-empty-function": 0,
              "no-extra-parens": 0,
              "no-extra-semi": 0,
              "no-func-assign": 0,
              "no-implied-eval": 0,
              "no-import-assign": 0,
              "no-loop-func": 0,
              "no-loss-of-precision": 0,
              "no-magic-numbers": 0,
              "no-new-func": 0,
              "no-new-symbol": 0,
              "no-obj-calls": 0,
              "no-redeclare": 0,
              "no-return-await": 0,
              "no-setter-return": 0,
              "no-shadow": 0,
              "no-this-before-super": 0,
              "no-throw-literal": 0,
              "no-undef": 0,
              "no-unreachable": 0,
              "no-unsafe-negation": 0,
              "no-unused-expressions": 0,
              "no-unused-vars": 0,
              "no-use-before-define": 0,
              "no-useless-constructor": 0,
              "object-curly-spacing": 0,
              quotes: 0,
              "require-await": 0,
              semi: 0,
              "space-before-blocks": 0,
              "space-before-function-paren": 0,
              "space-infix-ops": 0,
              "valid-typeof": 0,

              ...("eslint-config-airbnb-typescript" in override
                ? override["eslint-config-airbnb-typescript"]
                : {}),
            },
          },
        ]),

    /*
      Comments
      9,385,318 monthly downloads
      Additional ESLint rules for ESLint directive comments. / Additional ESLint rules for ESLint directive comments.
      https://github.com/eslint-community/eslint-plugin-eslint-comments#readme / https://github.com/mysticatea/eslint-plugin-eslint-comments#readme
      Requires: eslint-comments
    */
    ...(disable.includes("@eslint-community/eslint-plugin-eslint-comments") ||
    disable.includes("eslint-plugin-eslint-comments") ||
    threshold > 9_385_318
      ? []
      : [
          {
            files,
            name: "Comments",
            rules: {
              "eslint-comments/disable-enable-pair": 2,
              "eslint-comments/no-aggregating-enable": 2,
              "eslint-comments/no-duplicate-disable": 2,
              "eslint-comments/no-unlimited-disable": 2,
              "eslint-comments/no-unused-enable": 2,

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
      9,564,994 monthly downloads
      A Prettier plugin for sorting Tailwind CSS classes.
      https://github.com/tailwindlabs/prettier-plugin-tailwindcss#readme
      Requires: prettier-tailwind
    */
    ...(disable.includes("prettier-plugin-tailwindcss") || threshold > 9_564_994
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "Prettier Plugin Tailwind",
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "jsx-quotes": 0,
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
      9,674,974 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc") || threshold > 9_674_974
      ? []
      : [
          {
            files: jsFiles,
            name: "JSDoc",
            rules: {
              ...jsdoc.configs["flat/recommended"].rules,

              ...("eslint-plugin-jsdoc" in override
                ? override["eslint-plugin-jsdoc"]
                : {}),
            },
          },
        ]),

    /*
      JSDoc - TS
      9,674,974 monthly downloads
      JSDoc linting rules for ESLint.
      https://github.com/gajus/eslint-plugin-jsdoc#readme
      Requires: jsdoc
    */
    ...(disable.includes("eslint-plugin-jsdoc/ts") || threshold > 9_674_974
      ? []
      : [
          {
            files: tsFiles,
            name: "JSDoc/ts",
            rules: {
              ...jsdoc.configs["flat/recommended-typescript"].rules,
              "jsdoc/require-yields": 0,

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
      Standard
      9,973,912 monthly downloads
      JavaScript Standard Style - ESLint Shareable Config
      https://github.com/standard/eslint-config-standard
      Requires: import, n, promise
    */
    ...(disable.includes("eslint-config-standard") || threshold > 9_973_912
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
            name: "Standard",
            rules: {
              "@stylistic/comma-dangle": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/space-before-function-paren": 0,
              "accessor-pairs": [
                2,
                { enforceForClassMembers: true, setWithoutGet: true },
              ],
              "array-bracket-spacing": [2, "never"],
              "array-callback-return": [
                2,
                {
                  allowImplicit: false,
                  checkForEach: false,
                },
              ],
              "arrow-spacing": [2, { after: true, before: true }],
              "block-spacing": [2, "always"],
              "brace-style": [2, "1tbs", { allowSingleLine: true }],
              camelcase: [
                2,
                {
                  allow: ["^UNSAFE_"],
                  ignoreGlobals: true,
                  properties: "never",
                },
              ],
              "comma-dangle": [
                2,
                {
                  arrays: "never",
                  exports: "never",
                  functions: "never",
                  imports: "never",
                  objects: "never",
                },
              ],
              "comma-spacing": [2, { after: true, before: false }],
              "comma-style": [2, "last"],
              "computed-property-spacing": [
                2,
                "never",
                { enforceForClassMembers: true },
              ],
              "constructor-super": 2,
              curly: [2, "multi-line"],
              "default-case-last": 2,
              "dot-location": [2, "property"],
              "dot-notation": [2, { allowKeywords: true }],
              "eol-last": 2,
              eqeqeq: [2, "always", { null: "ignore" }],
              "func-call-spacing": [2, "never"],
              "generator-star-spacing": [2, { after: true, before: true }],
              "import/export": 2,
              "import/first": 2,
              "import/no-absolute-path": [
                2,
                { amd: false, commonjs: true, esmodule: true },
              ],
              "import/no-duplicates": 2,
              "import/no-named-default": 2,
              "import/no-webpack-loader-syntax": 2,
              indent: [
                2,
                2,
                {
                  ArrayExpression: 1,
                  CallExpression: { arguments: 1 },
                  flatTernaryExpressions: false,
                  FunctionDeclaration: { body: 1, parameters: 1 },
                  FunctionExpression: { body: 1, parameters: 1 },
                  ignoreComments: false,
                  ignoredNodes: [
                    "TemplateLiteral *",
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                  ],
                  ImportDeclaration: 1,
                  MemberExpression: 1,
                  ObjectExpression: 1,
                  offsetTernaryExpressions: true,
                  outerIIFEBody: 1,
                  SwitchCase: 1,
                  VariableDeclarator: 1,
                },
              ],
              "key-spacing": [2, { afterColon: true, beforeColon: false }],
              "keyword-spacing": [2, { after: true, before: true }],
              "lines-between-class-members": [
                2,
                "always",
                { exceptAfterSingleLine: true },
              ],
              "multiline-ternary": [2, "always-multiline"],
              "n/handle-callback-err": [2, "^(err|error)$"],
              "n/no-callback-literal": 2,
              "n/no-deprecated-api": 2,
              "n/no-exports-assign": 2,
              "n/no-new-require": 2,
              "n/no-path-concat": 2,
              "n/process-exit-as-throw": 2,
              "new-cap": [
                2,
                { capIsNew: false, newIsCap: true, properties: true },
              ],
              "new-parens": 2,
              "no-array-constructor": 2,
              "no-async-promise-executor": 2,
              "no-caller": 2,
              "no-case-declarations": 2,
              "no-class-assign": 2,
              "no-compare-neg-zero": 2,
              "no-cond-assign": 2,
              "no-const-assign": 2,
              "no-constant-condition": [2, { checkLoops: false }],
              "no-control-regex": 2,
              "no-debugger": 2,
              "no-delete-var": 2,
              "no-dupe-args": 2,
              "no-dupe-class-members": 2,
              "no-dupe-keys": 2,
              "no-duplicate-case": 2,
              "no-empty": [2, { allowEmptyCatch: true }],
              "no-empty-character-class": 2,
              "no-empty-pattern": 2,
              "no-eval": 2,
              "no-ex-assign": 2,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-extra-boolean-cast": 2,
              "no-extra-parens": [2, "functions"],
              "no-fallthrough": 2,
              "no-floating-decimal": 2,
              "no-func-assign": 2,
              "no-global-assign": 2,
              "no-implied-eval": 2,
              "no-import-assign": 2,
              "no-invalid-regexp": 2,
              "no-irregular-whitespace": 2,
              "no-iterator": 2,
              "no-labels": [2, { allowLoop: false, allowSwitch: false }],
              "no-lone-blocks": 2,
              "no-loss-of-precision": 2,
              "no-misleading-character-class": 2,
              "no-mixed-operators": [
                2,
                {
                  allowSamePrecedence: true,
                  groups: [
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"],
                  ],
                },
              ],
              "no-mixed-spaces-and-tabs": 2,
              "no-multi-spaces": 2,
              "no-multi-str": 2,
              "no-multiple-empty-lines": [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
              "no-new": 2,
              "no-new-func": 2,
              "no-new-object": 2,
              "no-new-symbol": 2,
              "no-new-wrappers": 2,
              "no-obj-calls": 2,
              "no-octal": 2,
              "no-octal-escape": 2,
              "no-proto": 2,
              "no-prototype-builtins": 2,
              "no-redeclare": [2, { builtinGlobals: false }],
              "no-regex-spaces": 2,
              "no-return-assign": [2, "except-parens"],
              "no-self-assign": [2, { props: true }],
              "no-self-compare": 2,
              "no-sequences": 2,
              "no-shadow-restricted-names": 2,
              "no-sparse-arrays": 2,
              "no-tabs": 2,
              "no-template-curly-in-string": 2,
              "no-this-before-super": 2,
              "no-throw-literal": 2,
              "no-trailing-spaces": 2,
              "no-undef": 2,
              "no-undef-init": 2,
              "no-unexpected-multiline": 2,
              "no-unmodified-loop-condition": 2,
              "no-unneeded-ternary": [2, { defaultAssignment: false }],
              "no-unreachable": 2,
              "no-unreachable-loop": 2,
              "no-unsafe-finally": 2,
              "no-unsafe-negation": 2,
              "no-unused-expressions": [
                2,
                {
                  allowShortCircuit: true,
                  allowTaggedTemplates: true,
                  allowTernary: true,
                },
              ],
              "no-unused-vars": [
                2,
                {
                  args: "none",
                  caughtErrors: "none",
                  ignoreRestSiblings: true,
                  vars: "all",
                },
              ],
              "no-use-before-define": [
                2,
                { classes: false, functions: false, variables: false },
              ],
              "no-useless-backreference": 2,
              "no-useless-call": 2,
              "no-useless-catch": 2,
              "no-useless-computed-key": 2,
              "no-useless-constructor": 2,
              "no-useless-escape": 2,
              "no-useless-rename": 2,
              "no-useless-return": 2,
              "no-var": 1,
              "no-void": 2,
              "no-whitespace-before-property": 2,
              "no-with": 2,
              "object-curly-newline": [
                2,
                { consistent: true, multiline: true },
              ],
              "object-curly-spacing": [2, "always"],
              "object-property-newline": [
                2,
                { allowMultiplePropertiesPerLine: true },
              ],
              "object-shorthand": [1, "properties"],
              "one-var": [2, { initialized: "never" }],
              "operator-linebreak": [
                2,
                "after",
                { overrides: { ":": "before", "?": "before", "|>": "before" } },
              ],
              "padded-blocks": [
                2,
                { blocks: "never", classes: "never", switches: "never" },
              ],
              "prefer-const": [2, { destructuring: "all" }],
              "prefer-promise-reject-errors": 2,
              "prefer-regex-literals": [2, { disallowRedundantWrapping: true }],
              "prettier/prettier": 0,
              "promise/param-names": 2,
              "quote-props": [2, "as-needed"],
              quotes: [
                2,
                "single",
                { allowTemplateLiterals: false, avoidEscape: true },
              ],
              "rest-spread-spacing": [2, "never"],
              semi: [2, "never"],
              "semi-spacing": [2, { after: true, before: false }],
              "space-before-blocks": [2, "always"],
              "space-before-function-paren": [2, "always"],
              "space-in-parens": [2, "never"],
              "space-infix-ops": 2,
              "space-unary-ops": [2, { nonwords: false, words: true }],
              "spaced-comment": [
                2,
                "always",
                {
                  block: {
                    balanced: true,
                    exceptions: ["*"],
                    markers: ["*package", "!", ",", ":", "::", "flow-include"],
                  },
                  line: { markers: ["*package", "!", "/", ",", "="] },
                },
              ],
              "symbol-description": 2,
              "template-curly-spacing": [2, "never"],
              "template-tag-spacing": [2, "never"],
              "unicode-bom": [2, "never"],
              "use-isnan": [
                2,
                {
                  enforceForIndexOf: true,
                  enforceForSwitchCase: true,
                },
              ],
              "valid-typeof": [2, { requireStringLiterals: true }],
              "wrap-iife": [2, "any", { functionPrototypeMethods: true }],
              "yield-star-spacing": [2, "both"],
              yoda: [2, "never"],

              ...("eslint-config-standard" in override
                ? override["eslint-config-standard"]
                : {}),
            },
          },
        ]),

    /*
      React Refresh
      10,038,129 monthly downloads
      Validate that your components can safely be updated with Fast Refresh
      https://github.com/ArnaudBarre/eslint-plugin-react-refresh#readme
      Requires: react-refresh
    */
    ...(disable.includes("eslint-plugin-react-refresh") ||
    threshold > 10_038_129
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "React Refresh",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "react-refresh/only-export-components": 1,
              ...("eslint-plugin-react-refresh" in override
                ? override["eslint-plugin-react-refresh"]
                : {}),
            },
          },
        ]),

    /*
      Simple Import Sort
      10,145,551 monthly downloads
      Easy autofixable import sorting
      https://github.com/lydell/eslint-plugin-simple-import-sort#readme
      Requires: simple-import-sort
    */
    ...(disable.includes("eslint-plugin-simple-import-sort") ||
    threshold > 10_145_551
      ? []
      : [
          {
            files,
            name: "Simple Import Sort",
            rules: {
              "perfectionist/sort-imports": 0,
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
      11,582,403 monthly downloads
      An ESLint plugin for projects using Cypress
      https://github.com/cypress-io/eslint-plugin-cypress#readme
      Requires: cypress
    */
    ...(disable.includes("eslint-plugin-cypress") || threshold > 11_582_403
      ? []
      : [
          {
            files: jsTestFiles,
            languageOptions: {
              globals: {
                ...cypress.environments.globals.globals,
              },
            },
            name: "Cypress",
            rules: {
              ...cypress.configs.recommended.rules,

              ...("eslint-plugin-cypress" in override
                ? override["eslint-plugin-cypress"]
                : {}),
            },
          },
        ]),

    /*
      Unicorn
      11,751,422 monthly downloads
      More than 100 powerful ESLint rules
      https://github.com/sindresorhus/eslint-plugin-unicorn#readme
      Requires: unicorn
    */
    ...(disable.includes("eslint-plugin-unicorn") || threshold > 11_751_422
      ? []
      : [
          {
            files,
            name: "Unicorn",
            rules: {
              "prettier-tailwind/prettier": 0,
              "prettier/prettier": 0,
              ...unicorn.configs.recommended.rules,
              "antfu/no-top-level-await": 0,
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
              "unicorn/prefer-spread": 0,
              ...("eslint-plugin-unicorn" in override
                ? override["eslint-plugin-unicorn"]
                : {}),
            },
          },
        ]),

    /*
      Storybook
      12,043,553 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook, react-hooks, import
    */
    ...(disable.includes("eslint-plugin-storybook") || threshold > 12_043_553
      ? []
      : [
          {
            files: storybook.configs.recommended.overrides[0].files,
            name: "Storybook",
            rules: {
              ...storybook.configs.recommended.overrides[0].rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              ...("eslint-plugin-storybook" in override
                ? override["eslint-plugin-storybook"]
                : {}),
            },
          },
        ]),

    /*
      Storybook - Main
      12,043,553 monthly downloads
      Best practice rules for Storybook
      https://github.com/storybookjs/eslint-plugin-storybook#readme
      Requires: storybook
    */
    ...(disable.includes("eslint-plugin-storybook/main") ||
    threshold > 12_043_553
      ? []
      : [
          {
            files: storybook.configs.recommended.overrides[1].files,
            name: "Storybook/main",
            rules: {
              ...storybook.configs.recommended.overrides[1].rules,

              ...("eslint-plugin-storybook/main" in override
                ? override["eslint-plugin-storybook/main"]
                : {}),
            },
          },
        ]),

    /*
      No Unused Imports
      12,569,528 monthly downloads
      Report and remove unused es6 modules
      https://github.com/sweepline/eslint-plugin-unused-imports
      Requires: unused-imports
    */
    ...(disable.includes("eslint-plugin-unused-imports") ||
    threshold > 12_569_528
      ? []
      : [
          {
            files: jsFiles,
            name: "No Unused Imports",
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
      13,438,132 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react
    */
    ...(disable.includes("eslint-config-airbnb/react") || threshold > 13_438_132
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
            name: "AirBnb/react",
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
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
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

    /*
      AirBnb - React-A11y
      13,438,132 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: jsx-a11y, react
    */
    ...(disable.includes("eslint-config-airbnb/react-a11y") ||
    threshold > 13_438_132
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
            name: "AirBnb/react-a11y",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
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

    /*
      AirBnb - React-Hooks
      13,438,132 monthly downloads
      Airbnb's ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: react-hooks
    */
    ...(disable.includes("eslint-config-airbnb/react-hooks") ||
    threshold > 13_438_132
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
            name: "AirBnb/react-hooks",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              "react-hooks/exhaustive-deps": 2,
              "react-hooks/rules-of-hooks": 2,
              ...("eslint-config-airbnb/react-hooks" in override
                ? override["eslint-config-airbnb/react-hooks"]
                : {}),
            },
          },
        ]),

    /*
      Promises
      17,568,298 monthly downloads
      Enforce best practices for JavaScript promises
      https://github.com/eslint-community/eslint-plugin-promise
      Requires: promise
    */
    ...(disable.includes("eslint-plugin-promise") || threshold > 17_568_298
      ? []
      : [
          {
            files,
            name: "Promises",
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
      Create React App
      18,664,545 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: react, react-hooks, import, jsx-a11y
    */
    ...(disable.includes("eslint-config-react-app") || threshold > 18_664_545
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
            name: "Create React App",
            rules: {
              "array-callback-return": 1,
              "default-case": [1, { commentPattern: "^no default$" }],
              "dot-location": [1, "property"],
              eqeqeq: [1, "smart"],
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
              "react-hooks/exhaustive-deps": 1,
              "react-hooks/rules-of-hooks": 2,
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
      18,664,545 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: jest, testing-library
    */
    ...(disable.includes("eslint-config-react-app/jest") ||
    threshold > 18_664_545
      ? []
      : [
          {
            files: [...jsTestFiles, ...tsTestFiles],
            languageOptions: {
              globals: {
                "jest/globals": true,
              },
            },
            name: "Create React App/jest",
            rules: {
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
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
      18,664,545 monthly downloads
      ESLint configuration used by Create React App
      https://github.com/facebook/create-react-app#readme
      Requires: @typescript-eslint
    */
    ...(disable.includes("eslint-config-react-app/ts") || threshold > 18_664_545
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
            name: "Create React App/ts",
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
      20,139,074 monthly downloads
      ESLint configuration used by Next.js.
      https://nextjs.org/docs/app/api-reference/config/eslint
      Requires: import, react, jsx-a11y
    */
    ...(disable.includes("eslint-config-next/config") || threshold > 20_139_074
      ? []
      : [
          {
            files,
            name: "NextJS/config",
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
      ES-X
      22,122,473 monthly downloads
      ESLint plugin about ECMAScript syntactic features. / ESLint plugin about ECMAScript syntactic features.
      https://github.com/eslint-community/eslint-plugin-es-x#readme / https://github.com/mysticatea/eslint-plugin-es#readme
      Requires: es-x
    */
    ...(disable.includes("eslint-plugin-es-x") ||
    disable.includes("eslint-plugin-es") ||
    threshold > 22_122_473
      ? []
      : [
          {
            files,
            name: "ES-X",
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
      22,373,839 monthly downloads
      Additional ESLint's rules for Node.js / Additional ESLint's rules for Node.js
      https://github.com/eslint-community/eslint-plugin-n#readme / https://github.com/mysticatea/eslint-plugin-node#readme
      Requires: n
    */
    ...(disable.includes("eslint-plugin-n") ||
    disable.includes("eslint-plugin-node") ||
    threshold > 22_373_839
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
            name: "Node.js",
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
      23,106,523 monthly downloads
      ESLint plugin for Next.js.
      https://github.com/vercel/next.js#readme
      Requires: @next/next
    */
    ...(disable.includes("@next/eslint-plugin-next") || threshold > 23_106_523
      ? []
      : [
          {
            files,
            name: "NextJS",
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
      24,014,425 monthly downloads
      ESLint plugin to follow best practices and anticipate common mistakes when writing tests with Testing Library
      https://github.com/testing-library/eslint-plugin-testing-library
      Requires: testing-library
    */
    ...(disable.includes("eslint-plugin-testing-library") ||
    threshold > 24_014_425
      ? []
      : [
          {
            files: [...jsTestFiles, ...tsTestFiles],
            name: "Testing Library",
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
      AirBnb Base - Best-Practices
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/best-practices") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/best-practices",
            rules: {
              "accessor-pairs": 0,
              "array-callback-return": [2, { allowImplicit: true }],
              "block-scoped-var": 2,
              "class-methods-use-this": [2, { exceptMethods: [] }],
              complexity: [0, 20],
              "consistent-return": 2,
              curly: [2, "multi-line"],
              "default-case": [2, { commentPattern: "^no default$" }],
              "default-case-last": 2,
              "default-param-last": 2,
              "dot-location": [2, "property"],
              "dot-notation": [2, { allowKeywords: true }],
              eqeqeq: [2, "always", { null: "ignore" }],
              "grouped-accessor-pairs": 2,
              "guard-for-in": 2,
              "max-classes-per-file": [2, 1],
              "no-alert": 1,
              "no-caller": 2,
              "no-case-declarations": 2,
              "no-constructor-return": 2,
              "no-div-regex": 0,
              "no-else-return": [2, { allowElseIf: false }],
              "no-empty-function": [
                2,
                {
                  allow: ["arrowFunctions", "functions", "methods"],
                },
              ],
              "no-empty-pattern": 2,
              "no-empty-static-block": 0,
              "no-eq-null": 0,
              "no-eval": 2,
              "no-extend-native": 2,
              "no-extra-bind": 2,
              "no-extra-label": 2,
              "no-fallthrough": 2,
              "no-floating-decimal": 2,
              "no-global-assign": [2, { exceptions: [] }],
              "no-implicit-coercion": [
                0,
                {
                  allow: [],
                  boolean: false,
                  number: true,
                  string: true,
                },
              ],
              "no-implicit-globals": 0,
              "no-implied-eval": 2,
              "no-invalid-this": 0,
              "no-iterator": 2,
              "no-labels": [2, { allowLoop: false, allowSwitch: false }],
              "no-lone-blocks": 2,
              "no-loop-func": 2,
              "no-magic-numbers": [
                0,
                {
                  detectObjects: false,
                  enforceConst: true,
                  ignore: [],
                  ignoreArrayIndexes: true,
                },
              ],
              "no-multi-spaces": [
                2,
                {
                  ignoreEOLComments: false,
                },
              ],
              "no-multi-str": 2,
              "no-native-reassign": 0,
              "no-new": 2,
              "no-new-func": 2,
              "no-new-wrappers": 2,
              "no-nonoctal-decimal-escape": 2,
              "no-object-constructor": 0,
              "no-octal": 2,
              "no-octal-escape": 2,
              "no-param-reassign": [
                2,
                {
                  ignorePropertyModificationsFor: [
                    "acc",
                    "accumulator",
                    "e",
                    "ctx",
                    "context",
                    "req",
                    "request",
                    "res",
                    "response",
                    "$scope",
                    "staticContext",
                  ],
                  props: true,
                },
              ],
              "no-proto": 2,
              "no-redeclare": 2,
              "no-restricted-properties": [
                2,
                {
                  message: "arguments.callee is deprecated",
                  object: "arguments",
                  property: "callee",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "global",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "self",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isFinite instead",
                  object: "window",
                  property: "isFinite",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "global",
                  property: "isNaN",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "self",
                  property: "isNaN",
                },
                {
                  message: "Please use Number.isNaN instead",
                  object: "window",
                  property: "isNaN",
                },
                {
                  message: "Please use Object.defineProperty instead.",
                  property: "__defineGetter__",
                },
                {
                  message: "Please use Object.defineProperty instead.",
                  property: "__defineSetter__",
                },
                {
                  message: "Use the exponentiation operator (**) instead.",
                  object: "Math",
                  property: "pow",
                },
              ],
              "no-return-assign": [2, "always"],
              "no-return-await": 2,
              "no-script-url": 2,
              "no-self-assign": [
                2,
                {
                  props: true,
                },
              ],
              "no-self-compare": 2,
              "no-sequences": 2,
              "no-throw-literal": 2,
              "no-unmodified-loop-condition": 0,
              "no-unused-expressions": [
                2,
                {
                  allowShortCircuit: false,
                  allowTaggedTemplates: false,
                  allowTernary: false,
                },
              ],
              "no-unused-labels": 2,
              "no-useless-call": 0,
              "no-useless-catch": 2,
              "no-useless-concat": 2,
              "no-useless-escape": 2,
              "no-useless-return": 2,
              "no-void": 2,
              "no-warning-comments": [
                0,
                { location: "start", terms: ["todo", "fixme", "xxx"] },
              ],
              "no-with": 2,
              "prefer-named-capture-group": 0,
              "prefer-object-has-own": 0,
              "prefer-promise-reject-errors": [2, { allowEmptyReject: true }],
              "prefer-regex-literals": [
                2,
                {
                  disallowRedundantWrapping: true,
                },
              ],
              "prettier/prettier": 0,
              radix: 2,
              "require-await": 0,
              "require-unicode-regexp": 0,
              "vars-on-top": 2,
              "wrap-iife": [2, "outside", { functionPrototypeMethods: false }],
              yoda: 2,

              ...("eslint-config-airbnb-base/best-practices" in override
                ? override["eslint-config-airbnb-base/best-practices"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Errors
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/errors") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/errors",
            rules: {
              "for-direction": 2,
              "getter-return": [2, { allowImplicit: true }],
              "no-async-promise-executor": 2,
              "no-await-in-loop": 2,
              "no-compare-neg-zero": 2,
              "no-cond-assign": [2, "always"],
              "no-console": 1,
              "no-constant-binary-expression": 0,
              "no-constant-condition": 1,
              "no-control-regex": 2,
              "no-debugger": 2,
              "no-dupe-args": 2,
              "no-dupe-else-if": 2,
              "no-dupe-keys": 2,
              "no-duplicate-case": 2,
              "no-empty": 2,
              "no-empty-character-class": 2,
              "no-ex-assign": 2,
              "no-extra-boolean-cast": 2,
              "no-extra-parens": [
                0,
                "all",
                {
                  conditionalAssign: true,
                  enforceForArrowConditionals: false,
                  ignoreJSX: "all",
                  nestedBinaryExpressions: false,
                  returnAssign: false,
                },
              ],
              "no-extra-semi": 2,
              "no-func-assign": 2,
              "no-import-assign": 2,
              "no-inner-declarations": 2,
              "no-invalid-regexp": 2,
              "no-irregular-whitespace": 2,
              "no-loss-of-precision": 2,
              "no-misleading-character-class": 2,
              "no-negated-in-lhs": 0,
              "no-new-native-nonconstructor": 0,
              "no-obj-calls": 2,
              "no-promise-executor-return": 2,
              "no-prototype-builtins": 2,
              "no-regex-spaces": 2,
              "no-setter-return": 2,
              "no-sparse-arrays": 2,
              "no-template-curly-in-string": 2,
              "no-unexpected-multiline": 2,
              "no-unreachable": 2,
              "no-unreachable-loop": [
                2,
                {
                  ignore: [],
                },
              ],
              "no-unsafe-finally": 2,
              "no-unsafe-negation": 2,
              "no-unsafe-optional-chaining": [
                2,
                { disallowArithmeticOperators: true },
              ],
              "no-unused-private-class-members": 0,
              "no-useless-backreference": 2,
              "require-atomic-updates": 0,
              "use-isnan": 2,
              "valid-typeof": [2, { requireStringLiterals: true }],

              ...("eslint-config-airbnb-base/errors" in override
                ? override["eslint-config-airbnb-base/errors"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - ES6
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/es6") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            ignores: [...jsTestFiles, ...tsTestFiles],
            name: "AirBnb Base/es6",
            rules: {
              "@stylistic/arrow-parens": 0,
              "arrow-body-style": [
                2,
                "as-needed",
                {
                  requireReturnForObjectLiteral: false,
                },
              ],
              "arrow-parens": [2, "always"],
              "arrow-spacing": [2, { after: true, before: true }],
              "constructor-super": 2,
              "generator-star-spacing": [2, { after: true, before: false }],
              "mocha/no-mocha-arrows": 0,
              "no-class-assign": 2,
              "no-confusing-arrow": [
                2,
                {
                  allowParens: true,
                },
              ],
              "no-const-assign": 2,
              "no-dupe-class-members": 2,
              "no-duplicate-imports": 0,
              "no-new-symbol": 2,
              "no-restricted-exports": [
                2,
                {
                  restrictedNamedExports: ["default", "then"],
                },
              ],
              "no-restricted-imports": [
                0,
                {
                  paths: [],
                  patterns: [],
                },
              ],
              "no-this-before-super": 2,
              "no-useless-computed-key": 2,
              "no-useless-constructor": 2,
              "no-useless-rename": [
                2,
                {
                  ignoreDestructuring: false,
                  ignoreExport: false,
                  ignoreImport: false,
                },
              ],
              "no-var": 2,
              "object-shorthand": [
                2,
                "always",
                {
                  avoidQuotes: true,
                  ignoreConstructors: false,
                },
              ],
              "prefer-arrow-callback": [
                2,
                {
                  allowNamedFunctions: false,
                  allowUnboundThis: true,
                },
              ],
              "prefer-const": [
                2,
                {
                  destructuring: "any",
                  ignoreReadBeforeAssign: true,
                },
              ],
              "prefer-destructuring": [
                2,
                {
                  AssignmentExpression: {
                    array: true,
                    object: false,
                  },
                  VariableDeclarator: {
                    array: false,
                    object: true,
                  },
                },
                {
                  enforceForRenamedProperties: false,
                },
              ],
              "prefer-numeric-literals": 2,
              "prefer-reflect": 0,
              "prefer-rest-params": 2,
              "prefer-spread": 2,
              "prefer-template": 2,
              "require-yield": 2,
              "rest-spread-spacing": [2, "never"],
              "sort-imports": [
                0,
                {
                  ignoreCase: false,
                  ignoreDeclarationSort: false,
                  ignoreMemberSort: false,
                  memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                },
              ],
              "symbol-description": 2,
              "template-curly-spacing": 2,
              "yield-star-spacing": [2, "after"],
              ...("eslint-config-airbnb-base/es6" in override
                ? override["eslint-config-airbnb-base/es6"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Imports
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: import
    */
    ...(disable.includes("eslint-config-airbnb-base/imports") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/imports",
            rules: {
              "import/consistent-type-specifier-style": [0, "prefer-inline"],
              "import/default": 0,
              "import/dynamic-import-chunkname": [
                0,
                {
                  importFunctions: [],
                  webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
                },
              ],
              "import/export": 2,
              "import/exports-last": 0,
              "import/extensions": [
                2,
                "ignorePackages",
                {
                  js: "never",
                  jsx: "never",
                  mjs: "never",
                },
              ],
              "import/first": 2,
              "import/group-exports": 0,
              "import/imports-first": 0,
              "import/max-dependencies": [0, { max: 10 }],
              "import/named": 2,
              "import/namespace": 0,
              "import/newline-after-import": 2,
              "import/no-absolute-path": 2,
              "import/no-amd": 2,
              "import/no-anonymous-default-export": [
                0,
                {
                  allowAnonymousClass: false,
                  allowAnonymousFunction: false,
                  allowArray: false,
                  allowArrowFunction: false,
                  allowLiteral: false,
                  allowObject: false,
                },
              ],
              "import/no-commonjs": 0,
              "import/no-cycle": [2, { maxDepth: "∞" }],
              "import/no-default-export": 0,
              "import/no-deprecated": 0,
              "import/no-duplicates": 2,
              "import/no-dynamic-require": 2,
              "import/no-empty-named-blocks": 0,
              "import/no-extraneous-dependencies": [
                2,
                {
                  devDependencies: [
                    "test/**",
                    "tests/**",
                    "spec/**",
                    "**/__tests__/**",
                    "**/__mocks__/**",
                    "test.{js,jsx}",
                    "test-*.{js,jsx}",
                    "**/*{.,_}{test,spec}.{js,jsx}",
                    "**/jest.config.js",
                    "**/jest.setup.js",
                    "**/vue.config.js",
                    "**/webpack.config.js",
                    "**/webpack.config.*.js",
                    "**/rollup.config.js",
                    "**/rollup.config.*.js",
                    "**/gulpfile.js",
                    "**/gulpfile.*.js",
                    "**/Gruntfile{,.js}",
                    "**/protractor.conf.js",
                    "**/protractor.conf.*.js",
                    "**/karma.conf.js",
                    "**/.eslintrc.js",
                  ],
                  optionalDependencies: false,
                },
              ],
              "import/no-import-module-exports": [
                2,
                {
                  exceptions: [],
                },
              ],
              "import/no-internal-modules": [
                0,
                {
                  allow: [],
                },
              ],
              "import/no-mutable-exports": 2,
              "import/no-named-as-default": 2,
              "import/no-named-as-default-member": 2,
              "import/no-named-default": 2,
              "import/no-named-export": 0,
              "import/no-namespace": 0,
              "import/no-nodejs-modules": 0,
              "import/no-relative-packages": 2,
              "import/no-relative-parent-imports": 0,
              "import/no-restricted-paths": 0,
              "import/no-self-import": 2,
              "import/no-unassigned-import": 0,
              "import/no-unresolved": [
                2,
                { caseSensitive: true, commonjs: true },
              ],
              "import/no-unused-modules": [
                0,
                {
                  ignoreExports: [],
                  missingExports: true,
                  unusedExports: true,
                },
              ],
              "import/no-useless-path-segments": [2, { commonjs: true }],
              "import/no-webpack-loader-syntax": 2,
              "import/order": [
                2,
                { groups: [["builtin", "external", "internal"]] },
              ],
              "import/prefer-default-export": 2,
              "import/unambiguous": 0,

              ...("eslint-config-airbnb-base/imports" in override
                ? override["eslint-config-airbnb-base/imports"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Node
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/node") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/node",
            rules: {
              "callback-return": 0,
              "global-require": 2,
              "handle-callback-err": 0,
              "no-buffer-constructor": 2,
              "no-mixed-requires": [0, false],
              "no-new-require": 2,
              "no-path-concat": 2,
              "no-process-env": 0,
              "no-process-exit": 0,
              "no-restricted-modules": 0,
              "no-sync": 0,

              ...("eslint-config-airbnb-base/node" in override
                ? override["eslint-config-airbnb-base/node"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Strict
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/strict") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/strict",
            rules: {
              strict: [2, "never"],

              ...("eslint-config-airbnb-base/strict" in override
                ? override["eslint-config-airbnb-base/strict"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Style
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: jsdoc
    */
    ...(disable.includes("eslint-config-airbnb-base/style") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/style",
            rules: {
              "@stylistic/quote-props": 0,
              "@stylistic/semi": 0,
              "array-bracket-newline": [0, "consistent"],
              "array-bracket-spacing": [2, "never"],
              "array-element-newline": [0, { minItems: 3, multiline: true }],
              "block-spacing": [2, "always"],
              "brace-style": [2, "1tbs", { allowSingleLine: true }],
              camelcase: [
                2,
                { ignoreDestructuring: false, properties: "never" },
              ],
              "capitalized-comments": [
                0,
                "never",
                {
                  block: {
                    ignoreConsecutiveComments: true,
                    ignoreInlineComments: true,
                    ignorePattern: ".*",
                  },
                  line: {
                    ignoreConsecutiveComments: true,
                    ignoreInlineComments: true,
                    ignorePattern: ".*",
                  },
                },
              ],
              "comma-dangle": [
                2,
                {
                  arrays: "always-multiline",
                  exports: "always-multiline",
                  functions: "always-multiline",
                  imports: "always-multiline",
                  objects: "always-multiline",
                },
              ],
              "comma-spacing": [2, { after: true, before: false }],
              "comma-style": [
                2,
                "last",
                {
                  exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    NewExpression: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                  },
                },
              ],
              "computed-property-spacing": [2, "never"],
              "consistent-this": 0,
              "eol-last": [2, "always"],
              "func-call-spacing": [2, "never"],
              "func-name-matching": [
                0,
                "always",
                {
                  considerPropertyDescriptor: true,
                  includeCommonJSModuleExports: false,
                },
              ],
              "func-names": 1,
              "func-style": [0, "expression"],
              "function-call-argument-newline": [2, "consistent"],
              "function-paren-newline": [2, "multiline-arguments"],
              "id-denylist": 0,
              "id-length": 0,
              "id-match": 0,
              "implicit-arrow-linebreak": [2, "beside"],
              indent: [
                2,
                2,
                {
                  ArrayExpression: 1,
                  CallExpression: {
                    arguments: 1,
                  },
                  flatTernaryExpressions: false,
                  FunctionDeclaration: {
                    body: 1,
                    parameters: 1,
                  },
                  FunctionExpression: {
                    body: 1,
                    parameters: 1,
                  },
                  ignoreComments: false,
                  ignoredNodes: [
                    "JSXElement",
                    "JSXElement > *",
                    "JSXAttribute",
                    "JSXIdentifier",
                    "JSXNamespacedName",
                    "JSXMemberExpression",
                    "JSXSpreadAttribute",
                    "JSXExpressionContainer",
                    "JSXOpeningElement",
                    "JSXClosingElement",
                    "JSXFragment",
                    "JSXOpeningFragment",
                    "JSXClosingFragment",
                    "JSXText",
                    "JSXEmptyExpression",
                    "JSXSpreadChild",
                  ],
                  ImportDeclaration: 1,
                  ObjectExpression: 1,
                  outerIIFEBody: 1,
                  SwitchCase: 1,
                  VariableDeclarator: 1,
                },
              ],
              "jsdoc/require-jsdoc": 0,
              "jsx-quotes": [0, "prefer-double"],
              "key-spacing": [2, { afterColon: true, beforeColon: false }],
              "keyword-spacing": [
                2,
                {
                  after: true,
                  before: true,
                  overrides: {
                    case: { after: true },
                    return: { after: true },
                    throw: { after: true },
                  },
                },
              ],
              "line-comment-position": [
                0,
                {
                  applyDefaultPatterns: true,
                  ignorePattern: "",
                  position: "above",
                },
              ],
              "linebreak-style": [2, "unix"],
              "lines-around-comment": 0,
              "lines-around-directive": [
                2,
                {
                  after: "always",
                  before: "always",
                },
              ],
              "lines-between-class-members": [
                2,
                "always",
                { exceptAfterSingleLine: false },
              ],
              "logical-assignment-operators": [
                0,
                "always",
                {
                  enforceForIfStatements: true,
                },
              ],
              "max-depth": [0, 4],
              "max-len": [
                2,
                100,
                2,
                {
                  ignoreComments: false,
                  ignoreRegExpLiterals: true,
                  ignoreStrings: true,
                  ignoreTemplateLiterals: true,
                  ignoreUrls: true,
                },
              ],
              "max-lines": [
                0,
                {
                  max: 300,
                  skipBlankLines: true,
                  skipComments: true,
                },
              ],
              "max-lines-per-function": [
                0,
                {
                  IIFEs: true,
                  max: 50,
                  skipBlankLines: true,
                  skipComments: true,
                },
              ],
              "max-nested-callbacks": 0,
              "max-params": [0, 3],
              "max-statements": [0, 10],
              "max-statements-per-line": [0, { max: 1 }],
              "multiline-comment-style": [0, "starred-block"],
              "multiline-ternary": [0, "never"],
              "new-cap": [
                2,
                {
                  capIsNew: false,
                  capIsNewExceptions: [
                    "Immutable.Map",
                    "Immutable.Set",
                    "Immutable.List",
                  ],
                  newIsCap: true,
                  newIsCapExceptions: [],
                },
              ],
              "new-parens": 2,
              "newline-after-var": 0,
              "newline-before-return": 0,
              "newline-per-chained-call": [2, { ignoreChainWithDepth: 4 }],
              "no-array-constructor": 2,
              "no-bitwise": 2,
              "no-continue": 2,
              "no-inline-comments": 0,
              "no-lonely-if": 2,
              "no-mixed-operators": [
                2,
                {
                  allowSamePrecedence: false,
                  groups: [
                    ["%", "**"],
                    ["%", "+"],
                    ["%", "-"],
                    ["%", "*"],
                    ["%", "/"],
                    ["/", "*"],
                    ["&", "|", "<<", ">>", ">>>"],
                    ["==", "!=", "===", "!=="],
                    ["&&", "||"],
                  ],
                },
              ],
              "no-mixed-spaces-and-tabs": 2,
              "no-multi-assign": [2],
              "no-multiple-empty-lines": [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
              "no-negated-condition": 0,
              "no-nested-ternary": 2,
              "no-new-object": 2,
              "no-plusplus": 2,
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
                    "with is disallowed in strict mode because it makes code impossible to predict and optimize.",
                  selector: "WithStatement",
                },
              ],
              "no-spaced-func": 0,
              "no-tabs": 2,
              "no-ternary": 0,
              "no-trailing-spaces": [
                2,
                {
                  ignoreComments: false,
                  skipBlankLines: false,
                },
              ],
              "no-underscore-dangle": [
                2,
                {
                  allow: [],
                  allowAfterSuper: false,
                  allowAfterThis: false,
                  enforceInMethodNames: true,
                },
              ],
              "no-unneeded-ternary": [2, { defaultAssignment: false }],
              "no-whitespace-before-property": 2,
              "nonblock-statement-body-position": [
                2,
                "beside",
                { overrides: {} },
              ],
              "object-curly-newline": [
                2,
                {
                  ExportDeclaration: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                  },
                  ImportDeclaration: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                  },
                  ObjectExpression: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                  },
                  ObjectPattern: {
                    consistent: true,
                    minProperties: 4,
                    multiline: true,
                  },
                },
              ],
              "object-curly-spacing": [2, "always"],
              "object-property-newline": [
                2,
                {
                  allowAllPropertiesOnSameLine: true,
                },
              ],
              "one-var": [2, "never"],
              "one-var-declaration-per-line": [2, "always"],
              "operator-assignment": [2, "always"],
              "operator-linebreak": [
                2,
                "before",
                { overrides: { "=": "none" } },
              ],
              "padded-blocks": [
                2,
                {
                  blocks: "never",
                  classes: "never",
                  switches: "never",
                },
                {
                  allowSingleLineBlocks: true,
                },
              ],
              "padding-line-between-statements": 0,
              "prefer-exponentiation-operator": 2,
              "prefer-object-spread": 2,
              "prettier/prettier": 0,
              "quote-props": [
                2,
                "as-needed",
                { keywords: false, numbers: false, unnecessary: true },
              ],
              quotes: [2, "single", { avoidEscape: true }],
              semi: [2, "always"],
              "semi-spacing": [2, { after: true, before: false }],
              "semi-style": [2, "last"],
              "sort-keys": [0, "asc", { caseSensitive: false, natural: true }],
              "sort-vars": 0,
              "space-before-blocks": 2,
              "space-before-function-paren": [
                2,
                {
                  anonymous: "always",
                  asyncArrow: "always",
                  named: "never",
                },
              ],
              "space-in-parens": [2, "never"],
              "space-infix-ops": 2,
              "space-unary-ops": [
                2,
                {
                  nonwords: false,
                  words: true,
                },
              ],
              "spaced-comment": [
                2,
                "always",
                {
                  block: {
                    balanced: true,
                    exceptions: ["-", "+"],
                    markers: ["=", "!", ":", "::"],
                  },
                  line: {
                    exceptions: ["-", "+"],
                    markers: ["=", "!", "/"],
                  },
                },
              ],
              "switch-colon-spacing": [2, { after: true, before: false }],
              "template-tag-spacing": [2, "never"],
              "unicode-bom": [2, "never"],
              "wrap-regex": 0,

              ...("eslint-config-airbnb-base/style" in override
                ? override["eslint-config-airbnb-base/style"]
                : {}),
            },
          },
        ]),

    /*
      AirBnb Base - Variables
      24,995,458 monthly downloads
      Airbnb's base JS ESLint config, following our styleguide
      https://github.com/airbnb/javascript
      Requires: (None)
    */
    ...(disable.includes("eslint-config-airbnb-base/variables") ||
    threshold > 24_995_458
      ? []
      : [
          {
            files: jsFiles,
            name: "AirBnb Base/variables",
            rules: {
              "init-declarations": 0,
              "no-catch-shadow": 0,
              "no-delete-var": 2,
              "no-label-var": 2,
              "no-restricted-globals": [
                "error",
                {
                  message:
                    "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
                  name: "isFinite",
                },
                {
                  message:
                    "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
                  name: "isNaN",
                },
                ...[
                  "addEventListener",
                  "blur",
                  "close",
                  "closed",
                  "confirm",
                  "defaultStatus",
                  "defaultstatus",
                  "event",
                  "external",
                  "find",
                  "focus",
                  "frameElement",
                  "frames",
                  "history",
                  "innerHeight",
                  "innerWidth",
                  "length",
                  "location",
                  "locationbar",
                  "menubar",
                  "moveBy",
                  "moveTo",
                  "name",
                  "onblur",
                  "onerror",
                  "onfocus",
                  "onload",
                  "onresize",
                  "onunload",
                  "open",
                  "opener",
                  "opera",
                  "outerHeight",
                  "outerWidth",
                  "pageXOffset",
                  "pageYOffset",
                  "parent",
                  "print",
                  "removeEventListener",
                  "resizeBy",
                  "resizeTo",
                  "screen",
                  "screenLeft",
                  "screenTop",
                  "screenX",
                  "screenY",
                  "scroll",
                  "scrollbars",
                  "scrollBy",
                  "scrollTo",
                  "scrollX",
                  "scrollY",
                  "self",
                  "status",
                  "statusbar",
                  "stop",
                  "toolbar",
                  "top",
                ].map((g) => ({
                  message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
                  name: g,
                })),
              ],
              "no-shadow": 2,
              "no-shadow-restricted-names": 2,
              "no-undef": 2,
              "no-undef-init": 2,
              "no-undefined": 0,
              "no-unused-vars": [
                2,
                { args: "after-used", ignoreRestSiblings: true, vars: "all" },
              ],
              "no-use-before-define": [
                2,
                { classes: true, functions: true, variables: true },
              ],

              ...("eslint-config-airbnb-base/variables" in override
                ? override["eslint-config-airbnb-base/variables"]
                : {}),
            },
          },
        ]),

    /*
      Jest
      45,777,010 monthly downloads
      ESLint rules for Jest
      https://github.com/jest-community/eslint-plugin-jest#readme
      Requires: jest
    */
    ...(disable.includes("eslint-plugin-jest") || threshold > 45_777_010
      ? []
      : [
          {
            files: [...jsTestFiles, ...tsTestFiles],
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
            name: "Jest",
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
      58,838,504 monthly downloads
      Static AST checker for accessibility rules on JSX elements.
      https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
      Requires: jsx-a11y
    */
    ...(disable.includes("eslint-plugin-jsx-a11y") || threshold > 58_838_504
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "JSX Accessibility (JSX A11y)",
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
      61,192,748 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/json") ||
    threshold > 61_192_748
      ? []
      : [
          {
            files: jsonFiles,
            name: "Prettier/json",
            rules: {
              "jsonc/sort-keys": 0,
              "prettier/prettier": 2,
              ...("eslint-plugin-prettier/json" in override
                ? override["eslint-plugin-prettier/json"]
                : {}),
            },
          },
        ]),

    /*
      Prettier - MD
      61,192,748 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/md") || threshold > 61_192_748
      ? []
      : [
          {
            files: mdFiles,
            name: "Prettier/md",
            rules: {
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "prettier/prettier": [2, { parser: "markdown" }],

              ...("eslint-plugin-prettier/md" in override
                ? override["eslint-plugin-prettier/md"]
                : {}),
            },
          },
        ]),

    /*
      Prettier - Plugin
      61,192,748 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/plugin") ||
    threshold > 61_192_748
      ? []
      : [
          {
            files,
            name: "Prettier/plugin",
            rules: {
              "@stylistic/arrow-parens": 0,
              "@stylistic/brace-style": 0,
              "@stylistic/indent": 0,
              "@stylistic/indent-binary-ops": 0,
              "@stylistic/jsx-one-expression-per-line": 0,
              "@stylistic/member-delimiter-style": 0,
              "@stylistic/multiline-ternary": 0,
              "@stylistic/operator-linebreak": 0,
              "@stylistic/quote-props": 0,
              "@stylistic/quotes": 0,
              "@stylistic/semi": 0,
              "@stylistic/yield-star-spacing": 0,
              "comma-dangle": 0,
              curly: 0,
              "generator-star-spacing": 0,
              indent: 0,
              "jsx-quotes": 0,
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
      Prettier - YML
      61,192,748 monthly downloads
      Runs prettier as an eslint rule
      https://github.com/prettier/eslint-plugin-prettier#readme
      Requires: prettier
    */
    ...(disable.includes("eslint-plugin-prettier/yml") || threshold > 61_192_748
      ? []
      : [
          {
            files: ymlFiles,
            name: "Prettier/yml",
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
      React Hooks
      74,552,070 monthly downloads
      ESLint rules for React Hooks
      https://react.dev/
      Requires: react-hooks
    */
    ...(disable.includes("eslint-plugin-react-hooks") || threshold > 74_552_070
      ? []
      : [
          {
            files: [...jsxFiles, ...tsxFiles],
            name: "React Hooks",
            rules: {
              ...reactHooks.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
              ...("eslint-plugin-react-hooks" in override
                ? override["eslint-plugin-react-hooks"]
                : {}),
            },
          },
        ]),

    /*
      React
      81,569,942 monthly downloads
      React specific linting rules for ESLint
      https://github.com/jsx-eslint/eslint-plugin-react
      Requires: react
    */
    ...(disable.includes("eslint-plugin-react") || threshold > 81_569_942
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
            name: "React",
            rules: {
              ...react.configs.recommended.rules,
              "functional/functional-parameters": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
              "functional/no-throw-statements": 0,
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
      89,329,420 monthly downloads
      Turns off all rules that are unnecessary or might conflict with Prettier.
      https://github.com/prettier/eslint-config-prettier#readme
      Requires: prettier, @typescript-eslint, @babel, unicorn, react, @stylistic
    */
    ...(disable.includes("eslint-config-prettier") || threshold > 89_329_420
      ? []
      : [
          {
            files,
            name: "Prettier",
            rules: {
              ...prettierConfig.rules,
              "@next/next/no-html-link-for-pages": 0,
              "antfu/consistent-chaining": 0,
              "prettier/prettier": 2,
              ...("eslint-config-prettier" in override
                ? override["eslint-config-prettier"]
                : {}),
            },
          },
        ]),

    /*
      ESLint
      126,421,712 monthly downloads
      ESLint JavaScript language implementation
      https://eslint.org
      Requires: (None)
    */
    ...(disable.includes("@eslint/js") || threshold > 126_421_712
      ? []
      : [
          {
            files: jsFiles,
            name: "ESLint",
            rules: {
              ...eslint.configs.recommended.rules,
              "@next/next/no-html-link-for-pages": 0,
              ...("@eslint/js" in override ? override["@eslint/js"] : {}),
            },
          },
        ]),

    /*
      Import - ts
      134,405,660 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import/ts") ||
    disable.includes("eslint-import-resolver-typescript/ts") ||
    threshold > 134_405_660
      ? []
      : [
          {
            files: tsFiles,
            name: "Import/ts",
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
      134,405,660 monthly downloads
      Import with sanity. / This plugin adds `TypeScript` support to `eslint-plugin-import`
      https://github.com/import-js/eslint-plugin-import / https://github.com/import-js/eslint-import-resolver-typescript#readme
      Requires: import
    */
    ...(disable.includes("eslint-plugin-import") ||
    disable.includes("eslint-import-resolver-typescript") ||
    threshold > 134_405_660
      ? []
      : [
          {
            files,
            name: "Import",
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
      155,911,230 monthly downloads
      Tooling which enables you to use TypeScript with ESLint / TypeScript plugin for ESLint
      https://typescript-eslint.io/packages/typescript-eslint / https://typescript-eslint.io/packages/eslint-plugin
      Requires: @typescript-eslint
    */
    ...(disable.includes("typescript-eslint") ||
    disable.includes("@typescript-eslint/eslint-plugin") ||
    threshold > 155_911_230
      ? []
      : [
          {
            files: tsFiles,
            name: "TypeScript",
            rules: {
              ...tseslint.configs.recommendedTypeChecked[1].rules,
              ...tseslint.configs.recommendedTypeChecked[2].rules,
              "@next/next/no-html-link-for-pages": 0,
              "@typescript-eslint/no-misused-spread": 0,
              "@typescript-eslint/no-use-before-define": 0,
              "functional/no-classes": 0,
              "functional/no-conditional-statements": 0,
              "functional/no-expression-statements": 0,
              "functional/no-return-void": 0,
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
      1,106,654 monthly downloads
      ESLint Plugin for MDX
      https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx
      Requires: (None)
    */
    ...(disable.includes("eslint-plugin-mdx/code-blocks") ||
    threshold > 1_106_654
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
            name: "MDX/code-blocks",
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
      2,028,518 monthly downloads
      An ESLint plugin to lint JavaScript in Markdown code fences.
      https://github.com/eslint/eslint-plugin-markdown#readme
      Requires: markdown
    */
    ...(disable.includes("eslint-plugin-markdown") || threshold > 2_028_518
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
            name: "Markdown",
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
