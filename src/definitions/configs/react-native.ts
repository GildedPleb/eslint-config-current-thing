// PathMark: ./src/definitions/configs/react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      globals: reactNativeConfig.globals,
    },
    ${RULES}
  }`,
  id: "rn",
  name: "React Native Config",
  packages: [
    {
      declaredAs: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: true,
    },
    {
      declaredAs: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
    // These globals exist in the other packages
    {
      declaredAs: "rnGlobals",
      package: "eslint-plugin-react-native-globals",
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
  rules: `...reactNativeConfig.rules,
    // Deprecated rule format needs to be overwritten
    quotes: [0, "single", { "allowTemplateLiterals": true, "avoidEscape": true }],`,
} satisfies Config;
// EOF
