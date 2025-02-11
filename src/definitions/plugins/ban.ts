// PathMark: ./src/definitions/plugins/unused-imports.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Ban",
  packages: [
    {
      declaredAs: "ban",
      mappedAs: "ban",
      namespace: "ban",
      package: "eslint-plugin-ban",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"ban">;
// EOF
