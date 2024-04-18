// PathMark: ./src/definitions/plugins/security.ts
import type { Plugin } from ".";

export default {
  name: "Security",
  packages: [
    {
      declaredAs: "security",
      mappedAs: "security",
      namespace: "security",
      package: "eslint-plugin-security",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"security">;
// EOF
