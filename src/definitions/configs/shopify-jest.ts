// PathMark: ./src/definitions/configs/shopify-jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [
      '**/*.test.*',
      '**/*_test.*',
      '**/*Test.*',
      '**/*.spec.*',
      '**/*_spec.*',
      '**/*Spec.*',
      '**/__tests__/*',
    ],
    languageOptions: {
      globals: {
        "jest/globals": true,
      },
    },
    ${RULES}
  }`,
  name: "Shopify",
  nameSecondary: "Jest",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest", "jest-formatting", "@shopify"],
  rules: `shopify.configs.jest.rules`,
} satisfies Config;
// EOF
