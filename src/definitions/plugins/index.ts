// PathMark: ./src/definitions/plugins/index.ts

import antfu from "./antfu";
import ava from "./ava";
import babel from "./babel";
import chai from "./chai";
import checkFile from "./check-file";
import comments from "./comments";
import compat from "./compat";
import cssModules from "./css-modules";
import cypress from "./cypress";
import emotion from "./emotion";
import es from "./es";
import flowtype from "./flowtype";
import formatjs from "./formatjs";
import functional from "./functional";
import functionalComponents from "./functional-components";
import graphql from "./graphql";
import header from "./header";
import html from "./html";
import i18next from "./i18next";
import importPlugin from "./import";
import importSort from "./import-sort";
import importX from "./import-x";
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
import noRelativeImport from "./no-relative-import";
import noUseExtendNative from "./no-use-extend-native";
import node from "./node";
import perfectionist from "./perfectionist";
import playwright from "./playwright";
import preferArrow from "./prefer-arrow";
import prettier from "./prettier";
import promises from "./promises";
import react from "./react";
import reactCompiler from "./react-compiler";
import reactHooks from "./react-hooks";
import reactHooksExtra from "./react-hooks-extra";
import reactNative from "./react-native";
import reactNativeIndie from "./react-native-indie";
import reactPerf from "./react-perf";
import reactRefresh from "./react-refresh";
import reactX from "./react-x";
import regexp from "./regexp";
import rxjs from "./rxjs";
import sdl from "./sdl";
import security from "./security";
import shopify from "./shopify";
import sonarjs from "./sonarjs";
import sortClass from "./sort-class";
import sortKeys from "./sort-keys";
import storybook from "./storybook";
import stylistic from "./stylistic";
import tailwindPlugin from "./tailwind-plugin";
import tanstack from "./tanstack";
import testingLibrary from "./testing-library";
import ts from "./ts";
import tsdoc from "./tsdoc";
import turbo from "./turbo";
import unicorn from "./unicorn";
import unsanitized from "./unsanitized";
import unusedImports from "./unused-imports";
import vitest from "./vitest";
import yml from "./yml";
import youDontNeedLodash from "./you-dont-need-lodash";

export interface Plugin<N extends string> {
  enabled: boolean;
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
  ...new Set([
    antfu,
    ava,
    babel,
    chai,
    checkFile,
    comments,
    compat,
    cssModules,
    cypress,
    emotion,
    es,
    flowtype,
    formatjs,
    functional,
    functionalComponents,
    graphql,
    header,
    html,
    i18next,
    importPlugin,
    importSort,
    importX,
    jasmine,
    jest,
    jestDom,
    jestFormatting,
    jsdoc,
    jsonc,
    jsxA11y,
    md,
    mdx,
    mocha,
    nextjs,
    node,
    noOnlyTest,
    noRelativeImport,
    noUseExtendNative,
    perfectionist,
    playwright,
    preferArrow,
    prettier,
    promises,
    react,
    reactCompiler,
    reactHooks,
    reactHooksExtra,
    reactNative,
    reactNativeIndie,
    reactPerf,
    reactRefresh,
    reactX,
    regexp,
    rxjs,
    sdl,
    security,
    shopify,
    sonarjs,
    sortClass,
    sortKeys,
    storybook,
    stylistic,
    tailwindPlugin,
    tanstack,
    testingLibrary,
    ts,
    tsdoc,
    turbo,
    unicorn,
    unsanitized,
    unusedImports,
    vitest,
    yml,
    youDontNeedLodash,
  ]),
];

type ExtractNamespace<T> =
  T extends Array<{ packages: infer U }>
    ? U extends Array<{ namespace: infer V }>
      ? V
      : never
    : never;
export type Namespace = ExtractNamespace<typeof plugins>;

export default plugins.filter(({ enabled }) => enabled);
// EOF
