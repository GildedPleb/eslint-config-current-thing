// PathMark: ./src/definitions/plugins/html.ts
import type { Plugin } from ".";

export default {
  name: "HTML",
  packages: [
    {
      declaredAs: "html",
      namespace: "html",
      package: "eslint-plugin-html",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"html">;
// EOF
