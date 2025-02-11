// PathMark: ./src/definitions/plugins/sort-destructure.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Sort Destructure Keys",
  packages: [
    {
      declaredAs: "sortDestructure",
      mappedAs: "sortDestructure",
      namespace: "sort-destructure-keys",
      package: "eslint-plugin-sort-destructure-keys",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"sort-destructure-keys">;
// EOF
