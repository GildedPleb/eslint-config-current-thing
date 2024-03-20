// PathMark: ./src/configs/definitions/react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
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
  name: "React",
  packages: [
    { name: "react", package: "eslint-plugin-react", requiresImport: true },
  ],
  rules: `react.configs.recommended.rules`,
} satisfies Config;
// EOF
