// PathMark: ./src/definitions/plugins/jest.ts
import type { Plugin } from ".";

export default {
  name: "Jest",
  packages: [
    {
      declaredAs: "jest",
      mappedAs: "jest",
      namespace: "jest",
      package: "eslint-plugin-jest",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jest">;
// EOF
