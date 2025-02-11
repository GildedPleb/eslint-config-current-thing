// PathMark: ./src/definitions/plugins/no-relative-import.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "No Relative Import Paths",
  packages: [
    {
      declaredAs: "noRelativeImport",
      mappedAs: "noRelativeImport",
      namespace: "no-relative-import-paths",
      package: "eslint-plugin-no-relative-import-paths",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"no-relative-import-paths">;
// EOF
