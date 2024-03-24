// PathMark: ./src/definitions/plugins/promises.ts
import type { Plugin } from ".";

export default {
  name: "Promises",
  packages: [
    {
      key: "promise",
      name: "promise",
      package: "eslint-plugin-promise",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
