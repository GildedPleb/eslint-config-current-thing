// PathMark: ./src/definitions/plugins/unicorn.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Unicorn",
  packages: [
    {
      declaredAs: "unicorn",
      mappedAs: "unicorn",
      namespace: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"unicorn">;
// EOF
