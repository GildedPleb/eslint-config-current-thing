// PathMark: ./src/definitions/plugins/md.ts
import type { Plugin } from ".";

export default {
  enabled: false,
  name: "Markdown",
  packages: [
    {
      declaredAs: "markdown",
      mappedAs: "markdown",
      namespace: "markdown",
      package: "eslint-plugin-markdown",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"markdown">;
// EOF
