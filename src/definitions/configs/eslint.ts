// PathMark: ./src/definitions/configs/eslint.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "no-unused-vars": ["unused-imports"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "eslint",
  name: "ESLint",
  packages: [
    { declaredAs: "eslint", package: "@eslint/js", requiresImport: true },
  ],
  requiredPlugins: [],
  rules: `...eslint.configs.recommended.rules,`,
} satisfies Config;
// EOF
