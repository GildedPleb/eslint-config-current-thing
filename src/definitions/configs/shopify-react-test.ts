// PathMark: ./src/definitions/configs/shopify-react-test.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
    settings: {
      react: {
        version: "detect",
      },
    },
  }`,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "React-Test",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify"],
  rules: `...shopify.configs.react.overrides[1].rules,`,
} satisfies Config;
// EOF
