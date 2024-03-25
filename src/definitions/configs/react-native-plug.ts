// PathMark: ./src/definitions/configs/react-native-plug.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    // Not added in any config
    ${RULES}
  }`,
  name: "React Native Plugin",
  packages: [
    {
      name: "rnPlugin",
      package: "@react-native/eslint-plugin",
      requiresImport: false,
    },
    // This package is an exact copy of the one above. It is not imported and it is updated infrequently.
    {
      name: "rnPluginCOmmunity",
      package: "@react-native-community/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@react-native"],
  rules: `{ "@react-native/platform-colors": 1 }`,
} satisfies Config;
// EOF
