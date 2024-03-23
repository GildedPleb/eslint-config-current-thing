// PathMark: ./src/definitions/plugins/jest.ts
import type { Plugin } from ".";

export default {
  name: "Jest",
  packages: [
    {
      key: "jest",
      name: "jest",
      package: "eslint-plugin-jest",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
