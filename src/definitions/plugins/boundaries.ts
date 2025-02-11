// PathMark: ./src/definitions/plugins/unused-imports.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Boundaries",
  packages: [
    {
      declaredAs: "boundaries",
      mappedAs: "boundaries",
      namespace: "boundaries",
      package: "eslint-plugin-boundaries",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"boundaries">;
// EOF
