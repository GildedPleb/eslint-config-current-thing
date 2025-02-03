// PathMark: ./src/definitions/configs/comments.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    // CommentsOld (mysticatea/eslint-plugin-eslint-comments) intentionally
    // left out: it has the most downloads, but is out of date / not maintained.
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "comments",
  name: "Comments",
  packages: [
    {
      declaredAs: "comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
      requiresImport: false,
    },
    {
      declaredAs: "commentsOld",
      package: "eslint-plugin-eslint-comments",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["eslint-comments", "@eslint-community/eslint-comments"],
  rules: `...comments.configs.recommended.rules,`,
} satisfies Config;
// EOF
