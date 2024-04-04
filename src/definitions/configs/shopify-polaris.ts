// PathMark: ./src/definitions/configs/shopify-polaris.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Polaris",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify"],
  rules: `...shopify.configs.polaris.rules,`,
} satisfies Config;
// EOF
