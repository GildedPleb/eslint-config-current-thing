// PathMark: ./src/definitions/configs/shopify-core.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Core",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify", "eslint-comments"],
  rules: `shopify.configs.core.rules`,
} satisfies Config;
// EOF
