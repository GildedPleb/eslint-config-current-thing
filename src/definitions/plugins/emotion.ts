// PathMark: ./src/definitions/plugins/emotion.ts
import type { Plugin } from ".";

export default {
  name: "Emotion CSS",
  packages: [
    {
      declaredAs: "{ rules: emotion }",
      namespace: "@emotion",
      package: "@emotion/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@emotion">;
// EOF
