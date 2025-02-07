// PathMark: ./src/definitions/plugins/security.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Antfu",
  packages: [
    {
      declaredAs: "antfu",
      mappedAs: "antfu",
      namespace: "antfu",
      package: "eslint-plugin-antfu",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"antfu">;
// EOF
