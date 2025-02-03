// PathMark: ./src/definitions/configs/shopify-prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: false,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Prettier",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier", "@babel", "@shopify"],
  rules: `...shopify.configs.prettier[1].rules,`,
} satisfies Config;
// EOF
