// PathMark: ./src/definitions/plugins/react-compiler.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Compiler",
  packages: [
    {
      declaredAs: "reactCompiler",
      mappedAs: "reactCompiler",
      namespace: "react-compiler",
      package: "eslint-plugin-react-compiler",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-compiler">;
// EOF
