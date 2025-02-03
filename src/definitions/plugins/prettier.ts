// PathMark: ./src/definitions/plugins/prettier.ts
import type { Plugin } from ".";

const epp = "eslint-plugin-prettier";

export default {
  enabled: true,
  name: "Prettier",
  packages: [
    {
      declaredAs: "prettier",
      mappedAs: "prettier",
      namespace: "prettier",
      package: epp,
      requiresImport: true,
    },
    {
      declaredAs: "prettier",
      mappedAs: "prettier",
      namespace: "prettier-package-json",
      package: epp,
      requiresImport: false,
    },
    {
      declaredAs: "prettier",
      mappedAs: "prettier",
      namespace: "prettier-tailwind",
      package: epp,
      requiresImport: false,
    },
  ],
} satisfies Plugin<"prettier" | "prettier-package-json" | "prettier-tailwind">;
// EOF
