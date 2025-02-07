// PathMark: ./src/definitions/configs/airbnb-react-hooks.ts
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
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb",
  name: "AirBnb",
  nameSecondary: "React-Hooks",
  packages: [
    {
      declaredAs: "airbnbReactHooks",
      package: "eslint-config-airbnb",
      requiresImport: false,
      subModule: "/rules/react-hooks",
    },
  ],
  requiredPlugins: ["react-hooks"],
  rules: `"react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,`,
} satisfies Config;
// EOF
