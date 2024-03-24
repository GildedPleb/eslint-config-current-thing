// PathMark: ./src/definitions/plugins/shopify.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Core",
  packages: [
    {
      key: "@shopify",
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
