// PathMark: ./src/definitions/configs/jest-formatting.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsTestFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "jest-format",
  name: "Jest Formatting",
  packages: [
    {
      declaredAs: "jestFormatting",
      package: "eslint-plugin-jest-formatting",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest-formatting"],
  rules: `...jestFormatting.configs.recommended.overrides[0].rules,`,
} satisfies Config;
// EOF
