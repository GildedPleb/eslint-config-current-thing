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
declare module "eslint-plugin-html";
declare module "@microsoft/eslint-plugin-sdl";
declare module "eslint-plugin-typescript-sort-keys";
declare module "eslint-plugin-chai-friendly";
declare module "eslint-config-airbnb/rules/react";
declare module "eslint-config-airbnb/rules/react-a11y";
declare module "eslint-config-airbnb/rules/react-hooks";
declare module "eslint-config-airbnb-base/rules/best-practices";
declare module "eslint-config-airbnb-base/rules/errors";
declare module "eslint-config-airbnb-base/rules/es6";
declare module "eslint-config-airbnb-base/rules/imports";
declare module "eslint-config-airbnb-base/rules/node";
declare module "eslint-config-airbnb-base/rules/strict";
declare module "eslint-config-airbnb-base/rules/style";
declare module "eslint-config-airbnb-base/rules/variables";
declare module "eslint-config-airbnb-typescript/lib/shared.js";
declare module "eslint-plugin-rxjs";
declare module "eslint-plugin-ava";
declare module "eslint-plugin-check-file";
declare module "eslint-plugin-jasmine";
declare module "eslint-plugin-no-use-extend-native";
declare module "eslint-plugin-react-prefer-function-component";
declare module "eslint-plugin-react-compiler";
declare module "eslint-plugin-sort-destructure-keys";
declare module "eslint-plugin-ban";
declare module "eslint-plugin-boundaries";
declare module "eslint-plugin-no-jquery";

declare module "gts" {
  interface GtsConfig {
    overrides: Array<Record<string, Record<string, string>>>;
    rules: Record<string, string>;
  }

  const gts: GtsConfig;
  export default gts;
}

declare module "eslint-plugin-formatjs" {
  interface FormatJsConfig {
    configs: { recommended: { rules: Record<string, string> } };
  }

  const formatJs: FormatJsConfig;
  export default formatJs;
}

// EOF
