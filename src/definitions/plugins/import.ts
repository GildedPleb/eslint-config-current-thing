// PathMark: ./src/definitions/plugins/import.ts
import type { Plugin } from ".";

export default {
  name: "Import",
  packages: [
    {
      key: "import",
      name: "importPlugin",
      package: "eslint-plugin-import",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
