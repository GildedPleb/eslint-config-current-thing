// PathMark: ./src/packages/rejected.ts

// These are actual project that are either ESlint configs or plugins

const rejected = new Set([
  // Obsoleted by Typescript -- Should consider adding back
  // "eslint-plugin-unused-imports",

  // Tslint is a dead project, replaced by @typescript-eslint
  "tslint-config-prettier",

  // 'Function' definitions are good.
  "eslint-plugin-prefer-arrow",

  // Obsoleted by Unicorn -- Should consider adding back
  // "eslint-plugin-filenames",
  // "eslint-plugin-check-file",

  // Obsoleted by SonarJS -- Should consider adding back
  // "eslint-plugin-deprecation",

  // Obsolete by perfectionist -- Should consider adding back
  // "eslint-plugin-sort-keys-fix",
  // "eslint-plugin-typescript-sort-keys",

  // Included with next plugin
  "eslint-config-next",

  // Out of Scope
  "@wordpress/eslint-plugin",
  // "eslint-plugin-html",
  // "eslint-plugin-json",
  // "jsonc-eslint-parser",
  // "eslint-plugin-jsonc",
  // "eslint-plugin-markdown",
  // "eslint-plugin-yml",
  // "yaml-eslint-parser",
  // "@graphql-eslint/eslint-plugin",
  "@tanstack/eslint-plugin-query",
  "eslint-plugin-ember",
  "@backstage/eslint-plugin",
  "html-validate",
  "eslint-watch",
  "@ianvs/eslint-stats",

  // Fork of import
  "eslint-plugin-i",

  // Less popular testing frameworks.
  "eslint-plugin-cypress",
  "eslint-plugin-mocha",
  "eslint-plugin-qunit",
  "eslint-plugin-chai-friendly",
  "eslint-plugin-jasmine",
  "eslint-plugin-playwright",
  "eslint-plugin-vitest",
  "eslint-plugin-vitest",

  // Not maintained / No recommended rules and largely irrelevant
  "eslint-plugin-babel",

  // Irrelevant?
  "eslint-plugin-local-rules",

  // Vue
  "@vue/eslint-config-typescript",
  "@vue/eslint-config-prettier",
  "eslint-plugin-nuxt",
  "eslint-plugin-vuejs-accessibility",
  "@vue/eslint-config-airbnb",
  "eslint-plugin-vue",
  "vue-eslint-parser",
  "@vue/eslint-config-standard",
  "eslint-plugin-prettier-vue",

  // Angular
  "@angular-eslint/eslint-plugin",
  "@angular-eslint/eslint-plugin-template",
  "@ngdaddy/eslint-config",
  "@nrwl/angular",
  "@nx/angular",
  "@ngdaddy/eslint-plugin",

  // Svelte
  "svelte-eslint-parser",
  "eslint-plugin-svelte",

  // OOMKills everything. Insane that people still use this garbage.
  "eslint-plugin-deprecation",

  // Plugin for linting plugins
  "eslint-plugin-eslint-plugin",

  // Included with Airbnb
  "eslint-config-airbnb-base",

  // Typescript-eslint sub-modules
  "@typescript-eslint/scope-manager",
  "@typescript-eslint/type-utils",
  "@typescript-eslint/types",
  "@typescript-eslint/typescript-estree",
  "@typescript-eslint/utils",
  "@typescript-eslint/visitor-keys",
  "typescript-eslint-language-service",
  "@typescript-eslint/experimental-utils",
  "@typescript-eslint/eslint-plugin-tslint",
  "@typescript-eslint/rule-tester",
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
  "@types/eslint-scope",
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

  // Sarif
  "node-sarif-builder",
  "@microsoft/eslint-formatter-sarif",

  // Stylistic
  "@stylistic/eslint-plugin-ts",
  "@stylistic/eslint-plugin-jsx",

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

  // Could be useful but not really?
  "eslint-import-resolver-alias",

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
