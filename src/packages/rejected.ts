// PathMark: ./src/packages/rejected.ts

const rejected = new Set([
  // Maybe?
  "@tanstack/eslint-plugin-query",

  // Fork of import
  "eslint-plugin-i",

  // Irrelevant?
  "eslint-plugin-local-rules",
  "eslint-import-resolver-alias",

  // Vue -- Hopefully to be added one day when its more popular than react!
  "@vue/eslint-config-typescript",
  "@vue/eslint-config-prettier",
  "eslint-plugin-nuxt",
  "eslint-plugin-vuejs-accessibility",
  "@vue/eslint-config-airbnb",
  "eslint-plugin-vue",
  "vue-eslint-parser",
  "@vue/eslint-config-standard",
  "eslint-plugin-prettier-vue",

  // Angular -- Hopefully to be added one day when its more popular than react!
  "@angular-eslint/eslint-plugin",
  "@angular-eslint/eslint-plugin-template",
  "@ngdaddy/eslint-config",
  "@nrwl/angular",
  "@nx/angular",
  "@ngdaddy/eslint-plugin",
  "eslint-plugin-angular",

  // Svelte -- Hopefully to be added one day when its more popular than react!
  "svelte-eslint-parser",
  "eslint-plugin-svelte",

  // Ember -- Hopefully to be added one day when its more popular than react!
  "eslint-plugin-ember",

  // Broken / not-maintained / abandoned
  "eslint-plugin-deprecation",
  "eslint-plugin-json",
  "eslint-plugin-babel",
  "eslint-plugin-graphql",
  "eslint-plugin-lodash",

  // Plugin for linting plugins
  "eslint-plugin-eslint-plugin",

  // Typescript-eslint sub-modules
  "@typescript-eslint/scope-manager",
  "@typescript-eslint/type-utils",
  "@typescript-eslint/types",
  "@typescript-eslint/typescript-estree",
  "@typescript-eslint/utils",
  "@typescript-eslint/visitor-keys",
  "@typescript-eslint/experimental-utils",
  "@typescript-eslint/rule-tester",
  "typescript-eslint-language-service",

  // Tslint is a dead project, replaced by @typescript-eslint
  "@typescript-eslint/eslint-plugin-tslint",
  "tslint-config-prettier",
  "tslint-to-eslint-config",

  // ES Lint submodules
  "eslint",
  "eslint-etc",
  "eslint-import-resolver-node",
  "eslint-scope",
  "eslint-visitor-keys",
  "@eslint-community/eslint-utils",
  "@eslint-community/regexpp",
  "@eslint/eslintrc",
  "eslint-formatter-pretty",
  "eslint-snapshot-test",
  "eslint-module-utils",
  "eslint-compat-utils",
  "eslint-template-visitor",

  // Various / Out of scope
  "eslint-webpack-plugin",
  "@babel/eslint-parser",
  "@rushstack/eslint-patch",
  "ignore",
  "jsx-ast-utils",
  "fork-ts-checker-webpack-plugin",
  "@codemirror/lint",
  "unified-lint-rule",
  "@redocly/cli",
  "@redocly/openapi-core",
  "lint-staged",
  "@types/lint-staged",
  "conventional-changelog-eslint",
  "knip",
  "@biomejs/biome",
  "@mapbox/jsonlint-lines-primitives",
  "cspell",
  "doiuse",
  "standard-engine",
  "standard",
  "flowbite",
  "gherkin-lint",
  "@axe-core/react",
  "lockfile-lint-api",
  "gulp-eslint",
  "eslint-define-config",
  "html-validate",
  "eslint-watch",
  "@ianvs/eslint-stats",
  "xo",
  "eslint-plugin-diff",
  "markdownlint",

  // Sarif
  "node-sarif-builder",
  "@microsoft/eslint-formatter-sarif",

  // Stylistic
  "@stylistic/eslint-plugin-ts",
  "@stylistic/eslint-plugin-jsx",

  // Prettier Stuffs
  "@types/eslint-config-prettier",
  "@types/eslint-plugin-prettier",
  "prettier-eslint",
  "prettier-eslint-cli",
  "vite-plugin-eslint",
  "prettier-linter-helpers",

  // ES Lint types
  "@eslint-types/jsdoc",
  "@eslint-types/unicorn",
  "@eslint-types/typescript-eslint",
  "@eslint-types/jsdoc",
  "@types/eslint",
  "@types/eslint-scope",

  // Automatically included
  "globals",

  // Stylelint
  "stylelint",
  "stylelint-scss",
  "stylelint-order",
  "stylelint-config-prettier",
  "stylelint-config-sass-guidelines",
  "stylelint-processor-styled-components",
  "stylelint-webpack-plugin",
  "stylelint-declaration-strict-value",
  "stylelint-config-prettier-scss",
  "stylelint-declaration-block-no-ignored-properties",
  "nx-stylelint",
  "@gitlab/stylelint-config",
  "stylelint-config-twbs-bootstrap",

  // Commitlint
  "@commitlint/resolve-extends",
  "@commitlint/execute-rule",
  "@commitlint/lint",
  "@commitlint/ensure",
  "@commitlint/parse",
  "@commitlint/rules",
  "@commitlint/is-ignored",
  "@commitlint/message",
  "@commitlint/cli",
  "@commitlint/to-lines",
  "@commitlint/top-level",
  "commitlint",

  // Monorepo stuffs
  "@nx/eslint",
  "@nx/linter",
  "@nrwl/linter",
  "eslint-config-turbo",
  "@nrwl/eslint-plugin-nx",
  "@nx/eslint-plugin",
  "@nx/next",
  "syncpack",
  "@rushstack/eslint-plugin",
  "@rushstack/eslint-plugin-security",
  "@backstage/eslint-plugin",

  // Literally supporting scams and fraud
  "solhint",
]);

export default rejected;
// EOF
