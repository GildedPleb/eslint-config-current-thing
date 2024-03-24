// PathMark: ./src/definitions/plugins/node.ts
import type { Plugin } from ".";

export default {
  name: "Node.js",
  packages: [
    {
      key: "n",
      name: "nNode",
      package: "eslint-plugin-n",
      requiresImport: true,
    },
    {
      key: "node",
      name: "node",
      package: "eslint-plugin-node",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
