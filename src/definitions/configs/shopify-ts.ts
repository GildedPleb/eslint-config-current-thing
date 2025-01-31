// PathMark: ./src/definitions/configs/shopify-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint", "@shopify"],
  rules: `...shopify.configs.typescript.at(-1).rules,`,
} satisfies Config;
// EOF
