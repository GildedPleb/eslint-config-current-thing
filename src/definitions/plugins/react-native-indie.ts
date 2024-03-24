// PathMark: ./src/definitions/plugins/react-native-indie.ts
import type { Plugin } from ".";

export default {
  name: "React Native",
  packages: [
    {
      key: "react-native",
      name: "reactNativeIndie",
      package: "eslint-plugin-react-native",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
