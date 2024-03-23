// PathMark: ./src/definitions/plugins/jest-dom.ts
import type { Plugin } from ".";

export default {
  name: "Jest Dom",
  packages: [
    {
      key: "jest-dom",
      name: "jestDom",
      package: "eslint-plugin-jest-dom",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
