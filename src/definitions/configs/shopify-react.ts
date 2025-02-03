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
  ejected: false,
  enabled: false,
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
  rules: `...shopify.configs.react[0].rules,
    "react/jsx-filename-extension": [2, {extensions: [".jsx", ".tsx"] }],`,
} satisfies Config;
// EOF
