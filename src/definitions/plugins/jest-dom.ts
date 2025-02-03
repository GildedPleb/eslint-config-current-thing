// PathMark: ./src/definitions/plugins/jest-dom.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Jest Dom",
  packages: [
    {
      declaredAs: "jestDom",
      mappedAs: "jestDom",
      namespace: "jest-dom",
      package: "eslint-plugin-jest-dom",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jest-dom">;
// EOF
