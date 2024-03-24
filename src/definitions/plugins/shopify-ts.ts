// PathMark: ./src/definitions/plugins/shopify-ts.ts
import type { Plugin } from ".";

export default {
  name: "Shopify - Core",
  packages: [
    {
      key: "@shopify/typescript",
      name: `{
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => {
            if (key.startsWith("typescript/"))
              return [key.slice(11), value];
            return [key, value];
          })
        ),
      }`,
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin;
// EOF
