// PathMark: ./src/definitions/configs/react-native-ft.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ['*.js'],
    ${RULES}
  }`,
  name: "React Native Config - Flowtype",
  packages: [
    {
      name: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: false,
    },
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
