// PathMark: ./src/rejected.ts
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
  "@backstage/eslint-plugin",
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

  // Monorepo stuffs
  "@nx/eslint",
  "@nx/linter",
  "@nrwl/linter",
  "eslint-config-turbo",
  "@nrwl/eslint-plugin-nx",

  // Not maintained / No recommended rules and largely irrelevant
  "eslint-plugin-babel",

  // Irrelevant?
  "eslint-plugin-local-rules",

  // Less popular frameworks than React + ecosystem
  "@angular-eslint/eslint-plugin",
  "@angular-eslint/eslint-plugin-template",
  "@vue/eslint-config-typescript",
  "@vue/eslint-config-prettier",
  "eslint-plugin-nuxt",
  "eslint-plugin-vuejs-accessibility",
  "@vue/eslint-config-airbnb",
  "@ngdaddy/eslint-config",
  "eslint-plugin-vue",
  "vue-eslint-parser",

  // OOMKills everything. Insane that people still use this garbage.
  "eslint-plugin-deprecation",
]);

export default rejected;
// EOF
