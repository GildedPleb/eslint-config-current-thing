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
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify", "eslint-comments", "@shopify/typescript"],
  rules: `...shopify.configs.core.rules,`,
} satisfies Config;
// EOF
