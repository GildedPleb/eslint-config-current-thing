// PathMark: ./src/definitions/configs/prettier-md.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    ${RULES}
  }`,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "MD",
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
