// PathMark: ./src/definitions/plugins/css-modules.ts
import type { Plugin } from ".";

export default {
  name: "CSS Modules",
  packages: [
    {
      key: "css-modules",
      name: "cssModules",
      package: "eslint-plugin-css-modules",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
