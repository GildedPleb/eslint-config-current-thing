// PathMark: ./src/definitions/configs/prettier-plugin.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "Plugin",
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
