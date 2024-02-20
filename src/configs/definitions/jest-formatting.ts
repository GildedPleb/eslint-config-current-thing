import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "jestFormatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: true,
    },
  ],
  name: "Jest Formatting",
  definitions: `{
    files,
		plugins: { "jest-formatting": jestFormatting },
    ${RULES}
  }`,
  rules: `{ ...jestFormatting.configs.recommended.overrides[0].rules }`,
} satisfies Config;
