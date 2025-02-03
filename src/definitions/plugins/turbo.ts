// PathMark: ./src/definitions/plugins/turbo.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "turbo",
  packages: [
    {
      declaredAs: "turbo",
      mappedAs: "turbo",
      namespace: "turbo",
      package: "eslint-plugin-turbo",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"turbo">;
// EOF
