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
  ],
  requiredPlugins: ["@react-native"],
  rules: `{ "@react-native/platform-colors": 1 }`,
} satisfies Config;
// EOF
