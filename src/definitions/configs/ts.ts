// PathMark: ./src/definitions/configs/ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "@typescript-eslint/no-unused-vars": ["unused-imports"],
    "perfectionist/sort-modules": ["perfectionist"],
    "unicorn/prefer-spread": ["unicorn"],
  },
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "ts",
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint",
      package: "typescript-eslint",
      requiresImport: false,
    },
    {
      declaredAs: "typescriptPlugin",
      package: "@typescript-eslint/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...tseslint.configs.recommendedTypeChecked[1].rules,
    ...tseslint.configs.recommendedTypeChecked[2].rules,`,
} satisfies Config;
// EOF
