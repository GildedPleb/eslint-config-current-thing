// PathMark: ./src/definitions/plugins/json.ts
import type { Plugin } from ".";

export default {
  name: "JSON",
  packages: [
    {
      declaredAs: "json",
      namespace: "json",
      package: "eslint-plugin-json",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"json">;
// EOF
