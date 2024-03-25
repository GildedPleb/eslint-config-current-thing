// PathMark: ./src/definitions/plugins/unused-imports.ts
import type { Plugin } from ".";

export default {
  name: "Unused Imports",
  packages: [
    {
      key: "unused-imports",
      name: "unusedImports",
      package: "eslint-plugin-unused-imports",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
