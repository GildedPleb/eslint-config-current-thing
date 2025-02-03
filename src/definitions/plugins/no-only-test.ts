// PathMark: ./src/definitions/plugins/no-only-test.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "No Only Tests",
  packages: [
    {
      declaredAs: "noOnlyTest",
      mappedAs: "noOnlyTest",
      namespace: "no-only-tests",
      package: "eslint-plugin-no-only-tests",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"no-only-tests">;
// EOF
