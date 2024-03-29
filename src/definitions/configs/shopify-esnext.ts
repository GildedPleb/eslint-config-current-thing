// PathMark: ./src/definitions/configs/shopify-esnext.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "import/order": ["import-sort"],
  },
  definitions: `{
    files,
    settings: {
      'import/ignore': ['node_modules', '\\.s?css'],
    },
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "ESNext",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: [
    "@babel/eslint-plugin",
    "promise",
    "sort-class-members",
    "import",
  ],
  rules: `shopify.configs.esnext.rules`,
} satisfies Config;
// EOF
