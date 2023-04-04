import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "reactHooks", package: "eslint-plugin-react-hooks" }],
  requiresImport: true,
  name: "React Hooks",
  definitions: `{
    files,
		plugins: {
			// Defined in AirBnB
			// "react-hooks": reactHooks
		},
    ${RULES}
  }`,
  rules: `reactHooks.configs.recommended.rules`,
} satisfies Config;
