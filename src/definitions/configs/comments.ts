// PathMark: ./src/definitions/configs/comments.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
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
  requiredPlugins: ["eslint-comments"],
  rules: `"eslint-comments/disable-enable-pair": 2,
    "eslint-comments/no-aggregating-enable": 2,
    "eslint-comments/no-duplicate-disable": 2,
    "eslint-comments/no-unlimited-disable": 2,
    "eslint-comments/no-unused-enable": 2,`,
} satisfies Config;
// EOF
