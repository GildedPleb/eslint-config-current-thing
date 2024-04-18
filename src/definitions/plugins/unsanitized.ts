// PathMark: ./src/definitions/plugins/unsanitized.ts
import type { Plugin } from ".";

export default {
  name: "No Unsanitized",
  packages: [
    {
      declaredAs: "unsanitized",
      mappedAs: "unsanitized",
      namespace: "no-unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"no-unsanitized">;
// EOF
