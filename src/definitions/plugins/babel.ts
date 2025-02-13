// PathMark: ./src/definitions/plugins/babel.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Babel",
  packages: [
    {
      declaredAs: "babelPlugin",
      mappedAs: "babelPlugin",
      namespace: "@babel",
      package: "@babel/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@babel">;
// EOF
