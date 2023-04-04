import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "react", package: "eslint-plugin-react" }],
  requiresImport: true,
  name: "React",
  definitions: `{
    files,
		plugins: {
			// Defined in AirBnB
			// react
		},
    ${RULES}
  }`,
  rules: `react.configs.recommended.rules`,
} satisfies Config;
