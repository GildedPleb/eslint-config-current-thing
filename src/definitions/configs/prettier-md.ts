// PathMark: ./src/definitions/configs/prettier-md.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "MD",
  packages: [
    {
      declaredAs: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier"],
  rules: `"prettier/prettier": [2, { parser: "markdown" }],`,
} satisfies Config;
// EOF
