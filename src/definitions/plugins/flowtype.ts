// PathMark: ./src/definitions/plugins/flowtype.ts
import type { Plugin } from ".";

export default {
  name: "Flowtype",
  packages: [
    {
      declaredAs: "flowtype",
      namespace: "flowtype",
      package: "eslint-plugin-flowtype",
      requiresImport: true,
    },
    {
      declaredAs: "ftFlow",
      namespace: "ft-flow",
      package: "eslint-plugin-ft-flow",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"flowtype" | "ft-flow">;
// EOF
