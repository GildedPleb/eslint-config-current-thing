// PathMark: ./src/definitions/configs/jest-formatting.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    ${RULES}
  }`,
  id: "jest-format",
  name: "Jest Formatting",
  packages: [
    {
      name: "jestFormatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest-formatting"],
  rules: `...jestFormatting.configs.recommended.overrides[0].rules,`,
} satisfies Config;
// EOF
