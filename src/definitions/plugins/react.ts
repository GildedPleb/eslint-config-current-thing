// PathMark: ./src/definitions/plugins/react.ts
import type { Plugin } from ".";

export default {
  name: "React",
  packages: [
    {
      declaredAs: "react",
      namespace: "react",
      package: "eslint-plugin-react",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react">;
// EOF
