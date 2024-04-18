// PathMark: ./src/definitions/configs/react-native-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsxFiles,
    ${RULES}
  }`,
  id: "rn",
  name: "React Native Config",
  nameSecondary: "TS",
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
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...reactNativeConfig.overrides[1].rules,`,
} satisfies Config;
// EOF
