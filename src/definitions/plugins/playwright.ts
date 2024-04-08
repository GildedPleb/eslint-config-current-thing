// PathMark: ./src/definitions/plugins/jest.ts

import type { Plugin } from ".";

export default {
  name: "Playwright",
  packages: [
    {
      declaredAs: "playwright",
      namespace: "playwright",
      package: "eslint-plugin-playwright",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"playwright">;
// EOF
