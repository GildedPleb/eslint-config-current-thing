// PathMark: ./src/definitions/plugins/ts.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint",
      mappedAs: "tseslint.plugin",
      namespace: "@typescript-eslint",
      package: "typescript-eslint",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@typescript-eslint">;
// EOF
