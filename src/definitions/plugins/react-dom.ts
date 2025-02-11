// PathMark: ./src/definitions/plugins/react-dom.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React DOM",
  packages: [
    {
      declaredAs: "reactDom",
      mappedAs: "reactDom",
      namespace: "react-dom",
      package: "eslint-plugin-react-dom",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-dom">;
// EOF
