// PathMark: ./src/definitions/plugins/comments.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Comments",
  packages: [
    {
      declaredAs: "comments",
      mappedAs: "comments",
      namespace: "eslint-comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"eslint-comments">;
// EOF
