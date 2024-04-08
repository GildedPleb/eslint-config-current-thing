// PathMark: ./src/definitions/plugins/shopify-jest.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Jest",
  packages: [
    {
      declaredAs: `{
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => [
            key.startsWith("jest/") ? key.slice(5) : key,
            value,
          ]),
        ),
      }`,
      namespace: "@shopify/jest",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@shopify/jest">;
// EOF
