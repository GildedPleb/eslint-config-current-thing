// PathMark: ./src/definitions/plugins/unsanitized.ts
import type { Plugin } from ".";

export default {
  name: "No Unsanitized",
  packages: [
    {
      key: "no-unsanitized",
      name: "unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
