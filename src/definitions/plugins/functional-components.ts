// PathMark: ./src/definitions/plugins/functional-components.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Prefer Functional Components",
  packages: [
    {
      declaredAs: "preferFC",
      mappedAs: "preferFC",
      namespace: "react-prefer-function-component",
      package: "eslint-plugin-react-prefer-function-component",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-prefer-function-component">;
// EOF
