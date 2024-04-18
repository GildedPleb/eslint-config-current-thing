// PathMark: ./src/definitions/plugins/regexp.ts
import type { Plugin } from ".";

export default {
  name: "Regular Expressions",
  packages: [
    {
      declaredAs: "regexp",
      mappedAs: "regexp",
      namespace: "regexp",
      package: "eslint-plugin-regexp",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"regexp">;
// EOF
