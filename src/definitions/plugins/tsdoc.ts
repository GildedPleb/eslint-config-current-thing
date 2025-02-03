// PathMark: ./src/definitions/plugins/tsdoc.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "TSDoc",
  packages: [
    {
      declaredAs: "tsdoc",
      mappedAs: "tsdoc",
      namespace: "tsdoc",
      package: "eslint-plugin-tsdoc",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"tsdoc">;
// EOF
