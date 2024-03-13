import { RULES } from "../../constants";
import type { Config } from ".";

export default {
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
  name: "Comments",
  packages: [
    {
      name: "comments",
      package: "@eslint-community/eslint-plugin-eslint-comments",
      requiresImport: true,
    },
    {
      name: "commentsOld",
      package: "eslint-plugin-eslint-comments",
      requiresImport: true,
    },
  ],
  rules: `{ ...comments.configs.recommended.rules }`,
} satisfies Config;
