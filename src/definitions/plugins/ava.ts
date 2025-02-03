// PathMark: ./src/definitions/plugins/ava.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Ava",
  packages: [
    {
      declaredAs: "ava",
      mappedAs: "ava",
      namespace: "ava",
      package: "eslint-plugin-ava",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"ava">;
// EOF
