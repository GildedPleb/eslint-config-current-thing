// PathMark: ./src/definitions/plugins/regexp.ts
import type { Plugin } from ".";

export default {
  name: "Regular Expressions",
  packages: [
    {
      key: "regexp",
      name: "regexp",
      package: "eslint-plugin-regexp",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
