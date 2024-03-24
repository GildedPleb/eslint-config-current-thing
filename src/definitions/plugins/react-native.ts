// PathMark: ./src/definitions/plugins/react-native.ts
import type { Plugin } from ".";

export default {
  name: "React Native Config",
  packages: [
    {
      key: "@react-native",
      name: "rnPlugin",
      package: "@react-native/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
