// PathMark: ./src/definitions/configs/perfectionist.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "@typescript-eslint/no-use-before-define": ["ts"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "perfectionist",
  name: "Perfectionist",
  packages: [
    {
      declaredAs: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["perfectionist"],
  rules: `...perfectionist.configs["recommended-natural"].rules,`,
} satisfies Config;
// EOF
