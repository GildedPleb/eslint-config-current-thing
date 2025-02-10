// PathMark: ./src/definitions/plugins/yml.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "TOML",
  packages: [
    {
      declaredAs: "toml",
      mappedAs: "toml",
      namespace: "toml",
      package: "eslint-plugin-toml",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"toml">;
// EOF
