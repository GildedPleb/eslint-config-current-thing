// PathMark: ./src/definitions/configs/ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "ts",
  name: "TypeScript",
  packages: [
    { name: "tseslint", package: "typescript-eslint", requiresImport: true },
    {
      name: "typescriptParser",
      package: "@typescript-eslint/parser",
      requiresImport: false,
    },
    {
      name: "typescriptPlugin",
      package: "@typescript-eslint/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...tseslint.configs.recommendedTypeChecked[1].rules,
    ...tseslint.configs.recommendedTypeChecked[2].rules,
    "@typescript-eslint/indent": 0,`,
} satisfies Config;
// EOF
