// PathMark: ./src/definitions/configs/react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
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
    { name: "react", package: "eslint-plugin-react", requiresImport: false },
  ],
  requiredPlugins: ["react"],
  rules: `react.configs.recommended.rules`,
} satisfies Config;
// EOF
