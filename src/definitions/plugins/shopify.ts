// PathMark: ./src/definitions/plugins/shopify.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Core",
  packages: [
    {
      declaredAs: "shopify",
      mappedAs: "shopify",
      namespace: "@shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@shopify">;
// EOF
