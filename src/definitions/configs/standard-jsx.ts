// PathMark: ./src/definitions/configs/standard-jsx.ts
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
  id: "standard-jsx",
  name: "Standard JSX",
  packages: [
    {
      name: "standardJsx",
      package: "eslint-config-standard-jsx",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["react"],
  rules: `...standardJsx.rules,`,
} satisfies Config;
// EOF
