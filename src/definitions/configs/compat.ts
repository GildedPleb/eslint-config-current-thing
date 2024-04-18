// PathMark: ./src/definitions/configs/compat.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: {
        browser: true,
      },
    },
    ${RULES}
  }`,
  id: "compat",
  name: "Compat",
  packages: [
    {
      declaredAs: "compat",
      package: "eslint-plugin-compat",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["compat"],
  rules: `...compat.configs.recommended.rules,`,
} satisfies Config;
// EOF
