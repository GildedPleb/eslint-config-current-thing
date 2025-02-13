// PathMark: ./src/definitions/plugins/playwright.ts

import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Playwright",
  packages: [
    {
      declaredAs: "playwright",
      mappedAs: "playwright",
      namespace: "playwright",
      package: "eslint-plugin-playwright",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"playwright">;
// EOF
