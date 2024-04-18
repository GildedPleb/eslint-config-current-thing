// PathMark: ./src/definitions/plugins/perfectionist.ts
import type { Plugin } from ".";

export default {
  name: "Perfectionist",
  packages: [
    {
      declaredAs: "perfectionist",
      mappedAs: "perfectionist",
      namespace: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"perfectionist">;
// EOF
