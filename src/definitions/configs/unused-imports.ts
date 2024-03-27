// PathMark: ./src/definitions/configs/unused-imports.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "unused-imports",
  name: "No Unused Imports",
  packages: [
    {
      name: "unusedImports",
      package: "eslint-plugin-unused-imports",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["unused-imports"],
  rules: `{
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "unused-imports/no-unused-imports": 2,
    "unused-imports/no-unused-vars": [
        "warn",
        {
            "vars": "all",
            "varsIgnorePattern": "^_",
            "args": "after-used",
            "argsIgnorePattern": "^_",
        },
    ],
}`,
} satisfies Config;
// EOF
