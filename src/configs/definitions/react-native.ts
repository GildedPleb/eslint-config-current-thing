// PathMark: ./src/configs/definitions/react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
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
  name: "React Native",
  packages: [
    {
      name: "reactNative",
      package: "eslint-plugin-react-native",
      requiresImport: true,
    },
  ],
  rules: `reactNative.configs.all.rules`,
} satisfies Config;
// EOF
