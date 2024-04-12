// PathMark: ./src/definitions/configs/unused-imports.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "unused-imports/no-unused-imports": ["ts"],
    "unused-imports/no-unused-vars": ["ts"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "unused-imports",
  name: "No Unused Imports",
  packages: [
    {
      declaredAs: "unusedImports",
      package: "eslint-plugin-unused-imports",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["unused-imports"],
  rules: `// These rules all come "recommended"
    "unused-imports/no-unused-imports": 2,
    "unused-imports/no-unused-vars": [
      1,
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],`,
} satisfies Config;
// EOF
