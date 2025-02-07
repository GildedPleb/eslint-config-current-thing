// PathMark: ./src/definitions/configs/react-native-jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsTestFiles,
    languageOptions: {
      globals: {
        "jest/globals": true,
        jest: true,
      }
    },
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "rn",
  name: "React Native Config",
  nameSecondary: "Jest",
  packages: [
    {
      declaredAs: "reactNativeConfig",
      package: "@react-native-community/eslint-config",
      requiresImport: false,
    },
    {
      declaredAs: "rnConfig",
      package: "@react-native/eslint-config",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-native"],
  rules: `"react-native/no-inline-styles": 0,
    quotes: [
      1,
      "single",
      { allowTemplateLiterals: true, avoidEscape: true },
    ],`,
} satisfies Config;
// EOF
