// PathMark: ./src/definitions/plugins/prettier.ts
import type { Plugin } from ".";

export default {
  name: "Prettier",
  packages: [
    {
      key: "prettier",
      name: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
