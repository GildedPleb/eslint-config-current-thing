// PathMark: ./src/definitions/plugins/storybook.ts
import type { Plugin } from ".";

export default {
  name: "Storybook",
  packages: [
    {
      key: "storybook",
      name: "storybook",
      package: "eslint-plugin-storybook",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
