// PathMark: ./src/definitions/plugins/react-native-indie.ts
import type { Plugin } from ".";

export default {
  name: "React Native",
  packages: [
    {
      declaredAs: "reactNativeIndie",
      namespace: "react-native",
      package: "eslint-plugin-react-native",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-native">;
// EOF
