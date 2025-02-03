// PathMark: ./src/definitions/plugins/jest-formatting.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Jest Formatting",
  packages: [
    {
      declaredAs: "jestFormatting",
      mappedAs: "jestFormatting",
      namespace: "jest-formatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jest-formatting">;
// EOF
