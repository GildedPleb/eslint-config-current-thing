// PathMark: ./src/definitions/plugins/react-compiler.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Naming Convention",
  packages: [
    {
      declaredAs: "reactNamingConvention",
      mappedAs: "reactNamingConvention",
      namespace: "react-naming-convention",
      package: "eslint-plugin-react-naming-convention",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-naming-convention">;
// EOF
