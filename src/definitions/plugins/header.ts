// PathMark: ./src/definitions/plugins/header.ts
import type { Plugin } from ".";

export default {
  name: "Header",
  packages: [
    {
      declaredAs: "header",
      mappedAs: "header",
      namespace: "header",
      package: "eslint-plugin-header",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"header">;
// EOF
