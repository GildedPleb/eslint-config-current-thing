// PathMark: ./src/definitions/plugins/markdown.ts
import type { Plugin } from ".";

export default {
  name: "Markdown",
  packages: [
    {
      declaredAs: "markdown",
      namespace: "markdown",
      package: "eslint-plugin-markdown",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"markdown">;
// EOF
