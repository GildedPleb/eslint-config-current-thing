// PathMark: ./src/definitions/plugins/check-file.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Check File",
  packages: [
    {
      declaredAs: "checkFile",
      mappedAs: "checkFile",
      namespace: "check-file",
      package: "eslint-plugin-check-file",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"check-file">;
// EOF
