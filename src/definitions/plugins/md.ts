// PathMark: ./src/definitions/plugins/md.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Markdown",
  packages: [
    {
      declaredAs: "markdown",
      mappedAs: "markdown",
      namespace: "markdown",
      package: "@eslint/markdown",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"markdown">;
// EOF
