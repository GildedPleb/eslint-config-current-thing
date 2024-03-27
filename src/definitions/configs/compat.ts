// PathMark: ./src/definitions/configs/compat.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: {
        browser: true,
      }
    },
    ${RULES}
  }`,
  id: "compat",
  name: "Compat",
  packages: [
    { name: "comp", package: "eslint-plugin-compat", requiresImport: false },
  ],
  requiredPlugins: ["compat"],
  rules: `comp.configs.recommended.rules`,
} satisfies Config;
// EOF
