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
    {
      declaredAs: "prettier",
      mappedAs: "prettier",
      namespace: "prettier-package-json",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"prettier" | "prettier-package-json">;
// EOF
