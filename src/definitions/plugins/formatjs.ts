// PathMark: ./src/definitions/plugins/functional-components.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "FormatJS",
  packages: [
    {
      declaredAs: "formatJs",
      mappedAs: "formatJs",
      namespace: "formatjs",
      package: "eslint-plugin-formatjs",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"formatjs">;
// EOF
