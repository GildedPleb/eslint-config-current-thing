import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "eslint", package: "@eslint/js", requiresImport: true }],
  name: "ESLint",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `eslint.configs.recommended.rules`,
} satisfies Config;
