import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
    },
  ],
  requiresImport: true,
  name: "React Native Config",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `{ ...reactNativeConfig.overrides[1].rules, ...reactNativeConfig.overrides[2].rules, ...reactNativeConfig.rules }`,
} satisfies Config;
