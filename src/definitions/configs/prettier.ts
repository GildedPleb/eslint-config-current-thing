// PathMark: ./src/definitions/configs/prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "prettier",
  name: "Prettier",
  packages: [
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
    "react",
    "@stylistic",
  ],
  rules: `...prettierConfig.rules,
    "prettier/prettier": 2,`,
} satisfies Config;
// EOF
