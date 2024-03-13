import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "jest-formatting": jestFormatting },
    ${RULES}
  }`,
  name: "Jest Formatting",
  packages: [
    {
      name: "jestFormatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: true,
    },
  ],
  rules: `jestFormatting.configs.recommended.overrides[0].rules`,
} satisfies Config;
