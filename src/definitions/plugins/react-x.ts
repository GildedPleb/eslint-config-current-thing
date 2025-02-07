// PathMark: ./src/definitions/plugins/react-compiler.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React X",
  packages: [
    {
      declaredAs: "reactX",
      mappedAs: "reactX",
      namespace: "react-x",
      package: "eslint-plugin-react-x",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-x">;
// EOF
