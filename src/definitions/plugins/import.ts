// PathMark: ./src/definitions/plugins/import.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Import",
  packages: [
    {
      declaredAs: "importPlugin",
      mappedAs: "importPlugin",
      namespace: "import",
      package: "eslint-plugin-import",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"import">;
// EOF
