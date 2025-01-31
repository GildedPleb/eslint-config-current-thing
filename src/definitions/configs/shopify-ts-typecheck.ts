// PathMark: ./src/definitions/configs/shopify-ts-typecheck.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "TS-TypeCheck",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...shopify.configs["typescript-type-checking"][0].rules,`,
} satisfies Config;
// EOF
