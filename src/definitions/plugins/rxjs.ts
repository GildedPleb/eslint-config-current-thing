// PathMark: ./src/definitions/plugins/sdl.ts
import type { Plugin } from ".";

export default {
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
