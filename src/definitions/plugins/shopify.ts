// PathMark: ./src/definitions/plugins/shopify.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Core",
  packages: [
    {
      declaredAs: "shopify",
      namespace: "@shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@shopify">;
// EOF
