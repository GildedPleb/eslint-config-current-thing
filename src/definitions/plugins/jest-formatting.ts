// PathMark: ./src/definitions/plugins/jest-formatting.ts
import type { Plugin } from ".";

export default {
  name: "Jest Formatting",
  packages: [
    {
      declaredAs: "jestFormatting",
      namespace: "jest-formatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jest-formatting">;
// EOF
