import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "reactPerf", package: "eslint-plugin-react-perf" }],
  requiresImport: true,
  name: "React Performance",
  definitions: `{
    files,
		plugins: {
			"react-perf": reactPerf
		},
    ${RULES}
  }`,
  rules: `reactPerf.configs.recommended.rules`,
} satisfies Config;
