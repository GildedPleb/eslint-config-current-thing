// PathMark: ./src/definitions/plugins/promises.ts
import type { Plugin } from ".";

export default {
  name: "Promises",
  packages: [
    {
      declaredAs: "promise",
      mappedAs: "promise",
      namespace: "promise",
      package: "eslint-plugin-promise",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"promise">;
// EOF
