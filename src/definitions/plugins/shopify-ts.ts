// PathMark: ./src/definitions/plugins/shopify-ts.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - TS",
  packages: [
    {
      key: "@shopify/typescript",
      name: `{
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => [
            key.startsWith("typescript/") ? key.slice(11) : key,
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
