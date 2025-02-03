// PathMark: ./src/definitions/plugins/i18next.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "i18n",
  packages: [
    {
      declaredAs: "i18next",
      mappedAs: "i18next",
      namespace: "i18next",
      package: "eslint-plugin-i18next",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"i18next">;
// EOF
