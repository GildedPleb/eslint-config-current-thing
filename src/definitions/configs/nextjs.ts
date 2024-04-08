// PathMark: ./src/definitions/configs/nextjs.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "@next/next/no-html-link-for-pages": ["ts", "prettier", "eslint"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "nextjs",
  name: "NextJS",
  packages: [
    {
      name: "nextjs",
      package: "@next/eslint-plugin-next",
      requiresImport: false,
    },
    {
      name: "nextJsConfig",
      package: "eslint-config-next",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@next/next"],
  rules: `...nextjs.configs.recommended.rules,`,
} satisfies Config;
// EOF
