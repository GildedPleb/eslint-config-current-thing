// PathMark: ./src/definitions/configs/shopify-prettier-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ['*.ts', '*.tsx'],
    ${RULES}
  }`,
  name: "Shopify",
  nameSecondary: "Prettier/TS",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier", "@typescript-eslint"],
  rules: `shopify.configs.prettier.overrides[0].rules`,
} satisfies Config;
// EOF
