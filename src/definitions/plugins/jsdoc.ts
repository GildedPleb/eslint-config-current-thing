// PathMark: ./src/definitions/plugins/jsdoc.ts
import type { Plugin } from ".";

export default {
  name: "JSDoc",
  packages: [
    {
      declaredAs: "jsdoc",
      mappedAs: "jsdoc",
      namespace: "jsdoc",
      package: "eslint-plugin-jsdoc",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jsdoc">;
// EOF
