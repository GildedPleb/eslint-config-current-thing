// PathMark: ./src/definitions/plugins/security.ts
import type { Plugin } from ".";

export default {
  name: "Security",
  packages: [
    {
      key: "security",
      name: "security",
      package: "eslint-plugin-security",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
