// PathMark: ./src/definitions/configs/react-native-ft.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ["**/*.js"],
    ${RULES}
  }`,
  ejected: false,
  enabled: false,
  id: "rn",
  name: "React Native Config",
  nameSecondary: "Flowtype",
  packages: [
    // Throws WARN in NPM and is literally the exact same as @react-native-community/eslint-config, not installed
    {
      declaredAs: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
    {
      declaredAs: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["ft-flow"],
  rules: `...reactNativeConfig.overrides[0].rules,`,
} satisfies Config;
// EOF
