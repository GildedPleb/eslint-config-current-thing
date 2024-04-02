// PathMark: ./src/definitions/configs/shopify-react-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
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
  id: "shopify",
  name: "Shopify",
  nameSecondary: "React-TS",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react"],
  rules: `shopify.configs.react.overrides[0].rules`,
} satisfies Config;
// EOF
