// PathMark: ./src/definitions/plugins/import-x.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Import X",
  packages: [
    {
      declaredAs: "importX",
      mappedAs: "importX",
      namespace: "import-x",
      package: "eslint-plugin-import-x",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"import-x">;
// EOF
