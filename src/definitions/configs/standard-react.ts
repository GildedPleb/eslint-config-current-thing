// PathMark: ./src/definitions/configs/standard-react.ts
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
  id: "standard-react",
  name: "Standard React",
  packages: [
    {
      declaredAs: "standardReact",
      package: "eslint-config-standard-react",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["react", "react-hooks"],
  rules: `...standardReact.rules,`,
} satisfies Config;
// EOF
