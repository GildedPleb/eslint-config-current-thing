// PathMark: ./src/definitions/plugins/jasmine.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Jasmine",
  packages: [
    {
      declaredAs: "jasmine",
      mappedAs: "jasmine",
      namespace: "jasmine",
      package: "eslint-plugin-jasmine",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jasmine">;
// EOF
