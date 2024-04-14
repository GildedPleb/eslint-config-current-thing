// PathMark: ./src/definitions/plugins/yml.ts
import type { Plugin } from ".";

export default {
  name: "YML",
  packages: [
    {
      declaredAs: "yml",
      namespace: "yml",
      package: "eslint-plugin-yml",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"yml">;
// EOF
