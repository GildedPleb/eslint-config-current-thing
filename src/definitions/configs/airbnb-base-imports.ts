// PathMark: ./src/definitions/configs/airbnb-base-imports.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "Imports",
  packages: [
    {
      declaredAs: "airbnbBaseImports",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/imports",
    },
  ],
  requiredPlugins: ["import"],
  rules: `...airbnbBaseImports.rules,`,
} satisfies Config;
// EOF
