// PathMark: ./src/configs/definitions/eslint.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "ESLint",
  packages: [{ name: "eslint", package: "@eslint/js", requiresImport: true }],
  rules: `eslint.configs.recommended.rules`,
} satisfies Config;
// EOF
