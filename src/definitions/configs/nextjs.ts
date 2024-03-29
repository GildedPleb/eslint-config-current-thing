// PathMark: ./src/definitions/configs/nextjs.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
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
  ],
  requiredPlugins: ["@next/next"],
  rules: `nextjs.configs.recommended.rules,
    // Irrelevant for broad JS, and pollutes logs when it doesn't apply.
    "@next/next/no-html-link-for-pages": 0`,
} satisfies Config;
// EOF
