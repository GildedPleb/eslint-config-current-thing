// PathMark: ./src/definitions/plugins/compat.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Command",
  packages: [
    {
      declaredAs: "command",
      mappedAs: "command",
      namespace: "command",
      package: "eslint-plugin-command",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"command">;
// EOF
