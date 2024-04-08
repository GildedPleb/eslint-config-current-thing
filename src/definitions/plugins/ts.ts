// PathMark: ./src/definitions/plugins/ts.ts
import type { Plugin } from ".";

export default {
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint.plugin",
      namespace: "@typescript-eslint",
      package: "typescript-eslint",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@typescript-eslint">;
// EOF
