// PathMark: ./src/definitions/plugins/index.ts

import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import cssModules from "./css-modules";
import deprecation from "./deprecation";
import emotion from "./emotion";
import es from "./es";
import flowtype from "./flowtype";
import functional from "./functional";
import header from "./header";
import i18next from "./i18next";
import importPlugin from "./import";
import importSort from "./import-sort";
import jest from "./jest";
import jestDom from "./jest-dom";
import jestFormatting from "./jest-formatting";
import jsdoc from "./jsdoc";
import jsxA11y from "./jsx-a11y";
import nextjs from "./nextjs";
import noOnlyTest from "./no-only-test";
import node from "./node";
import perfectionist from "./perfectionist";
import prettier from "./prettier";
import promises from "./promises";
import react from "./react";
import reactHooks from "./react-hooks";
import reactNative from "./react-native";
import reactNativeIndie from "./react-native-indie";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import regexp from "./regexp";
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
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Plugin {
  name: string;
  packages: Array<{
    key: string;
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
}

const plugins: Plugin[] = [
  babel,
  comments,
  compat,
  cssModules,
  deprecation,
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
];

export default plugins;
// EOF
