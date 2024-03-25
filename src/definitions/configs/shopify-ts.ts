// PathMark: ./src/definitions/configs/shopify-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ['*.ts', '*.tsx'],
    ${RULES}
  }`,
  name: "Shopify",
  nameSecondary: "TS",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `shopify.configs.typescript.overrides[0].rules`,
} satisfies Config;
// EOF
