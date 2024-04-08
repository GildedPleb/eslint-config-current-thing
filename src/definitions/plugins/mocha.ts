// PathMark: ./src/definitions/plugins/mocha.ts
import type { Plugin } from ".";

export default {
  name: "Mocha",
  packages: [
    {
      declaredAs: "mocha",
      namespace: "mocha",
      package: "eslint-plugin-mocha",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"mocha">;
// EOF
