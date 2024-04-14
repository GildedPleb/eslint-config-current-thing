// PathMark: ./src/definitions/plugins/sdl.ts
import type { Plugin } from ".";

export default {
  name: "Microsoft SDL",
  packages: [
    {
      declaredAs: "msdl",
      namespace: "@microsoft/sdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@microsoft/sdl">;
// EOF
