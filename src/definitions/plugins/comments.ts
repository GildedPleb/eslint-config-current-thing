// PathMark: ./src/definitions/plugins/comments.ts
import type { Plugin } from ".";

export default {
  name: "Comments",
  packages: [
    {
      key: "@eslint-community/eslint-comments",
      name: "comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
      requiresImport: true,
    },
    {
      key: "eslint-comments",
      name: "commentsOld",
      package: "eslint-plugin-eslint-comments",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
