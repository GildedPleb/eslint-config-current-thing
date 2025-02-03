// PathMark: ./src/definitions/configs/react.ts
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
        pragma: "React",
        version: "detect",
      },
    },
  }`,
  ejected: false,
  enabled: true,
  id: "react",
  name: "React",
  packages: [
    {
      declaredAs: "react",
      package: "eslint-plugin-react",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react"],
  rules: `...react.configs.recommended.rules,`,
} satisfies Config;
// EOF
