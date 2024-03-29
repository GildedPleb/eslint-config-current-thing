// PathMark: ./src/definitions/configs/index.ts
import airbnb from "./airbnb";
import airbnbBase from "./airbnb-base";
import airbnbTs from "./airbnb-ts";
import comments from "./comments";
import compat from "./compat";
import createReactApp from "./create-react-app";
import createReactAppJest from "./create-react-app-jest";
import createReactAppTs from "./create-react-app-ts";
import cssModules from "./css-modules";
import emotion from "./emotion";
import es from "./es";
import eslint from "./eslint";
import functional from "./functional";
import functionalStylistic from "./functional-stylistic";
import functionalTs from "./functional-ts";
import google from "./google";
import i18next from "./i18next";
import index from "./import";
import importSort from "./import-sort";
import importTs from "./import-ts";
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
import reactNativeFt from "./react-native-ft";
import reactNativeIndie from "./react-native-indie";
import reactNativePlug from "./react-native-plug";
import reactNativeTs from "./react-native-ts";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import regexp from "./regexp";
import security from "./security";
import shopifyCore from "./shopify-core";
import shopifyEsnext from "./shopify-esnext";
import shopifyJest from "./shopify-jest";
import shopifyNode from "./shopify-node";
import shopifyPolaris from "./shopify-polaris";
import shopifyPrettier from "./shopify-prettier";
import shopifyPrettierTs from "./shopify-prettier-ts";
import shopifyReact from "./shopify-react";
import shopifyReactTest from "./shopify-react-test";
import shopifyReactTs from "./shopify-react-ts";
import shopifyTs from "./shopify-ts";
import shopifyTsTypeCheck from "./shopify-ts-type-check";
import sonarjs from "./sonarjs";
import standard from "./standard";
import standardJsx from "./standard-jsx";
import standardReact from "./standard-react";
import standardTs from "./standard-ts";
import storybook from "./storybook";
import storybookMain from "./storybook-main";
import stylistic from "./stylistic";
import tailwindConfig from "./tailwind-config";
import testingLibrary from "./testing-library";
import ts from "./ts";
import tsdoc from "./tsdoc";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import unusedImports from "./unused-imports";
import xo from "./xo";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Config {
  conflicts?: Record<string, string[]>;
  definitions: `${"..." | "{"}${string}${")" | "}"}`;
  id: string;
  name: string;
  nameSecondary?: string;
  packages: Array<{
    name: string;
    package: string;
    requiresImport: boolean;
    subModule?: string;
  }>;
  requiredPlugins: string[];
  rules?: string;
}

const configs: Config[] = [
  xo,
  comments,
  security,
  tsdoc,
  sonarjs,
  node,
  unicorn,
  jsdoc,
  standard,
  nextjs,
  promises,
  prettier,
  index,
  compat,
  functional,
  shopifyTs,
  youDontNeedLodash,
  google,
  importSort,
  eslint,
  unsanitized,
  createReactApp,
  react,
  reactHooks,
  jsxA11y,
  standardReact,
  reactPerf,
  reactNative,
  reactNativeIndie,
  jest,
  standardJsx,
  jestFormatting,
  jestDom,
  ts,
  reactRefresh,
  stylistic,
  tailwindConfig,
  regexp,
  storybook,
  perfectionist,
  noOnlyTest,
  es,
  i18next,
  emotion,
  cssModules,
  airbnb,
  airbnbBase,
  airbnbTs,
  createReactAppTs,
  createReactAppJest,
  testingLibrary,
  shopifyCore,
  shopifyEsnext,
  shopifyJest,
  reactNativeFt,
  reactNativePlug,
  reactNativeTs,
  shopifyNode,
  shopifyPrettier,
  shopifyPrettierTs,
  shopifyPolaris,
  shopifyReact,
  shopifyReactTs,
  shopifyReactTest,
  shopifyTsTypeCheck,
  standardTs,
  storybookMain,
  unusedImports,
  functionalStylistic,
  functionalTs,
  importTs,
];

export default configs;
// EOF
