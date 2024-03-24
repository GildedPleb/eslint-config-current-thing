// PathMark: ./src/definitions/configs/react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "React Native Config",
  packages: [
    {
      name: "rnPlugin",
      package: "@react-native/eslint-plugin",
      requiresImport: false,
    },
    {
      name: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: true,
    },
    {
      name: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
  ],
  requiredPlugins: [
    "eslint-comments",
    "react",
    "react-hooks",
    "react-native",
    "@react-native",
    "@react-native-community",
    "jest",
  ],
  rules: `reactNativeConfig.overrides[1].rules,
    ...reactNativeConfig.overrides[2].rules,
    ...reactNativeConfig.rules,
    // Deprecated style needs to be overwritten
    quotes: [0, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    // Not added in any config
    "@react-native/platform-colors": 1`,
} satisfies Config;
// EOF
