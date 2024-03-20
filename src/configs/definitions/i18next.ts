// PathMark: ./src/configs/definitions/i18next.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { i18next },
    ${RULES}
  }`,
  name: "i18n",
  packages: [
    {
      name: "i18next",
      package: "eslint-plugin-i18next",
      requiresImport: true,
    },
  ],
  rules: `{
    ...i18next.configs.recommended.rules
  }`,
} satisfies Config;
// EOF
