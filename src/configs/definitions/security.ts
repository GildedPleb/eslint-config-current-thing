// PathMark: ./src/configs/definitions/security.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { security },
    ${RULES}
  }`,
  name: "Security",
  packages: [
    {
      name: "security",
      package: "eslint-plugin-security",
      requiresImport: true,
    },
  ],
  rules: `security.configs.recommended.rules`,
} satisfies Config;
// EOF
