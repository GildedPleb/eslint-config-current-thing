// PathMark: ./src/definitions/configs/react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: reactNativeConfig.globals,
    },
    ${RULES}
  }`,
  name: "React Native Config",
  packages: [
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
    "jest",
  ],
  rules: `reactNativeConfig.rules,
    // Deprecated rule format needs to be overwritten
    quotes: [0, "single", { "avoidEscape": true, "allowTemplateLiterals": true }]`,
} satisfies Config;
// EOF
