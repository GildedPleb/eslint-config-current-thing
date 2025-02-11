// PathMark: ./src/definitions/plugins/depend.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Depend",
  packages: [
    {
      declaredAs: "depend",
      mappedAs: "depend",
      namespace: "depend",
      package: "eslint-plugin-depend",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"depend">;
// EOF
