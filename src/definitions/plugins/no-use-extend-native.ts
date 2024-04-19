// PathMark: ./src/definitions/plugins/no-use-extend-native.ts
import type { Plugin } from ".";

export default {
  name: "No Use Extend Native",
  packages: [
    {
      declaredAs: "noUseExtendNative",
      mappedAs: "noUseExtendNative",
      namespace: "no-use-extend-native",
      package: "eslint-plugin-no-use-extend-native",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"no-use-extend-native">;
// EOF
