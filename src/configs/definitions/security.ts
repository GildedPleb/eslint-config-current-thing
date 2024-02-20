import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "security",
      package: "eslint-plugin-security",
      requiresImport: true,
    },
  ],
  name: "Security",
  definitions: `{
    files,
    plugins: { security },
    ${RULES}
  }`,
  rules: `{ ...security.configs.recommended.rules }`,
} satisfies Config;
