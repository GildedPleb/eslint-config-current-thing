// PathMark: ./src/definitions/plugins/i18next.ts
import type { Plugin } from ".";

export default {
  name: "i18n",
  packages: [
    {
      key: "i18next",
      name: "i18next",
      package: "eslint-plugin-i18next",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
