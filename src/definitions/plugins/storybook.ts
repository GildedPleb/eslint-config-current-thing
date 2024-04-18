// PathMark: ./src/definitions/plugins/storybook.ts
import type { Plugin } from ".";

export default {
  name: "Storybook",
  packages: [
    {
      declaredAs: "storybook",
      mappedAs: "storybook",
      namespace: "storybook",
      package: "eslint-plugin-storybook",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"storybook">;
// EOF
