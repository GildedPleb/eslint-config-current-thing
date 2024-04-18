// PathMark: ./src/definitions/configs/airbnb-base-best-practices.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Best-Practices",
  packages: [
    {
      declaredAs: "airbnbBaseBestPractices",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/best-practices",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseBestPractices.rules,`,
} satisfies Config;
// EOF
