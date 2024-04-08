// PathMark: ./src/definitions/configs/prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "prettier",
  name: "Prettier",
  packages: [
    {
      declaredAs: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
    {
      declaredAs: "prettierConfig",
      package: "eslint-config-prettier",
      requiresImport: true,
    },
  ],
  requiredPlugins: [
    "prettier",
    "@typescript-eslint",
    "@babel",
    "unicorn",
    "flowtype",
    "react",
  ],
  rules: `...prettierConfig.rules,
    "prettier/prettier": 2,`,
} satisfies Config;
// EOF
