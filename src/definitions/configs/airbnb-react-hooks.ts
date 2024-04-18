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
  id: "airbnb",
  name: "AirBnb",
  nameSecondary: "React-Hooks",
  packages: [
    {
      declaredAs: "airbnbReactHooks",
      package: "eslint-config-airbnb",
      requiresImport: true,
      subModule: "/rules/react-hooks",
    },
  ],
  requiredPlugins: ["react-hooks"],
  rules: `...airbnbReactHooks.rules,`,
} satisfies Config;
// EOF
