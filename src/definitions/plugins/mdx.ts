// PathMark: ./src/definitions/plugins/mdx.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "MDX",
  packages: [
    {
      declaredAs: "* as mdx",
      mappedAs: "mdx",
      namespace: "mdx",
      package: "eslint-plugin-mdx",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"mdx">;
// EOF
