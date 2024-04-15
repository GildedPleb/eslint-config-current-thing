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
  nameSecondary: "Errors",
  packages: [
    {
      declaredAs: "airbnbBaseErrors",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/errors",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseErrors.rules,`,
} satisfies Config;
// EOF
