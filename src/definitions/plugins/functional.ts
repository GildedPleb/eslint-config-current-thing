// PathMark: ./src/definitions/plugins/functional.ts
import type { Plugin } from ".";

export default {
  name: "Functional",
  packages: [
    {
      declaredAs: "functional",
      mappedAs: "functional",
      namespace: "functional",
      package: "eslint-plugin-functional",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"functional">;
// EOF
