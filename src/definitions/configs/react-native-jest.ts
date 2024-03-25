// PathMark: ./src/definitions/configs/react-native-jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [
      '*.{spec,test}.{js,ts,tsx}',
      '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
    ],
    languageOptions: {
      globals: {
        "jest/globals": true,
        jest: true,
      }
    },
    ${RULES}
  }`,
  name: "React Native Config",
  nameSecondary: "Jest",
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
  requiredPlugins: ["react-native"],
  rules: `reactNativeConfig.overrides[2].rules`,
} satisfies Config;
// EOF
