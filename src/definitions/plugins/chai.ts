// PathMark: ./src/definitions/plugins/chai.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Chai Friendly",
  packages: [
    {
      declaredAs: "chaiFriendly",
      mappedAs: "chaiFriendly",
      namespace: "chai-friendly",
      package: "eslint-plugin-chai-friendly",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"chai-friendly">;
// EOF
