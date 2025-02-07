// PathMark: ./src/definitions/configs/index.ts
import type { Namespace } from "../plugins";
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
import formatJs from "./formatjs";
import functional from "./functional";
import functionalComponents from "./functional-components";
import functionalStylistic from "./functional-stylistic";
import functionalTs from "./functional-ts";
import google from "./google";
import graphql from "./graphql";
import gts from "./gts";
import gtsTs from "./gts-ts";
import i18next from "./i18next";
import index from "./import";
import importSort from "./import-sort";
import importTs from "./import-ts";
import importX from "./import-x";
import importXReact from "./import-x-react";
import importXReactNative from "./import-x-react-native";
import importXTs from "./import-x-ts";
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
import nextjsConfig from "./nextjs-config";
import noOnlyTest from "./no-only-test";
import noRelativeImport from "./no-relative-import";
import noUseExtendNative from "./no-use-extend-native";
import node from "./node";
import perfectionist from "./perfectionist";
import playwright from "./playwright";
import preferArrow from "./prefer-arrow";
import prettier from "./prettier";
import prettierJson from "./prettier-json";
import prettierMd from "./prettier-md";
import prettierPackageJson from "./prettier-package-json";
import prettierPlugin from "./prettier-plugin";
import prettierTailwind from "./prettier-tailwind";
import prettierYml from "./prettier-yml";
import promises from "./promises";
import react from "./react";
import reactCompiler from "./react-compiler";
import reactDom from "./react-dom";
import reactHooks from "./react-hooks";
import reactHooksExtra from "./react-hooks-extra";
import reactNamingConvention from "./react-naming-convention";
import reactNative from "./react-native";
import reactNativeFt from "./react-native-ft";
import reactNativeIndie from "./react-native-indie";
import reactNativeJest from "./react-native-jest";
import reactNativePlug from "./react-native-plug";
import reactNativeTs from "./react-native-ts";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import reactX from "./react-x";
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
import tanstack from "./tanstack";
import testingLibrary from "./testing-library";
import ts from "./ts";
import tsdoc from "./tsdoc";
import turbo from "./turbo";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import unusedImports from "./unused-imports";
import vitest from "./vitest";
import vitestTs from "./vitest-ts";
import xo from "./xo";
import yml from "./yml";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Config {
  conflicts?: Record<string, string[]>;
  contextOverride?: boolean;
  definitions: `${"..." | "{"}${string}${")" | "}"}`;
  ejected: boolean;
  enabled: boolean;
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
  ...new Set([
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
    ava,
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
    formatJs,
    functional,
    functionalComponents,
    functionalStylistic,
    functionalTs,
    google,
    graphql,
    gts,
    gtsTs,
    i18next,
    importSort,
    importTs,
    importX,
    importXReact,
    importXReactNative,
    importXTs,
    index,
    jasmine,
    jest,
    jestDom,
    jestFormatting,
    jsdoc,
    jsdocTs,
    jsonc,
    jsxA11y,
    md,
    mdx,
    mdxCode,
    mocha,
    nextjs,
    nextjsConfig,
    node,
    noOnlyTest,
    noRelativeImport,
    noUseExtendNative,
    perfectionist,
    playwright,
    preferArrow,
    prettier,
    prettierJson,
    prettierMd,
    prettierPackageJson,
    prettierPlugin,
    prettierTailwind,
    prettierYml,
    promises,
    react,
    reactCompiler,
    reactDom,
    reactHooks,
    reactHooksExtra,
    reactNamingConvention,
    reactNative,
    reactNativeFt,
    reactNativeIndie,
    reactNativeJest,
    reactNativePlug,
    reactNativeTs,
    reactPerf,
    reactRefresh,
    reactX,
    regexp,
    rxjs,
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
    tanstack,
    testingLibrary,
    ts,
    tsdoc,
    turbo,
    unicorn,
    unsanitized,
    unusedImports,
    vitest,
    vitestTs,
    xo,
    yml,
    youDontNeedLodash,
  ]),
];

export default configs.filter(({ enabled }) => enabled);
// EOF
