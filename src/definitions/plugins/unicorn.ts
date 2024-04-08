// PathMark: ./src/definitions/plugins/unicorn.ts
import type { Plugin } from ".";

export default {
  name: "Unicorn",
  packages: [
    {
      declaredAs: "unicorn",
      namespace: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"unicorn">;
// EOF
