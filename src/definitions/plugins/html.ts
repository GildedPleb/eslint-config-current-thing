// PathMark: ./src/definitions/plugins/html.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "HTML",
  packages: [
    {
      declaredAs: "html",
      mappedAs: "html",
      namespace: "html",
      package: "eslint-plugin-html",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"html">;
// EOF
