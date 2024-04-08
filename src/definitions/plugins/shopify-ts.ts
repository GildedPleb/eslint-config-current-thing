// PathMark: ./src/definitions/plugins/shopify-ts.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - TS",
  packages: [
    {
      declaredAs: `{
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => [
            key.startsWith("typescript/") ? key.slice(11) : key,
            value,
          ]),
        ),
      }`,
      namespace: "@shopify/typescript",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@shopify/typescript">;
// EOF
