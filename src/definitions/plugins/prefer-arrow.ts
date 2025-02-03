// PathMark: ./src/definitions/plugins/prefer-arrow.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Prefer Arrow",
  packages: [
    {
      declaredAs: "preferArrow",
      mappedAs: "preferArrow",
      namespace: "prefer-arrow",
      package: "eslint-plugin-prefer-arrow",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"prefer-arrow">;
// EOF
