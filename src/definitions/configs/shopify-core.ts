// PathMark: ./src/definitions/configs/shopify-core.ts
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
  nameSecondary: "Core",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify", "eslint-comments"],
  rules: `...shopify.configs.core[0].rules,`,
} satisfies Config;
// EOF
