// PathMark: ./src/definitions/plugins/functional.ts
import type { Plugin } from ".";

export default {
  name: "Functional",
  packages: [
    {
      key: "functional",
      name: "functional",
      package: "eslint-plugin-functional",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
