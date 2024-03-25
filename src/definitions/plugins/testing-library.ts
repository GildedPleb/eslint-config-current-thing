// PathMark: ./src/definitions/plugins/testing-library.ts
import type { Plugin } from ".";

export default {
  name: "Testing Library",
  packages: [
    {
      key: "testing-library",
      name: "testingLibrary",
      package: "eslint-plugin-testing-library",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
