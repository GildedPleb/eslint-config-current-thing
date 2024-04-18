// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import chai from "./chai";
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
import jasmine from "./jasmine";
import jest from "./jest";
import jestDom from "./jest-dom";
import jestFormatting from "./jest-formatting";
import jsdoc from "./jsdoc";
import jsonc from "./jsonc";
import jsxA11y from "./jsx-a11y";
import md from "./md";
import mdx from "./mdx";
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
import rxjs from "./rxjs";
import sdl from "./sdl";
import security from "./security";
import shopify from "./shopify";
import shopifyJest from "./shopify-jest";
import shopifyTs from "./shopify-ts";
import sonarjs from "./sonarjs";
import sortClass from "./sort-class";
import sortKeys from "./sort-keys";
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
    mappedAs: string;
    namespace: N;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins = [
  babel,
  chai,
  comments,
  compat,
  cssModules,
  cypress,
  emotion,
  es,
  flowtype,
  functional,
  graphql,
  header,
  html,
  i18next,
  importPlugin,
  importSort,
  jest,
  jestDom,
  jestFormatting,
  jsdoc,
  jsonc,
  jsxA11y,
  md,
  mocha,
  nextjs,
  node,
  noOnlyTest,
  perfectionist,
  playwright,
  preferArrow,
  prettier,
  promises,
  react,
  reactHooks,
  reactNative,
  reactNativeIndie,
  reactPerf,
  reactRefresh,
  regexp,
  sdl,
  security,
  shopify,
  shopifyJest,
  shopifyTs,
  sonarjs,
  sortClass,
  sortKeys,
  storybook,
  stylistic,
  tailwindPlugin,
  testingLibrary,
  ts,
  tsdoc,
  unicorn,
  unsanitized,
  unusedImports,
  yml,
  youDontNeedLodash,
  mdx,
  rxjs,
  jasmine,
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
