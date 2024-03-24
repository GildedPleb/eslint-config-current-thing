// PathMark: ./src/definitions/plugins/nextjs.ts
import type { Plugin } from ".";

export default {
  name: "NextJS",
  packages: [
    {
      key: "@next/next",
      name: "nextjs",
      package: "@next/eslint-plugin-next",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
