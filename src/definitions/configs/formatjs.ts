// PathMark: ./src/definitions/configs/i18next.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "formatjs",
  name: "FormatJS",
  packages: [
    {
      declaredAs: "formatJs",
      package: "eslint-plugin-formatjs",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["formatjs"],
  rules: `...formatJs.configs.recommended.rules,`,
} satisfies Config;
// EOF
