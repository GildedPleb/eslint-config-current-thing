// PathMark: ./src/definitions/plugins/mdx.ts
import type { Plugin } from ".";

export default {
  name: "MDX",
  packages: [
    {
      declaredAs: "mdx",
      namespace: "mdx",
      package: "eslint-plugin-mdx",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"mdx">;
// EOF
