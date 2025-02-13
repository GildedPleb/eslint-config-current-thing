// PathMark: ./src/definitions/plugins/jsonc.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "JSONC",
  packages: [
    {
      declaredAs: "jsonc",
      mappedAs: "jsonc",
      namespace: "jsonc",
      package: "eslint-plugin-jsonc",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jsonc">;
// EOF
