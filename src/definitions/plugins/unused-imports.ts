// PathMark: ./src/definitions/plugins/unused-imports.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Unused Imports",
  packages: [
    {
      declaredAs: "unusedImports",
      mappedAs: "unusedImports",
      namespace: "unused-imports",
      package: "eslint-plugin-unused-imports",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"unused-imports">;
// EOF
