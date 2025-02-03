// PathMark: ./src/definitions/configs/prettier-json.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "JSON",
  packages: [
    {
      declaredAs: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier"],
  rules: `"prettier/prettier": 2,`,
} satisfies Config;
// EOF
