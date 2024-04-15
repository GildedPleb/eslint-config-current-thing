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
  nameSecondary: "Node",
  packages: [
    {
      declaredAs: "airbnbBaseNode",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/node",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseNode.rules,`,
} satisfies Config;
// EOF
