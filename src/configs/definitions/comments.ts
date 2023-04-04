import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
    },
    {
      name: "commentsOld",
      package: "eslint-plugin-eslint-comments",
    },
  ],
  requiresImport: true,
  name: "Comments",
  definitions: `{
    files,
    plugins: {
      "@eslint-community/eslint-comments": comments,
      "eslint-comments": commentsOld,
    },
    // CommentsOld (mysticatea/eslint-plugin-eslint-comments) intentioanlly
    // left out: it has the most downloads, but is out of date / not maintained.
    ${RULES}
  }`,
  rules: `{ ...comments.configs.recommended.rules }`,
} satisfies Config;
