// PathMark: ./src/definitions/plugins/sdl.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Microsoft SDL",
  packages: [
    {
      declaredAs: "msdl",
      mappedAs: "msdl",
      namespace: "@microsoft/sdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@microsoft/sdl">;
// EOF
