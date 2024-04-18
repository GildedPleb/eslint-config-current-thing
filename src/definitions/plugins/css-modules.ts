// PathMark: ./src/definitions/plugins/css-modules.ts
import type { Plugin } from ".";

export default {
  name: "CSS Modules",
  packages: [
    {
      declaredAs: "cssModules",
      mappedAs: "cssModules",
      namespace: "css-modules",
      package: "eslint-plugin-css-modules",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"css-modules">;
// EOF
