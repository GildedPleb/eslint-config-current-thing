// PathMark: ./src/definitions/configs/airbnb-base-imports.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Imports",
  packages: [
    {
      declaredAs: "airbnbBaseImports",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
      subModule: "/rules/imports",
    },
  ],
  requiredPlugins: ["import"],
  rules: `"import/consistent-type-specifier-style": [0, "prefer-inline"],
    "import/default": 0,
    "import/dynamic-import-chunkname": [
      0,
      {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      },
    ],
    "import/export": 2,
    "import/exports-last": 0,
    "import/extensions": [
      2,
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "import/first": 2,
    "import/group-exports": 0,
    "import/imports-first": 0,
    "import/max-dependencies": [0, { max: 10 }],
    "import/named": 2,
    "import/namespace": 0,
    "import/newline-after-import": 2,
    "import/no-absolute-path": 2,
    "import/no-amd": 2,
    "import/no-anonymous-default-export": [
      0,
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    "import/no-commonjs": 0,
    "import/no-cycle": [2, { maxDepth: "∞" }],
    "import/no-default-export": 0,
    "import/no-deprecated": 0,
    "import/no-duplicates": 2,
    "import/no-dynamic-require": 2,
    "import/no-empty-named-blocks": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/vue.config.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/protractor.conf.js",
          "**/protractor.conf.*.js",
          "**/karma.conf.js",
          "**/.eslintrc.js",
        ],
        optionalDependencies: false,
      },
    ],
    "import/no-import-module-exports": [
      2,
      {
        exceptions: [],
      },
    ],
    "import/no-internal-modules": [
      0,
      {
        allow: [],
      },
    ],
    "import/no-mutable-exports": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-named-default": 2,
    "import/no-named-export": 0,
    "import/no-namespace": 0,
    "import/no-nodejs-modules": 0,
    "import/no-relative-packages": 2,
    "import/no-relative-parent-imports": 0,
    "import/no-restricted-paths": 0,
    "import/no-self-import": 2,
    "import/no-unassigned-import": 0,
    "import/no-unresolved": [
      2,
      { caseSensitive: true, commonjs: true },
    ],
    "import/no-unused-modules": [
      0,
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    "import/no-useless-path-segments": [2, { commonjs: true }],
    "import/no-webpack-loader-syntax": 2,
    "import/order": [
      2,
      { groups: [["builtin", "external", "internal"]] },
    ],
    "import/prefer-default-export": 2,
    "import/unambiguous": 0,`,
} satisfies Config;
// EOF
