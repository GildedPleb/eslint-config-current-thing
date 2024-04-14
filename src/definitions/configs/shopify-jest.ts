// PathMark: ./src/definitions/configs/shopify-jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    languageOptions: {
      globals: {
        "jest/globals": true,
      },
    },
    ${RULES}
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "Jest",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest", "jest-formatting", "@shopify", "@shopify/jest"],
  rules: `...shopify.configs.jest.rules,
    "jest/no-if": 0,`,
} satisfies Config;
// EOF
