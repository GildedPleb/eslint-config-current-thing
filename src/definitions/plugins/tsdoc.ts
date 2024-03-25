// PathMark: ./src/definitions/plugins/tsdoc.ts
import type { Plugin } from ".";

export default {
  name: "TSDoc",
  packages: [
    {
      key: "tsdoc",
      name: "tsdoc",
      package: "eslint-plugin-tsdoc",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
