// PathMark: ./src/definitions/configs/shopify-prettier-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Prettier-TS",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier", "@typescript-eslint"],
  rules: `...shopify.configs.prettier[2].rules,`,
} satisfies Config;
// EOF
