// PathMark: ./src/definitions/plugins/react-hooks.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Hooks",
  packages: [
    {
      declaredAs: "reactHooks",
      mappedAs: "reactHooks",
      namespace: "react-hooks",
      package: "eslint-plugin-react-hooks",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-hooks">;
// EOF
