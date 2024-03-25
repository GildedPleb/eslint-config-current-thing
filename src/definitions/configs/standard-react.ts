// PathMark: ./src/definitions/configs/standard-react.ts
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
  name: "Standard React",
  packages: [
    {
      name: "standardReact",
      package: "eslint-config-standard-react",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["react", "react-hooks"],
  rules: `standardReact.rules`,
} satisfies Config;
// EOF
