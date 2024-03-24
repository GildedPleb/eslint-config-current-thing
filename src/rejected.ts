// PathMark: ./src/rejected.ts
const rejected = new Set([
  // Obsoleted by Typescript -- Should consider adding back
  "eslint-plugin-unused-imports",

  // Tslint is a dead project, replaced by @typescript-eslint
  "tslint-config-prettier",

  // 'Function' definitions are good.
  "eslint-plugin-prefer-arrow",

  // Obsoleted by Unicorn -- Should consider adding back
  "eslint-plugin-filenames",
  "eslint-plugin-check-file",

  // Obsoleted by React Native -- Should consider adding back
  "eslint-plugin-react-native-globals",
  "@react-native-community/eslint-plugin",

  // Obsoleted by SonarJS -- Should consider adding back
  "eslint-plugin-deprecation",

  // Obsolete by perfectionist -- Should consider adding back
  "eslint-plugin-sort-keys-fix",
  "eslint-plugin-typescript-sort-keys",

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
  "@tanstack/eslint-plugin-query",
  "eslint-plugin-ember",

  // Fork of import
  "eslint-plugin-i",

  // Less popular testing frameworks.
  "eslint-plugin-cypress",
  "eslint-plugin-mocha",
  "eslint-plugin-qunit",
  "eslint-plugin-chai-friendly",
  "eslint-plugin-jasmine",
  "eslint-plugin-playwright",

  // Monorepo stuffs
  "@nx/eslint",
  "@nrwl/linter",
  "eslint-config-turbo",

  // Not maintained / No recommended rules and largely irrelevant
  "eslint-plugin-babel",

  // Irrelevant?
  "eslint-plugin-local-rules",

  // Throws WARN in NPM and is literally the exact same as @react-native-community/eslint-config
  "@react-native/eslint-config",
]);

export default rejected;
// EOF
