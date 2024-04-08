// PathMark: ./src/definitions/configs/shopify-react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
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
  nameSecondary: "React",
  packages: [
    {
      declaredAs: "shopify",
      package: "@shopify/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react", "jsx-a11y", "react-hooks", "@shopify"],
  rules: `...shopify.configs.react.rules,
    "react/jsx-filename-extension": [2, {extensions: [".jsx", ".tsx"] }],`,
} satisfies Config;
// EOF
