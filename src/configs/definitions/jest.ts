import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "jest", package: "eslint-plugin-jest" }],
  requiresImport: true,
  name: "Jest",
  definitions: `{
    files,
		plugins: { jest },
    ${RULES}
  }`,
  rules: `{ ...jest.configs.recommended.rules }`,
} satisfies Config;
