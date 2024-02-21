import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "reactNative",
      package: "eslint-plugin-react-native",
      requiresImport: true,
    },
  ],
  name: "React Native",
  definitions: `{
    files,
    plugins: { "react-native": reactNative },
    languageOptions: {
      globals: {
        ...reactNative.environments["react-native"].globals
      },
    },
    ${RULES}
  }`,
  rules: `reactNative.configs.all.rules`,
} satisfies Config;
