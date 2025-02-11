// PathMark: ./src/definitions/plugins/relay.ts
import type { Plugin } from ".";

export default {
  enabled: false,
  name: "Relay",
  packages: [
    {
      declaredAs: "relay",
      mappedAs: "relay",
      namespace: "relay",
      package: "eslint-plugin-relay",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"relay">;
// EOF
