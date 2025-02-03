// PathMark: ./src/definitions/plugins/yml.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "YML",
  packages: [
    {
      declaredAs: "yml",
      mappedAs: "yml",
      namespace: "yml",
      package: "eslint-plugin-yml",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"yml">;
// EOF
