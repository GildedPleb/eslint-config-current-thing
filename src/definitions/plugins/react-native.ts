// PathMark: ./src/definitions/plugins/react-native.ts
import type { Plugin } from ".";

export default {
  name: "React Native Config",
  packages: [
    {
      declaredAs: "rnPlugin",
      namespace: "@react-native",
      package: "@react-native/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"@react-native">;
// EOF
