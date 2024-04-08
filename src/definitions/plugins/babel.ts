// PathMark: ./src/definitions/plugins/babel.ts
import type { Plugin } from ".";

export default {
  name: "Babel",
  packages: [
    {
      declaredAs: "babelPlugin",
      namespace: "@babel",
      package: "@babel/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@babel">;
// EOF
