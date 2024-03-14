const rejected = new Set([
  // Obsoleted by Typescript
  "eslint-plugin-unused-imports",

  // 'Function' definitions are good.
  "eslint-plugin-prefer-arrow",

  // Obsoleted by Unicorn
  "eslint-plugin-filenames",
  "eslint-plugin-check-file",

  // Obsoleted by React Native
  "eslint-plugin-react-native-globals",
  "@react-native-community/eslint-plugin",

  // Obsoleted by SonarJS
  "eslint-plugin-deprecation",

  // Obsolete by perfectionist
  "eslint-plugin-sort-keys-fix",
  "eslint-plugin-typescript-sort-keys",

  // Included with next plugin
  "eslint-config-next",

  // Out of Scope
  "@wordpress/eslint-plugin",
  "eslint-plugin-html",
  "eslint-plugin-json",
  "jsonc-eslint-parser",
  "eslint-plugin-jsonc",
  "eslint-plugin-markdown",
  "eslint-plugin-yml",
  "yaml-eslint-parser",
  "@graphql-eslint/eslint-plugin",

  // Fork of import
  "eslint-plugin-i",

  // Not maintained, see eslint-plugin-es-x
  "eslint-plugin-es",

  // Less popular testing frameworks.
  "eslint-plugin-cypress",
  "eslint-plugin-mocha",
  "eslint-plugin-qunit",
  "eslint-plugin-testing-library",
  "eslint-plugin-chai-friendly",
  "eslint-plugin-jasmine",
  "eslint-plugin-playwright",

  // Less popular type framework
  "eslint-plugin-ft-flow",

  // Monorepo stuffs
  "@nx/eslint",
  "eslint-config-turbo",
]);

export default rejected;
