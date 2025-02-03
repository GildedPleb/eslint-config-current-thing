// PathMark: ./src/definitions/configs/react-native-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsxFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "rn",
  name: "React Native Config",
  nameSecondary: "TS",
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
  requiredPlugins: ["@typescript-eslint"],
  rules: `'@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    'no-undef': 0,
    'func-call-spacing': 0,`,
} satisfies Config;
// EOF
