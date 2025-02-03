// PathMark: ./src/definitions/configs/airbnb-base-strict.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Strict",
  packages: [
    {
      declaredAs: "airbnbBaseStrict",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
      subModule: "/rules/strict",
    },
  ],
  requiredPlugins: [],
  rules: `strict: [2, "never"],`,
} satisfies Config;
// EOF
