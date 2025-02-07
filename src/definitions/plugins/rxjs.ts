// PathMark: ./src/definitions/plugins/rxjs.ts
import type { Plugin } from ".";

export default {
  enabled: false,
  name: "RxJS",
  packages: [
    {
      declaredAs: "rxjs",
      mappedAs: "rxjs",
      namespace: "rxjs",
      package: "eslint-plugin-rxjs",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"rxjs">;
// EOF
