// PathMark: ./src/definitions/plugins/babel.ts
import type { Plugin } from ".";

export default {
  name: "Babel",
  packages: [
    {
      key: "@babel",
      name: "babelPlugin",
      package: "@babel/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
