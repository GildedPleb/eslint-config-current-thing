// PathMark: ./src/definitions/plugins/stylistic.ts
import type { Plugin } from ".";

export default {
  name: "Stylistic",
  packages: [
    {
      declaredAs: "stylistic",
      namespace: "@stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@stylistic">;
// EOF
