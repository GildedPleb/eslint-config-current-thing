// PathMark: ./src/definitions/plugins/import.ts
import type { Plugin } from ".";

export default {
  name: "Import",
  packages: [
    {
      declaredAs: "importPlugin",
      namespace: "import",
      package: "eslint-plugin-import",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"import">;
// EOF
