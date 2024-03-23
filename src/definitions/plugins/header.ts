// PathMark: ./src/definitions/plugins/header.ts
import type { Plugin } from ".";

export default {
  name: "Header",
  packages: [
    {
      key: "header",
      name: "header",
      package: "eslint-plugin-header",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
