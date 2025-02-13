// PathMark: ./src/definitions/configs/shopify-react-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsxFiles,
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
  nameSecondary: "React-TS",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react"],
  rules: `...shopify.configs.react[1].rules,`,
} satisfies Config;
// EOF
