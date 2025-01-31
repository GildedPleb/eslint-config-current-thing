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
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify"],
  rules: `...shopify.configs.polaris[0].rules,`,
} satisfies Config;
// EOF
