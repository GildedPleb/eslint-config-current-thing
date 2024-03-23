// PathMark: ./src/definitions/configs/shopify.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: {
      "@shopify": shopify,
      "@shopify/typescript": {
        config: shopify.configs,
        rules: Object.fromEntries(
          Object.entries(shopify.rules).map(([key, value]) => [
            key.startsWith("typescript/") ? key.slice(11) : key,
            value,
          ])
        ),
      },
    },
    ${RULES}
  }`,
  name: "Shopify",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: true,
    },
  ],
  rules: `shopify.configs.core.rules,
    ...shopify.configs.esnext.rules,
    ...shopify.configs.node.rules,
    ...shopify.configs.prettier.rules,
    ...shopify.configs.typescript.overrides[0].rules,
    ...shopify.configs["typescript-type-checking"].overrides[0].rules`,
} satisfies Config;
// EOF
