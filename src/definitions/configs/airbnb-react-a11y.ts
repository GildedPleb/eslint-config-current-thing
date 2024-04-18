// PathMark: ./src/definitions/configs/airbnb-react-a11y.ts
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
  nameSecondary: "React-A11y",
  packages: [
    {
      declaredAs: "airbnbReactA11y",
      package: "eslint-config-airbnb",
      requiresImport: true,
      subModule: "/rules/react-a11y",
    },
  ],
  requiredPlugins: ["jsx-a11y", "react"],
  rules: `...airbnbReactA11y.rules,`,
} satisfies Config;
// EOF
