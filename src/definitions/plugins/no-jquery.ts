// PathMark: ./src/definitions/plugins/no-jquery.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "No JQuery",
  packages: [
    {
      declaredAs: "noJQuery",
      mappedAs: "noJQuery",
      namespace: "no-jquery",
      package: "eslint-plugin-no-jquery",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"no-jquery">;
// EOF
