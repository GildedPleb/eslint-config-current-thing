// PathMark: ./src/definitions/plugins/flowtype.ts
import type { Plugin } from ".";

export default {
  name: "Flowtype",
  packages: [
    {
      key: "flowtype",
      name: "flowtype",
      package: "eslint-plugin-flowtype",
      requiresImport: true,
    },
    {
      key: "ft-flow",
      name: "ftFlow",
      package: "eslint-plugin-ft-flow",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
