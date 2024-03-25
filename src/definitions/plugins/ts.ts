// PathMark: ./src/definitions/plugins/ts.ts
import type { Plugin } from ".";

export default {
  name: "TypeScript",
  packages: [
    {
      key: "@typescript-eslint",
      name: "tseslint.plugin",
      package: "typescript-eslint",
      requiresImport: false,
    },
  ],
} satisfies Plugin;
// EOF
