// PathMark: ./src/definitions/plugins/jest-formatting.ts
import type { Plugin } from ".";

export default {
  name: "Jest Formatting",
  packages: [
    {
      key: "jest-formatting",
      name: "jestFormatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
