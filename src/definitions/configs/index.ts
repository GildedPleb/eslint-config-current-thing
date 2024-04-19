// PathMark: ./src/definitions/configs/index.ts
import { type Namespace } from "../plugins";
import airbnbBaseBP from "./airbnb-base-best-practices";
import airbnbBaseErrors from "./airbnb-base-errors";
import airbnbBaseEs6 from "./airbnb-base-es6";
import airbnbBaseImports from "./airbnb-base-imports";
import airbnbBaseNode from "./airbnb-base-node";
import airbnbBaseStrict from "./airbnb-base-strict";
import airbnbBaseStyle from "./airbnb-base-style";
import airbnbBaseVariables from "./airbnb-base-variables";
import airbnbReact from "./airbnb-react";
import airbnbReactA11y from "./airbnb-react-a11y";
import airbnbReactHooks from "./airbnb-react-hooks";
import airbnbTs from "./airbnb-ts";
import ava from "./ava";
import chai from "./chai";
import comments from "./comments";
import compat from "./compat";
import createReactApp from "./create-react-app";
import createReactAppJest from "./create-react-app-jest";
import createReactAppTs from "./create-react-app-ts";
import cssModules from "./css-modules";
import cypress from "./cypress";
import emotion from "./emotion";
import es from "./es";
import eslint from "./eslint";
import functional from "./functional";
import functionalComponents from "./functional-components";
import functionalStylistic from "./functional-stylistic";
import functionalTs from "./functional-ts";
import google from "./google";
import graphql from "./graphql";
import i18next from "./i18next";
import index from "./import";
import importSort from "./import-sort";
import importTs from "./import-ts";
import jasmine from "./jasmine";
import jest from "./jest";
import jestDom from "./jest-dom";
import jestFormatting from "./jest-formatting";
import jsdoc from "./jsdoc";
import jsdocTs from "./jsdoc-ts";
import jsonc from "./jsonc";
import jsxA11y from "./jsx-a11y";
import md from "./md";
import mdx from "./mdx";
import mdxCode from "./mdx-code";
import mocha from "./mocha";
import nextjs from "./nextjs";
import noOnlyTest from "./no-only-test";
import noUseExtendNative from "./no-use-extend-native";
import node from "./node";
import perfectionist from "./perfectionist";
import playwright from "./playwright";
import preferArrow from "./prefer-arrow";
import prettier from "./prettier";
import prettierJson from "./prettier-json";
import prettierMd from "./prettier-md";
import prettierYml from "./prettier-yml";
import promises from "./promises";
import react from "./react";
import reactHooks from "./react-hooks";
import reactNative from "./react-native";
import reactNativeFt from "./react-native-ft";
import reactNativeIndie from "./react-native-indie";
import reactNativeJest from "./react-native-jest";
import reactNativePlug from "./react-native-plug";
import reactNativeTs from "./react-native-ts";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import regexp from "./regexp";
import rxjs from "./rxjs";
import sdl from "./sdl";
import sdlNode from "./sdl-node";
import sdlReact from "./sdl-react";
import sdlTs from "./sdl-ts";
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
import shopifyTsTypeCheck from "./shopify-ts-typecheck";
import sonarjs from "./sonarjs";
import sortClass from "./sort-class";
import sortKeys from "./sort-keys";
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
import yml from "./yml";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Config {
  conflicts?: Record<string, string[]>;
  contextOverride?: boolean;
  definitions: `${"..." | "{"}${string}${")" | "}"}`;
  id: string;
  name: string;
  nameSecondary?: string;
  packages: Array<{
    declaredAs: string;
    package: string;
    requiresImport: boolean;
    subModule?: string;
  }>;
  requiredPlugins: Namespace[];
  rules?: string;
}

const configs: Config[] = [
  airbnbBaseBP,
  airbnbBaseErrors,
  airbnbBaseEs6,
  airbnbBaseImports,
  airbnbBaseNode,
  airbnbBaseStrict,
  airbnbBaseStyle,
  airbnbBaseVariables,
  airbnbReact,
  airbnbReactA11y,
  airbnbReactHooks,
  airbnbTs,
  chai,
  comments,
  compat,
  createReactApp,
  createReactAppJest,
  createReactAppTs,
  cssModules,
  cypress,
  emotion,
  es,
  eslint,
  functional,
  functionalStylistic,
  functionalTs,
  google,
  graphql,
  i18next,
  importSort,
  importTs,
  index,
  jest,
  jestDom,
  jestFormatting,
  jsdoc,
  jsdocTs,
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
  reactNativeFt,
  reactNativeIndie,
  reactNativePlug,
  reactNativeTs,
  reactNativeJest,
  reactPerf,
  reactRefresh,
  regexp,
  sdl,
  sdlNode,
  sdlReact,
  sdlTs,
  security,
  shopifyCore,
  shopifyEsnext,
  shopifyJest,
  shopifyNode,
  shopifyPolaris,
  shopifyPrettier,
  shopifyPrettierTs,
  shopifyReact,
  shopifyReactTest,
  shopifyReactTs,
  shopifyTs,
  shopifyTsTypeCheck,
  sonarjs,
  sortClass,
  sortKeys,
  standard,
  standardJsx,
  standardReact,
  standardTs,
  storybook,
  storybookMain,
  stylistic,
  tailwindConfig,
  testingLibrary,
  ts,
  tsdoc,
  unicorn,
  unsanitized,
  unusedImports,
  xo,
  yml,
  youDontNeedLodash,
  prettierMd,
  prettierYml,
  prettierJson,
  mdx,
  mdxCode,
  rxjs,
  jasmine,
  ava,
  functionalComponents,
  noUseExtendNative,
];

export default configs;
// EOF
