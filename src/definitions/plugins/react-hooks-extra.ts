// PathMark: ./src/definitions/plugins/react-compiler.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Hooks Extra",
  packages: [
    {
      declaredAs: "reactHooksExtra",
      mappedAs: "reactHooksExtra",
      namespace: "react-hooks-extra",
      package: "eslint-plugin-react-hooks-extra",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-hooks-extra">;
// EOF
