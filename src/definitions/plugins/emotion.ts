// PathMark: ./src/definitions/plugins/emotion.ts
import type { Plugin } from ".";

export default {
  name: "Emotion CSS",
  packages: [
    {
      key: "@emotion",
      name: "{ rules: emotion }",
      package: "@emotion/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin;
// EOF
