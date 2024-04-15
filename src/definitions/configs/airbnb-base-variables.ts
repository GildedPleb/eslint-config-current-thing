// PathMark: ./src/definitions/configs/airbnb-base.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Variables",
  packages: [
    {
      declaredAs: "airbnbBaseVariables",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/variables",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseVariables.rules,`,
} satisfies Config;
// EOF
