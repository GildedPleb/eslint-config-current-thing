// PathMark: ./src/definitions/plugins/vitest.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Vitest",
  packages: [
    {
      declaredAs: "vitest",
      mappedAs: "vitest",
      namespace: "vitest",
      package: "@vitest/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"vitest">;
// EOF
