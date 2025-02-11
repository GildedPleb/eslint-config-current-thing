// PathMark: ./src/definitions/plugins/node.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Node.js",
  packages: [
    {
      declaredAs: "nNode",
      mappedAs: "nNode",
      namespace: "n",
      package: "eslint-plugin-n",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"n">;
// EOF
