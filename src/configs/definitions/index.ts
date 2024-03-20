// PathMark: ./src/configs/definitions/index.ts
import airbnb from "./airbnb";
import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import createReactApp from "./create-react-app";
import es from "./es";
import eslint from "./eslint";
import flowtype from "./flowtype";
import functional from "./functional";
import google from "./google";
import header from "./header";
import index from "./import";
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
import reactNativeConfig from "./react-native-config";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import regexp from "./regexp";
import security from "./security";
import shopify from "./shopify";
import sonajs from "./sonarjs";
import sort from "./sort-class";
import standard from "./standard";
import standardJsx from "./standard-jsx";
import standardReact from "./standard-react";
import storybook from "./storybook";
import styleistic from "./stylistic";
import tailwindConfig from "./tailwind-config";
import ts from "./ts";
import tsdoc from "./tsdoc";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import vue from "./vue";
import xo from "./xo";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Config {
  definitions: `${"..." | "{"}${string}${")" | "}"}`;
  name: string;
  packages: Array<{
    name: string;
    package: string;
    requiresImport: boolean;
  }>;
  rules?: string;
}

const packages: Config[] = [
  xo,
  comments,
  security,
  tsdoc,
  sonajs,
  node,
  unicorn,
  jsdoc,
  standard,
  nextjs,
  promises,
  airbnb,
  prettier,
  index,
  compat,
  functional,
  babel,
  shopify,
  sort,
  youDontNeedLodash,
  google,
  importSort,
  eslint,
  unsanitized,
  createReactApp,
  react,
  reactHooks,
  jsxA11y,
  flowtype,
  standardReact,
  reactPerf,
  reactNative,
  reactNativeConfig,
  jest,
  standardJsx,
  jestFormatting,
  jestDom,
  ts,
  reactRefresh,
  vue,
  styleistic,
  tailwindConfig,
  regexp,
  storybook,
  perfectionist,
  noOnlyTest,
  es,
  header,
];

export default packages;
// EOF
