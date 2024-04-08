// PathMark: ./src/definitions/plugins/jsonc.ts
import type { Plugin } from ".";

export default {
  name: "JSONC",
  packages: [
    {
      declaredAs: "jsonc",
      namespace: "jsonc",
      package: "eslint-plugin-jsonc",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jsonc">;
// EOF
