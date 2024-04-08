// PathMark: ./src/packages/rejected.ts

// These are actual project that are either ESlint configs or plugins

const rejected = new Set([
  // Tslint is a dead project, replaced by @typescript-eslint
  "tslint-config-prettier",

  // Out of Scope
  "@tanstack/eslint-plugin-query",
  "eslint-plugin-ember",
  "@backstage/eslint-plugin",
  "html-validate",
  "eslint-watch",
  "@ianvs/eslint-stats",

  // Fork of import
  "eslint-plugin-i",

  // This is the not-maintained version of @babel/eslint-plugin, and download counts don't matter of ordering plugins.
  "eslint-plugin-babel",

  // Irrelevant?
  "eslint-plugin-local-rules",

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

  // Svelte -- Hopefully to be added one day when its more popular than react!
  "svelte-eslint-parser",
  "eslint-plugin-svelte",

  // OOMKills everything. Insane that people still use this.
  "eslint-plugin-deprecation",

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
  "@typescript-eslint/eslint-plugin-tslint",
  "@typescript-eslint/rule-tester",
  "typescript-eslint-language-service",
  "tslint-to-eslint-config",

  // ES Lint submodules
  "eslint",
  "eslint-etc",
  "eslint-import-resolver-node",
  "eslint-scope",
  "eslint-visitor-keys",
  "eslint-webpack-plugin",
  "@eslint-community/eslint-utils",
  "@eslint-community/regexpp",
  "@eslint/eslintrc",
  "eslint-formatter-pretty",
  "eslint-snapshot-test",
  "eslint-module-utils",
  "eslint-compat-utils",
  "eslint-template-visitor",

  // Various
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
  "markdownlint",
  "remark-lint",
  "remark-preset-lint-recommended",
  "standard-engine",
  "standard",
  "flowbite",
  "gherkin-lint",
  "@axe-core/react",
  "lockfile-lint-api",
  "gulp-eslint",

  // Sarif
  "node-sarif-builder",
  "@microsoft/eslint-formatter-sarif",

  // Stylistic
  "@stylistic/eslint-plugin-ts",
  "@stylistic/eslint-plugin-jsx",

  // Prettier types
  "@types/eslint-config-prettier",

  // Prettier Stuffs
  "prettier-eslint",
  "prettier-eslint-cli",
  "vite-plugin-eslint",
  "prettier-linter-helpers",

  // ES Lint types
  "@eslint-types/jsdoc",
  "@eslint-types/unicorn",
  "@eslint-types/typescript-eslint",
  "@eslint-types/jsdoc",
  "eslint-define-config",
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
]);

export default rejected;
// EOF
