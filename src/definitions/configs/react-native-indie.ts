// PathMark: ./src/definitions/configs/react-native-indie.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      globals: reactNativeIndie.environments["react-native"].globals,
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "rn-ip",
  name: "React Native (Independent Plugin/Config)",
  packages: [
    {
      declaredAs: "reactNativeIndie",
      package: "eslint-plugin-react-native",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-native"],
  rules: `...reactNativeIndie.configs.all.rules,`,
} satisfies Config;
// EOF
