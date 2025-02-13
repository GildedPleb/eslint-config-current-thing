// PathMark: ./src/definitions/plugins/mocha.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Mocha",
  packages: [
    {
      declaredAs: "mocha",
      mappedAs: "mocha",
      namespace: "mocha",
      package: "eslint-plugin-mocha",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"mocha">;
// EOF
