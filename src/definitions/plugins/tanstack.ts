// PathMark: ./src/definitions/plugins/tanstack.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Stylistic",
  packages: [
    {
      declaredAs: "tanstack",
      mappedAs: "tanstack",
      namespace: "@tanstack",
      package: "@tanstack/eslint-plugin-query",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@tanstack">;
// EOF
