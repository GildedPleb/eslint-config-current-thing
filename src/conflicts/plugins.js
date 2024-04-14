// PathMark: ./src/conflicts/plugins.js
/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable id-length */

/*
  This file is fully generated, to edit it change ./generate-conflicts.ts
*/

// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
// @ts-ignore yes, we need to ignore every import for this to run
import babelPlugin from "@babel/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import { rules as emotion } from "@emotion/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import comments from "@eslint-community/eslint-plugin-eslint-comments";
// @ts-ignore yes, we need to ignore every import for this to run
import { rules as graphQLRules } from "@graphql-eslint/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import nextjs from "@next/eslint-plugin-next";
// @ts-ignore yes, we need to ignore every import for this to run
import rnPlugin from "@react-native/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import shopify from "@shopify/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import stylistic from "@stylistic/eslint-plugin";
// @ts-ignore yes, we need to ignore every import for this to run
import { Linter } from "eslint";
// @ts-ignore yes, we need to ignore every import for this to run
import comp from "eslint-plugin-compat";
// @ts-ignore yes, we need to ignore every import for this to run
import cssModules from "eslint-plugin-css-modules";
// @ts-ignore yes, we need to ignore every import for this to run
import cypress from "eslint-plugin-cypress";
// @ts-ignore yes, we need to ignore every import for this to run
import es from "eslint-plugin-es";
// @ts-ignore yes, we need to ignore every import for this to run
import esX from "eslint-plugin-es-x";
// @ts-ignore yes, we need to ignore every import for this to run
import commentsOld from "eslint-plugin-eslint-comments";
// @ts-ignore yes, we need to ignore every import for this to run
import flowtype from "eslint-plugin-flowtype";
// @ts-ignore yes, we need to ignore every import for this to run
import ftFlow from "eslint-plugin-ft-flow";
// @ts-ignore yes, we need to ignore every import for this to run
import functional from "eslint-plugin-functional";
// @ts-ignore yes, we need to ignore every import for this to run
import header from "eslint-plugin-header";
// @ts-ignore yes, we need to ignore every import for this to run
import html from "eslint-plugin-html";
// @ts-ignore yes, we need to ignore every import for this to run
import i18next from "eslint-plugin-i18next";
// @ts-ignore yes, we need to ignore every import for this to run
import importPlugin from "eslint-plugin-import";
// @ts-ignore yes, we need to ignore every import for this to run
import jest from "eslint-plugin-jest";
// @ts-ignore yes, we need to ignore every import for this to run
import jestDom from "eslint-plugin-jest-dom";
// @ts-ignore yes, we need to ignore every import for this to run
import jestFormatting from "eslint-plugin-jest-formatting";
// @ts-ignore yes, we need to ignore every import for this to run
import jsdoc from "eslint-plugin-jsdoc";
// @ts-ignore yes, we need to ignore every import for this to run
import jsonc from "eslint-plugin-jsonc";
// @ts-ignore yes, we need to ignore every import for this to run
import jsxA11y from "eslint-plugin-jsx-a11y";
// @ts-ignore yes, we need to ignore every import for this to run
import markdown from "eslint-plugin-markdown";
// @ts-ignore yes, we need to ignore every import for this to run
import mocha from "eslint-plugin-mocha";
// @ts-ignore yes, we need to ignore every import for this to run
import nNode from "eslint-plugin-n";
// @ts-ignore yes, we need to ignore every import for this to run
import noOnlyTest from "eslint-plugin-no-only-tests";
// @ts-ignore yes, we need to ignore every import for this to run
import unsanitized from "eslint-plugin-no-unsanitized";
// @ts-ignore yes, we need to ignore every import for this to run
import node from "eslint-plugin-node";
// @ts-ignore yes, we need to ignore every import for this to run
import perfectionist from "eslint-plugin-perfectionist";
// @ts-ignore yes, we need to ignore every import for this to run
import playwright from "eslint-plugin-playwright";
// @ts-ignore yes, we need to ignore every import for this to run
import preferArrow from "eslint-plugin-prefer-arrow";
// @ts-ignore yes, we need to ignore every import for this to run
import prettier from "eslint-plugin-prettier";
// @ts-ignore yes, we need to ignore every import for this to run
import promise from "eslint-plugin-promise";
// @ts-ignore yes, we need to ignore every import for this to run
import react from "eslint-plugin-react";
// @ts-ignore yes, we need to ignore every import for this to run
import reactHooks from "eslint-plugin-react-hooks";
// @ts-ignore yes, we need to ignore every import for this to run
import reactNativeIndie from "eslint-plugin-react-native";
// @ts-ignore yes, we need to ignore every import for this to run
import reactPerf from "eslint-plugin-react-perf";
// @ts-ignore yes, we need to ignore every import for this to run
import reactRefresh from "eslint-plugin-react-refresh";
// @ts-ignore yes, we need to ignore every import for this to run
import regexp from "eslint-plugin-regexp";
// @ts-ignore yes, we need to ignore every import for this to run
import security from "eslint-plugin-security";
// @ts-ignore yes, we need to ignore every import for this to run
import importSort from "eslint-plugin-simple-import-sort";
// @ts-ignore yes, we need to ignore every import for this to run
import sonarjs from "eslint-plugin-sonarjs";
// @ts-ignore yes, we need to ignore every import for this to run
import sortClassMembers from "eslint-plugin-sort-class-members";
// @ts-ignore yes, we need to ignore every import for this to run
import storybook from "eslint-plugin-storybook";
// @ts-ignore yes, we need to ignore every import for this to run
import tailwindcss from "eslint-plugin-tailwindcss";
// @ts-ignore yes, we need to ignore every import for this to run
import testingLibrary from "eslint-plugin-testing-library";
// @ts-ignore yes, we need to ignore every import for this to run
import tsdoc from "eslint-plugin-tsdoc";
// @ts-ignore yes, we need to ignore every import for this to run
import unicorn from "eslint-plugin-unicorn";
// @ts-ignore yes, we need to ignore every import for this to run
import unusedImports from "eslint-plugin-unused-imports";
// @ts-ignore yes, we need to ignore every import for this to run
import youDontNeedLodash from "eslint-plugin-you-dont-need-lodash-underscore";
import tseslint from "typescript-eslint";

const linter = new Linter();
const allRules = linter.getRules();

const plugins = {
  "@babel": babelPlugin,
  "@emotion": { rules: emotion },
  "@eslint-community/eslint-comments": comments,
  "@graphql-eslint": { rules: graphQLRules },
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
  html,
  i18next,
  import: importPlugin,
  jest,
  "jest-dom": jestDom,
  "jest-formatting": jestFormatting,
  jsdoc,
  jsonc,
  "jsx-a11y": jsxA11y,
  markdown,
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
};

const fixableRules = new Set();

for (const [name, definition] of allRules.entries())
  if (definition?.meta?.fixable) fixableRules.add(name);

for (const [namespace, ruleDefinition] of Object.entries(plugins))
  if (ruleDefinition.rules)
    for (const [name, definition] of Object.entries(ruleDefinition.rules))
      if (definition?.meta?.fixable) fixableRules.add(`${namespace}/${name}`);

export default fixableRules;

// EOF
