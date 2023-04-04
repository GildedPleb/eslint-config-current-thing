import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "jsxA11y", package: "eslint-plugin-jsx-a11y" }],
  requiresImport: true,
  name: "JSX A11y",
  definitions: `{
    files,
		plugins: {
			// Defined in AirBnB
			// "jsx-a11y": jsxA11y
		},
    ${RULES}
  }`,
  rules: `jsxA11y.configs.recommended.rules`,
} satisfies Config;
