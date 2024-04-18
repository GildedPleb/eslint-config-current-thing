// PathMark: ./src/definitions/plugins/prettier.ts
import type { Plugin } from ".";

export default {
  name: "Prettier",
  packages: [
    {
      declaredAs: "prettier",
      mappedAs: "prettier",
      namespace: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"prettier">;
// EOF
