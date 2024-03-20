// PathMark: ./src/configs/definitions/react-native-config.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "@react-native": rnPlugin },
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
      requiresImport: true,
    },
    {
      name: "rnPlugin",
      package: "@react-native/eslint-plugin",
      requiresImport: true,
    },
  ],
  rules: `reactNativeConfig.overrides[1].rules,
    ...reactNativeConfig.overrides[2].rules,
    ...reactNativeConfig.rules,
    ...rnConfig.rules,
    ...rnConfig.overrides[2].rules,
    ...rnConfig.overrides[3].rules`,
} satisfies Config;
// EOF
