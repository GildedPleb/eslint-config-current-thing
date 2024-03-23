// PathMark: ./src/definitions/configs/i18next.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "i18n",
  packages: [
    {
      name: "i18next",
      package: "eslint-plugin-i18next",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["i18next"],
  rules: `i18next.configs.recommended.rules`,
} satisfies Config;
// EOF
