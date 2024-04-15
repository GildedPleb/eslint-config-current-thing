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
  nameSecondary: "Strict",
  packages: [
    {
      declaredAs: "airbnbBaseStrict",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/strict",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseStrict.rules,`,
} satisfies Config;
// EOF
