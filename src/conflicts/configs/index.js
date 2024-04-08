// PathMark: ./src/conflicts/configs/index.js
const configList = [
  { location: "./src/conflicts/configs/xo-config.js", name: "xo" },
  { location: "./src/conflicts/configs/comments-config.js", name: "comments" },
  { location: "./src/conflicts/configs/security-config.js", name: "security" },
  { location: "./src/conflicts/configs/tsdoc-config.js", name: "tsdoc" },
  { location: "./src/conflicts/configs/sonarjs-config.js", name: "sonarjs" },
  { location: "./src/conflicts/configs/node-config.js", name: "node" },
  { location: "./src/conflicts/configs/unicorn-config.js", name: "unicorn" },
  { location: "./src/conflicts/configs/jsdoc-config.js", name: "jsdoc" },
  { location: "./src/conflicts/configs/standard-config.js", name: "standard" },
  { location: "./src/conflicts/configs/nextjs-config.js", name: "nextjs" },
  { location: "./src/conflicts/configs/promises-config.js", name: "promises" },
  { location: "./src/conflicts/configs/prettier-config.js", name: "prettier" },
  {
    location: "./src/conflicts/configs/import-js-config.js",
    name: "import-js",
  },
  { location: "./src/conflicts/configs/compat-config.js", name: "compat" },
  {
    location: "./src/conflicts/configs/functional-config.js",
    name: "functional",
  },
  {
    location: "./src/conflicts/configs/shopify-ts-config.js",
    name: "shopify-ts",
  },
  {
    location: "./src/conflicts/configs/no-lodash-config.js",
    name: "no-lodash",
  },
  { location: "./src/conflicts/configs/google-config.js", name: "google" },
  {
    location: "./src/conflicts/configs/import-sort-config.js",
    name: "import-sort",
  },
  { location: "./src/conflicts/configs/eslint-config.js", name: "eslint" },
  {
    location: "./src/conflicts/configs/unsanitized-config.js",
    name: "unsanitized",
  },
  { location: "./src/conflicts/configs/cra-config.js", name: "cra" },
  { location: "./src/conflicts/configs/react-config.js", name: "react" },
  {
    location: "./src/conflicts/configs/react-hooks-config.js",
    name: "react-hooks",
  },
  { location: "./src/conflicts/configs/jsx-a11y-config.js", name: "jsx-a11y" },
  {
    location: "./src/conflicts/configs/standard-react-config.js",
    name: "standard-react",
  },
  {
    location: "./src/conflicts/configs/react-perf-config.js",
    name: "react-perf",
  },
  { location: "./src/conflicts/configs/rn-config.js", name: "rn" },
  { location: "./src/conflicts/configs/rn-ip-config.js", name: "rn-ip" },
  { location: "./src/conflicts/configs/jest-config.js", name: "jest" },
  {
    location: "./src/conflicts/configs/standard-jsx-config.js",
    name: "standard-jsx",
  },
  {
    location: "./src/conflicts/configs/jest-format-config.js",
    name: "jest-format",
  },
  { location: "./src/conflicts/configs/jest-dom-config.js", name: "jest-dom" },
  { location: "./src/conflicts/configs/ts-config.js", name: "ts" },
  {
    location: "./src/conflicts/configs/react-refresh-config.js",
    name: "react-refresh",
  },
  {
    location: "./src/conflicts/configs/stylistic-config.js",
    name: "stylistic",
  },
  { location: "./src/conflicts/configs/tailwind-config.js", name: "tailwind" },
  { location: "./src/conflicts/configs/regexp-config.js", name: "regexp" },
  {
    location: "./src/conflicts/configs/storybook-config.js",
    name: "storybook",
  },
  {
    location: "./src/conflicts/configs/perfectionist-config.js",
    name: "perfectionist",
  },
  {
    location: "./src/conflicts/configs/no-only-test-config.js",
    name: "no-only-test",
  },
  { location: "./src/conflicts/configs/es-x-config.js", name: "es-x" },
  { location: "./src/conflicts/configs/i18n-config.js", name: "i18n" },
  {
    location: "./src/conflicts/configs/emotion-css-config.js",
    name: "emotion-css",
  },
  {
    location: "./src/conflicts/configs/css-modules-config.js",
    name: "css-modules",
  },
  { location: "./src/conflicts/configs/airbnb-config.js", name: "airbnb" },
  {
    location: "./src/conflicts/configs/airbnb-base-config.js",
    name: "airbnb-base",
  },
  {
    location: "./src/conflicts/configs/airbnb-ts-config.js",
    name: "airbnb-ts",
  },
  { location: "./src/conflicts/configs/cra-ts-config.js", name: "cra-ts" },
  { location: "./src/conflicts/configs/cra-jest-config.js", name: "cra-jest" },
  {
    location: "./src/conflicts/configs/testing-library-config.js",
    name: "testing-library",
  },
  {
    location: "./src/conflicts/configs/shopify-core-config.js",
    name: "shopify-core",
  },
  {
    location: "./src/conflicts/configs/shopify-esnext-config.js",
    name: "shopify-esnext",
  },
  {
    location: "./src/conflicts/configs/shopify-jest-config.js",
    name: "shopify-jest",
  },
  {
    location: "./src/conflicts/configs/rn-flowtype-config.js",
    name: "rn-flowtype",
  },
  { location: "./src/conflicts/configs/rn-p-config.js", name: "rn-p" },
  { location: "./src/conflicts/configs/rn-ts-config.js", name: "rn-ts" },
  {
    location: "./src/conflicts/configs/shopify-node-config.js",
    name: "shopify-node",
  },
  {
    location: "./src/conflicts/configs/shopify-prettier-config.js",
    name: "shopify-prettier",
  },
  {
    location: "./src/conflicts/configs/shopify-prettier-ts-config.js",
    name: "shopify-prettier-ts",
  },
  {
    location: "./src/conflicts/configs/shopify-polaris-config.js",
    name: "shopify-polaris",
  },
  {
    location: "./src/conflicts/configs/shopify-react-config.js",
    name: "shopify-react",
  },
  {
    location: "./src/conflicts/configs/shopify-react-ts-config.js",
    name: "shopify-react-ts",
  },
  {
    location: "./src/conflicts/configs/shopify-react-test-config.js",
    name: "shopify-react-test",
  },
  {
    location: "./src/conflicts/configs/shopify-ts-typecheck-config.js",
    name: "shopify-ts-typecheck",
  },
  {
    location: "./src/conflicts/configs/standard-ts-config.js",
    name: "standard-ts",
  },
  {
    location: "./src/conflicts/configs/storybook-main-config.js",
    name: "storybook-main",
  },
  {
    location: "./src/conflicts/configs/unused-imports-config.js",
    name: "unused-imports",
  },
  {
    location: "./src/conflicts/configs/functional-stylistic-config.js",
    name: "functional-stylistic",
  },
  {
    location: "./src/conflicts/configs/functional-ts-config.js",
    name: "functional-ts",
  },
  {
    location: "./src/conflicts/configs/import-js-ts-config.js",
    name: "import-js-ts",
  },
  { location: "./src/conflicts/configs/jsdoc-ts-config.js", name: "jsdoc-ts" },
  { location: "./src/conflicts/configs/cypress-config.js", name: "cypress" },
  {
    location: "./src/conflicts/configs/sort-class-config.js",
    name: "sort-class",
  },
  { location: "./src/conflicts/configs/jsonc-config.js", name: "jsonc" },
  { location: "./src/conflicts/configs/mocha-config.js", name: "mocha" },
];

export default configList;
// EOF
