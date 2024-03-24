// PathMark: ./src/definitions/configs/react-native-indie.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: {
        ...reactNativeIndie.environments["react-native"].globals
      },
    },
    ${RULES}
  }`,
  name: "React Native (Independent Plugin/Config)",
  packages: [
    {
      name: "reactNativeIndie",
      package: "eslint-plugin-react-native",
      requiresImport: false,
    },
  ],
  rules: `reactNativeIndie.configs.all.rules`,
} satisfies Config;
// EOF