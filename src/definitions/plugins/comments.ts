// PathMark: ./src/definitions/plugins/comments.ts
import type { Plugin } from ".";

export default {
  name: "Comments",
  packages: [
    {
      declaredAs: "comments",
      namespace: "@eslint-community/eslint-comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
      requiresImport: true,
    },
    {
      declaredAs: "commentsOld",
      namespace: "eslint-comments",
      package: "eslint-plugin-eslint-comments",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@eslint-community/eslint-comments" | "eslint-comments">;
// EOF
