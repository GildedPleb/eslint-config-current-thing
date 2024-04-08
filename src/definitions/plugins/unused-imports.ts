// PathMark: ./src/definitions/plugins/unused-imports.ts
import type { Plugin } from ".";

export default {
  name: "Unused Imports",
  packages: [
    {
      declaredAs: "unusedImports",
      namespace: "unused-imports",
      package: "eslint-plugin-unused-imports",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"unused-imports">;
// EOF
