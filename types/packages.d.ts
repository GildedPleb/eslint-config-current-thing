// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable functional/no-mixed-types */
// PathMark: ./types/packages.d.ts
declare module "@babel/eslint-plugin";
declare module "@eslint-community/eslint-plugin-eslint-comments";
declare module "@next/eslint-plugin-next";
declare module "@react-native-community/eslint-config";
declare module "@shopify/eslint-plugin";
declare module "eslint-config-google";
declare module "eslint-config-react-app";
declare module "eslint-config-standard-jsx";
declare module "eslint-config-standard-react";
declare module "eslint-config-xo";
declare module "eslint-plugin-compat";
declare module "eslint-plugin-eslint-comments";
declare module "eslint-plugin-flowtype";
declare module "eslint-plugin-functional";
declare module "eslint-plugin-import";
declare module "eslint-plugin-jest";
declare module "eslint-plugin-jest-dom";
declare module "eslint-plugin-jest-formatting";
declare module "eslint-plugin-jsdoc";
declare module "eslint-plugin-jsx-a11y";
declare module "eslint-plugin-n";
declare module "eslint-plugin-no-unsanitized";
declare module "eslint-plugin-node";
declare module "eslint-plugin-promise";
declare module "eslint-plugin-react";
declare module "eslint-plugin-react-hooks";
declare module "eslint-plugin-react-perf";
declare module "eslint-plugin-react-native";
declare module "eslint-plugin-security";
declare module "eslint-plugin-simple-import-sort";
declare module "eslint-plugin-sort-class-members";
declare module "eslint-plugin-unicorn";
declare module "eslint-plugin-you-dont-need-lodash-underscore";
declare module "eslint-plugin-react-refresh";
declare module "eslint-plugin-tailwindcss";
declare module "eslint-plugin-regexp";
declare module "eslint-plugin-storybook";
declare module "eslint-plugin-perfectionist";
declare module "eslint-plugin-no-only-tests";
declare module "eslint-plugin-es-x";
declare module "eslint-plugin-es";
declare module "@react-native/eslint-plugin";
declare module "eslint-plugin-header";
declare module "eslint-plugin-i18next";
declare module "@emotion/eslint-plugin";
declare module "eslint-plugin-css-modules";
declare module "eslint-plugin-testing-library";
declare module "eslint-plugin-ft-flow";
declare module "eslint-config-standard";
declare module "eslint-plugin-unused-imports";
declare module "eslint-plugin-cypress";
declare module "eslint-plugin-prefer-arrow";
declare module "eslint-plugin-json";
// Technically, a types packages for this exists, but it is incorrect.
declare module "eslint-plugin-markdown";

declare module "eslint/use-at-your-own-risk" {
  interface ParserOptions {
    allowReserved?: boolean;
    ecmaFeatures?: {
      globalReturn?: boolean;
      impliedStrict?: boolean;
      jsx?: boolean;
    };
    ecmaVersion?:
      | 3
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 2015
      | 2016
      | 2017
      | 2018
      | 2019
      | 2020
      | 2021
      | 2022
      | 2023
      | 2024;
    sourceType?: "module" | "script";
  }

  interface SuggestionResult {
    desc: string;
    fix: {
      range: [number, number];
      text: string;
    };
    messageId?: string;
  }

  interface LintMessage {
    column: number | undefined;
    endColumn?: number;
    endLine?: number;
    fatal?: boolean;
    fix?: {
      range: [number, number];
      text: string;
    };
    line: number | undefined;
    message: string;
    messageId?: string;
    nodeType?: null | string;
    ruleId: null | string;
    severity: 0 | 1 | 2;
    suggestions?: SuggestionResult[];
  }

  interface LintResult {
    errorCount: number;
    fatalErrorCount: number;
    filePath: string;
    fixableErrorCount: number;
    fixableWarningCount: number;
    messages?: LintMessage[];
    output?: string;
    source?: string;
    warningCount: number;
  }

  type Rule = number | number[] | string | string[];
  interface ConfigData {
    env?: Record<string, boolean>;
    extends?: string | string[];
    ignorePatterns?: string | string[];
    noInlineConfig?: boolean;
    parser?: string;
    parserOptions?: ParserOptions;
    plugins?: string[];
    processor?: string;
    reportUnusedDisableDirectives?: boolean;
    root?: boolean;
    rules?: Record<string, Rule>;
  }

  interface OverrideConfigData extends Omit<ConfigData, "overrides"> {
    excludedFiles?: string | string[];
    files: string | string[];
  }

  interface ESLintOptions {
    fix: boolean;
    overrideConfig?: ConfigData;
    overrideConfigFile?: boolean | string;
  }

  /** */
  export class FlatESLint {
    constructor(options?: ESLintOptions);
    calculateConfigForFile(filePath: string): Promise<ConfigData | undefined>;
    lintText(
      code: string,
      options?: { filePath?: string; warnIgnored?: boolean },
    ): Promise<LintResult[]>;
  }
}

// EOF
