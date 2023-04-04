import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "flowtype", package: "eslint-plugin-flowtype" }],
  requiresImport: true,
  name: "Flowtype",
  definitions: `{
    files,
		plugins: {
			flowtype
		},
		// No rules as they conflict with Typescript
    ${RULES}
  }`,
} satisfies Config;
