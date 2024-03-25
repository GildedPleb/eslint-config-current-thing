// PathMark: ./src/definitions/plugins/deprecation.ts
import type { Plugin } from ".";

export default {
  name: "Deprecation",
  packages: [
    {
      key: "deprecation",
      name: "deprecation",
      package: "eslint-plugin-deprecation",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
