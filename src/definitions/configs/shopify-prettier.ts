// PathMark: ./src/definitions/configs/shopify-prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Prettier",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier", "@babel/eslint-plugin", "@shopify"],
  rules: `shopify.configs.prettier.rules`,
} satisfies Config;
// EOF
