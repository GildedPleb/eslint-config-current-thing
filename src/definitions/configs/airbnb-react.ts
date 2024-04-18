// PathMark: ./src/definitions/configs/airbnb-react.ts
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
  nameSecondary: "React",
  packages: [
    {
      declaredAs: "airbnbReact",
      package: "eslint-config-airbnb",
      requiresImport: true,
      subModule: "/rules/react",
    },
  ],
  requiredPlugins: ["react"],
  rules: `...airbnbReact.rules,`,
} satisfies Config;
// EOF
