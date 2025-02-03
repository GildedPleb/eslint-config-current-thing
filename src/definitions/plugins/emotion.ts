// PathMark: ./src/definitions/plugins/emotion.ts
import type { Plugin } from ".";

export default {
  enabled: false,
  name: "Emotion CSS",
  packages: [
    {
      declaredAs: "{ rules as emotion }",
      mappedAs: "{ rules: emotion }",
      namespace: "@emotion",
      package: "@emotion/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@emotion">;
// EOF
