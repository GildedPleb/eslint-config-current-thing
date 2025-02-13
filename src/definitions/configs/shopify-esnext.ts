// PathMark: ./src/definitions/configs/shopify-esnext.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "import/order": ["import-sort"],
    "prefer-arrow-callback": ["mocha"],
  },
  definitions: `{
    files: jsFiles,
    ${RULES}
    settings: {
      "import/ignore": ["node_modules", ".s?css"],
    },
  }`,
  ejected: false,
  enabled: false,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "ESNext",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: [
    "@babel",
    "promise",
    "sort-class-members",
    "import",
    "@shopify",
  ],
  rules: `...shopify.configs.esnext.at(-1).rules,`,
} satisfies Config;
// EOF
