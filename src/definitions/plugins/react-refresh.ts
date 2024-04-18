// PathMark: ./src/definitions/plugins/react-refresh.ts
import { type Plugin } from ".";

export default {
  name: "React Refresh",
  packages: [
    {
      declaredAs: "reactRefresh",
      mappedAs: "reactRefresh",
      namespace: "react-refresh",
      package: "eslint-plugin-react-refresh",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-refresh">;
// EOF
