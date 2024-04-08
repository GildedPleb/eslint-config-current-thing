// PathMark: ./src/definitions/plugins/es.ts
import type { Plugin } from ".";

export default {
  name: "ES-X",
  packages: [
    {
      declaredAs: "esX",
      namespace: "es-x",
      package: "eslint-plugin-es-x",
      requiresImport: true,
    },
    {
      declaredAs: "es",
      namespace: "es",
      package: "eslint-plugin-es",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"es" | "es-x">;
// EOF
