// PathMark: ./src/definitions/plugins/nextjs.ts
import type { Plugin } from ".";

export default {
  name: "NextJS",
  packages: [
    {
      declaredAs: "nextjs",
      mappedAs: "nextjs",
      namespace: "@next/next",
      package: "@next/eslint-plugin-next",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@next/next">;
// EOF
