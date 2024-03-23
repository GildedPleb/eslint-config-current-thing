// PathMark: ./src/definitions/plugins/import-sort.ts
import type { Plugin } from ".";

export default {
  name: "Simple Import Sort",
  packages: [
    {
      key: "simple-import-sort",
      name: "importSort",
      package: "eslint-plugin-simple-import-sort",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
