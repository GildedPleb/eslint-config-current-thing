// PathMark: ./src/definitions/plugins/sort-keys.ts
import type { Plugin } from ".";

export default {
  name: "Typescript Sort Keys",
  packages: [
    {
      declaredAs: "sortKeys",
      namespace: "typescript-sort-keys",
      package: "eslint-plugin-typescript-sort-keys",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"typescript-sort-keys">;
// EOF
