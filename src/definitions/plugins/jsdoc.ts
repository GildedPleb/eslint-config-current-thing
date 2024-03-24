// PathMark: ./src/definitions/plugins/jsdoc.ts
import type { Plugin } from ".";

export default {
  name: "JSDoc",
  packages: [
    {
      key: "jsdoc",
      name: "jsdoc",
      package: "eslint-plugin-jsdoc",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
