// PathMark: ./src/definitions/plugins/react-compiler.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Debug",
  packages: [
    {
      declaredAs: "reactDebug",
      mappedAs: "reactDebug",
      namespace: "react-debug",
      package: "eslint-plugin-react-debug",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-debug">;
// EOF
