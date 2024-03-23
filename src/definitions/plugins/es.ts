// PathMark: ./src/definitions/plugins/es.ts
import type { Plugin } from ".";

export default {
  name: "ES-X",
  packages: [
    {
      key: "es-x",
      name: "esX",
      package: "eslint-plugin-es-x",
      requiresImport: true,
    },
    {
      key: "es",
      name: "es",
      package: "eslint-plugin-es",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
