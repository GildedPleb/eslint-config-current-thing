// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import cssModules from "./css-modules";
import cypress from "./cypress";
import emotion from "./emotion";
import es from "./es";
import flowtype from "./flowtype";
import functional from "./functional";
import graphql from "./graphql";
import header from "./header";
import html from "./html";
import i18next from "./i18next";
import importPlugin from "./import";
import importSort from "./import-sort";
import jest from "./jest";
import jestDom from "./jest-dom";
import jestFormatting from "./jest-formatting";
import jsdoc from "./jsdoc";
import jsonc from "./jsonc";
import jsxA11y from "./jsx-a11y";
import md from "./md";
import mocha from "./mocha";
import nextjs from "./nextjs";
import noOnlyTest from "./no-only-test";
import node from "./node";
import perfectionist from "./perfectionist";
import playwright from "./playwright";
import preferArrow from "./prefer-arrow";
import prettier from "./prettier";
import promises from "./promises";
import react from "./react";
import reactHooks from "./react-hooks";
import reactNative from "./react-native";
import reactNativeIndie from "./react-native-indie";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import regexp from "./regexp";
import sdl from "./sdl";
import security from "./security";
import shopify from "./shopify";
import shopifyJest from "./shopify-jest";
import shopifyTs from "./shopify-ts";
import sonarjs from "./sonarjs";
import sortClass from "./sort-class";
import storybook from "./storybook";
import stylistic from "./stylistic";
import tailwindPlugin from "./tailwind-plugin";
import testingLibrary from "./testing-library";
import ts from "./ts";
import tsdoc from "./tsdoc";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import unusedImports from "./unused-imports";
import yml from "./yml";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Plugin<N extends string> {
  name: string;
  packages: Array<{
    declaredAs: string;
    namespace: N;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins = [
  babel,
  comments,
  compat,
  cssModules,
  emotion,
  es,
  flowtype,
  functional,
  header,
  i18next,
  importSort,
  importPlugin,
  jestDom,
  jestFormatting,
  jest,
  jsdoc,
  jsxA11y,
  nextjs,
  noOnlyTest,
  node,
  perfectionist,
  prettier,
  promises,
  reactHooks,
  reactNative,
  reactNativeIndie,
  reactPerf,
  reactRefresh,
  react,
  regexp,
  security,
  shopify,
  shopifyJest,
  shopifyTs,
  sonarjs,
  sortClass,
  storybook,
  stylistic,
  tailwindPlugin,
  testingLibrary,
  ts,
  tsdoc,
  unicorn,
  unsanitized,
  unusedImports,
  youDontNeedLodash,
  cypress,
  jsonc,
  mocha,
  playwright,
  preferArrow,
  md,
  graphql,
  html,
  sdl,
  yml,
];

type ExtractNamespace<T> =
  T extends Array<{ packages: infer U }>
    ? U extends Array<{ namespace: infer V }>
      ? V
      : never
    : never;
export type Namespace = ExtractNamespace<typeof plugins>;

export default plugins;
// EOF
