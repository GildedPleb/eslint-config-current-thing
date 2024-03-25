// PathMark: ./src/definitions/configs/standard-jsx.ts
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
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  name: "Standard JSX",
  packages: [
    {
      name: "standardJsx",
      package: "eslint-config-standard-jsx",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["react"],
  rules: `standardJsx.rules`,
} satisfies Config;
// EOF
