// PathMark: ./src/definitions/plugins/testing-library.ts
import type { Plugin } from ".";

export default {
  name: "Testing Library",
  packages: [
    {
      declaredAs: "testingLibrary",
      namespace: "testing-library",
      package: "eslint-plugin-testing-library",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"testing-library">;
// EOF
