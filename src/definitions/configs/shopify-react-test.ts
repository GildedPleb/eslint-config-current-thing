// PathMark: ./src/definitions/configs/shopify-react-test.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  name: "Shopify",
  nameSecondary: "React/Test",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify"],
  rules: `shopify.configs.react.overrides[1].rules`,
} satisfies Config;
// EOF
