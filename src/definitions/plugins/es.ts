// PathMark: ./src/definitions/plugins/es.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "ES-X",
  packages: [
    {
      declaredAs: "esX",
      mappedAs: "esX",
      namespace: "es-x",
      package: "eslint-plugin-es-x",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"es-x">;
// EOF
