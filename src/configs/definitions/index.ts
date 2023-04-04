import airbnb from "./airbnb";
import babel from "./babel";
import comments from "./comments";
import compat from "./compat";
import createReactApp from "./create-react-app";
import eslint from "./eslint";
import flowtype from "./flowtype";
import functional from "./functional";
import google from "./google";
import index from "./import";
import importSort from "./import-sort";
import jest from "./jest";
import jsdoc from "./jsdoc";
import jsxA11y from "./jsx-a11y";
import nextjs from "./nextjs";
import node from "./node";
import prettier from "./prettier";
import promises from "./promises";
import react from "./react";
import reactHooks from "./react-hooks";
import reactNative from "./react-native";
import reactNativeConfig from "./react-native-config";
import reactPerf from "./react-perf";
import security from "./security";
import shopify from "./shopify";
import sonajs from "./sonarjs";
import sort from "./sort-class";
import standard from "./standard";
import standardJsx from "./standard-jsx";
import standardReact from "./standard-react";
import tsdoc from "./tsdoc";
import typescript from "./typescript";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import xo from "./xo";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Config {
  packages: Array<{
    name: string;
    package: string;
  }>;
  requiresImport: boolean;
  name: string;
  definitions: `${"..." | "{"}${string}}`;
  rules?: string;
}

export default [
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
  typescript,
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
];
