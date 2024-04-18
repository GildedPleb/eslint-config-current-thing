// PathMark: ./src/definitions/plugins/compat.ts
import { type Plugin } from ".";

export default {
  name: "Compat",
  packages: [
    {
      declaredAs: "compat",
      mappedAs: "compat",
      namespace: "compat",
      package: "eslint-plugin-compat",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"compat">;
// EOF
