// PathMark: ./src/definitions/plugins/jest-dom.ts
import type { Plugin } from ".";

export default {
  name: "Jest Dom",
  packages: [
    {
      declaredAs: "jestDom",
      namespace: "jest-dom",
      package: "eslint-plugin-jest-dom",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jest-dom">;
// EOF
