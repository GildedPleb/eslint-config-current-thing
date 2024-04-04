// PathMark: ./src/conflicts/configs/react-hooks-config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate.ts
  Generated on 4/3/2024
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import babelPlugin from "@babel/eslint-plugin";
import { rules as emotion } from "@emotion/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import comments from "@eslint-community/eslint-plugin-eslint-comments";
import nextjs from "@next/eslint-plugin-next";
import rnPlugin from "@react-native/eslint-plugin";
import shopify from "@shopify/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import { defineFlatConfig } from "eslint-define-config";
import comp from "eslint-plugin-compat";
import cssModules from "eslint-plugin-css-modules";
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
import tseslint from "typescript-eslint";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const jsFiles = ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];
const files = [...jsFiles, ...tsFiles];

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
        parser: tseslint.parser,
        parserOptions: {
          ecmaVersion: "latest",
          project: true,
          sourceType: "module",
        },
      },
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
        "no-unsanitized": unsanitized,
        node,
        perfectionist,
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

    /*
      React Hooks
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: react-hooks
    */
    ...(disable.includes("eslint-plugin-react-hooks") || threshold > 1_000_000
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
  ]);

export default configGen();
// EOF
