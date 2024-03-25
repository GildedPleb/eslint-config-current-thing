// PathMark: ./src/definitions/configs/react-native-ft.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ['*.js'],
    ${RULES}
  }`,
  name: "React Native Config",
  nameSecondary: "Flowtype",
  packages: [
    {
      name: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: false,
    },
    // Throws WARN in NPM and is literally the exact same as @react-native-community/eslint-config, not installed
    {
      name: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["ft-flow"],
  rules: `reactNativeConfig.overrides[0].rules`,
} satisfies Config;
// EOF
