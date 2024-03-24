// PathMark: ./src/definitions/plugins/perfectionist.ts
import type { Plugin } from ".";

export default {
  name: "Perfectionist",
  packages: [
    {
      key: "perfectionist",
      name: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
