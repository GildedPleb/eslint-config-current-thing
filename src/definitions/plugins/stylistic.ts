// PathMark: ./src/definitions/plugins/stylistic.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Stylistic",
  packages: [
    {
      declaredAs: "stylistic",
      mappedAs: "stylistic",
      namespace: "@stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@stylistic">;
// EOF
