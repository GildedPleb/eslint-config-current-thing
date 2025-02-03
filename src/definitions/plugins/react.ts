// PathMark: ./src/definitions/plugins/react.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React",
  packages: [
    {
      declaredAs: "react",
      mappedAs: "react",
      namespace: "react",
      package: "eslint-plugin-react",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react">;
// EOF
