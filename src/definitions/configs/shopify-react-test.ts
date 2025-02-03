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
  ejected: false,
  enabled: false,
  id: "shopify",
  name: "Shopify",
  nameSecondary: "React-Test",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@shopify"],
  rules: `...shopify.configs.react[2].rules,`,
} satisfies Config;
// EOF
