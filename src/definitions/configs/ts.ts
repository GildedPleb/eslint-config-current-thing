// PathMark: ./src/definitions/configs/ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "@typescript-eslint/no-unused-vars": ["unused-imports"],
  },
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "ts",
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint",
      package: "typescript-eslint",
      requiresImport: true,
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
