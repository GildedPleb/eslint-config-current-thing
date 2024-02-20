import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "eslint", package: "@eslint/js", requiresImport: true }],
  name: "ESLint",
  definitions: `{
    files,
    settings: {
      linterOptions: {
        reportUnusedDisableDirectives: 1
      },
    },
    ${RULES}
  }`,
  rules: `eslint.configs.recommended.rules`,
} satisfies Config;
