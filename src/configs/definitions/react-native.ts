import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "reactNative", package: "eslint-plugin-react-native" }],
  requiresImport: true,
  name: "React Native",
  definitions: `{
    files,
		plugins: {
			"react-native": reactNative
		},
		languageOptions: {
      globals: {
        ...reactNative.environments["react-native"].globals
			},
		},
    ${RULES}
  }`,
  rules: `{
		...reactNative.configs.all.rules,
		// Needed untill this is resolved: https://github.com/Intellicode/eslint-plugin-react-native/issues/270
		"react-native/no-raw-text": "off",
	}`,
} satisfies Config;
