// PathMark: ./src/definitions/plugins/shopify-jest.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Jest",
  packages: [
    {
      key: "@shopify/jest",
      name: `{
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => [
            key.startsWith("jest/") ? key.slice(5) : key,
            value,
          ]),
        ),
      }`,
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin;
// EOF
