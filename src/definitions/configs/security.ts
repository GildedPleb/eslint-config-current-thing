// PathMark: ./src/definitions/configs/security.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "security",
  name: "Security",
  packages: [
    {
      declaredAs: "security",
      package: "eslint-plugin-security",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["security"],
  rules: `...security.configs.recommended.rules,`,
} satisfies Config;
// EOF
