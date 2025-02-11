// PathMark: ./src/definitions/plugins/react-web-api.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Web API",
  packages: [
    {
      declaredAs: "reactWebAPI",
      mappedAs: "reactWebAPI",
      namespace: "react-web-api",
      package: "eslint-plugin-react-web-api",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-web-api">;
// EOF
