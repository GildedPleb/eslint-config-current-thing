// PathMark: ./src/definitions/configs/airbnb-base-es6.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "prefer-arrow-callback": ["mocha"],
  },
  definitions: `{
    files: jsFiles,
    ignores: testFiles,
    ${RULES}
  }`,
  id: "airbnb-base",
  name: "AirBnb Base",
  nameSecondary: "ES6",
  packages: [
    {
      declaredAs: "airbnbBaseES6",
      package: "eslint-config-airbnb-base",
      requiresImport: true,
      subModule: "/rules/es6",
    },
  ],
  requiredPlugins: [],
  rules: `...airbnbBaseES6.rules,`,
} satisfies Config;
// EOF
