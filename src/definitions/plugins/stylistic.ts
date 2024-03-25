// PathMark: ./src/definitions/plugins/stylistic.ts
import type { Plugin } from ".";

export default {
  name: "Stylistic",
  packages: [
    {
      key: "@stylistic",
      name: "stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
