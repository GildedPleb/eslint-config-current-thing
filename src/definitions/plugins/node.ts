// PathMark: ./src/definitions/plugins/node.ts
import type { Plugin } from ".";

export default {
  name: "Node.js",
  packages: [
    {
      declaredAs: "nNode",
      namespace: "n",
      package: "eslint-plugin-n",
      requiresImport: true,
    },
    {
      declaredAs: "node",
      namespace: "node",
      package: "eslint-plugin-node",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"n" | "node">;
// EOF
