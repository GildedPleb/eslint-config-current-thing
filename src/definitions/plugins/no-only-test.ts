// PathMark: ./src/definitions/plugins/no-only-test.ts
import type { Plugin } from ".";

export default {
  name: "No Only Tests",
  packages: [
    {
      key: "no-only-tests",
      name: "noOnlyTest",
      package: "eslint-plugin-no-only-tests",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
