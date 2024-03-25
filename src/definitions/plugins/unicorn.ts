// PathMark: ./src/definitions/plugins/unicorn.ts
import type { Plugin } from ".";

export default {
  name: "Unicorn",
  packages: [
    {
      key: "unicorn",
      name: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
