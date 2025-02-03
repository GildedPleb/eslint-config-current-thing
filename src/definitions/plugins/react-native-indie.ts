// PathMark: ./src/definitions/plugins/react-native-indie.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Native",
  packages: [
    {
      declaredAs: "reactNativeIndie",
      mappedAs: "reactNativeIndie",
      namespace: "react-native",
      package: "eslint-plugin-react-native",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-native">;
// EOF
