// PathMark: ./src/definitions/plugins/import-sort.ts
import type { Plugin } from ".";

export default {
  name: "Simple Import Sort",
  packages: [
    {
      declaredAs: "importSort",
      mappedAs: "importSort",
      namespace: "simple-import-sort",
      package: "eslint-plugin-simple-import-sort",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"simple-import-sort">;
// EOF
