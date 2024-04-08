// PathMark: ./src/definitions/plugins/i18next.ts
import type { Plugin } from ".";

export default {
  name: "i18n",
  packages: [
    {
      declaredAs: "i18next",
      namespace: "i18next",
      package: "eslint-plugin-i18next",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"i18next">;
// EOF
