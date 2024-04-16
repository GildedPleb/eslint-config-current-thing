// PathMark: ./src/definitions/configs/prettier-json.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    ${RULES}
  }`,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "JSON",
  packages: [
    {
      declaredAs: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
    {
      declaredAs: "prettierConfig",
      package: "eslint-config-prettier",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier"],
  rules: `"prettier/prettier": 2,`,
} satisfies Config;
// EOF
