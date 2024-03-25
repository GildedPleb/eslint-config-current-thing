// PathMark: ./src/definitions/configs/shopify-react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  name: "Shopify - React",
  packages: [
    {
      name: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react", "jsx-a11y", "react-hooks", "@shopify"],
  rules: `shopify.configs.react.rules`,
} satisfies Config;
// EOF
