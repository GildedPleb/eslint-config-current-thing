// PathMark: ./src/conflicts/configs/ts-config.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import { defineFlatConfig } from "eslint-define-config";
import globals from "globals";
import tseslint from "typescript-eslint";

const filename = fileURLToPath(import.meta.url);
const baseDirectory = path.dirname(filename);
const compat = new FlatCompat({ baseDirectory });

const jsxFiles = ["**/*.jsx"];
const tsxFiles = ["**/*.tsx"];
const jsFiles = ["**/*.js", ...jsxFiles, "**/*.mjs", "**/*.cjs"];
const tsFiles = ["**/*.ts", ...tsxFiles, "**/*.mts", "**/*.cts"];
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
      },
    },
    /* PARSERS */
    /*
    TypeScript
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
        "@typescript-eslint": tseslint.plugin,
      },
    },

    /*
      TypeScript
      1,000,000 monthly downloads
      Purply for generating conflicts
      www.nope.com
      Requires: @typescript-eslint
    */
    ...(disable.includes("typescript-eslint") ||
    disable.includes("@typescript-eslint/eslint-plugin") ||
    threshold > 1_000_000
      ? []
      : [
          {
            files: tsFiles,
            rules: {
              ...tseslint.configs.recommendedTypeChecked[1].rules,
              ...tseslint.configs.recommendedTypeChecked[2].rules,
              ...("typescript-eslint" in override
                ? override["typescript-eslint"]
                : {}),
              ...("@typescript-eslint/eslint-plugin" in override
                ? override["@typescript-eslint/eslint-plugin"]
                : {}),
            },
          },
        ]),
  ]);

export default configGen();
// EOF
