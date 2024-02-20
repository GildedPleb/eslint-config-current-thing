import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "react", package: "eslint-plugin-react", requiresImport: true },
  ],
  name: "React",
  definitions: `{
    files,
    plugins: { react },
    settings: {
      react: {
        "pragma": "React",
        "version": "detect"
      },
    },
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  rules: `react.configs.recommended.rules`,
} satisfies Config;
