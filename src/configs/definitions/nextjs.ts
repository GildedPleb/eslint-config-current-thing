import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "@next/next": nextjs },
    ${RULES}
  }`,
  name: "NextJS",
  packages: [
    {
      name: "nextjs",
      package: "@next/eslint-plugin-next",
      requiresImport: true,
    },
  ],
  rules: `nextjs.configs.recommended.rules,
    ...nextjs.configs["core-web-vitals"].rules,
    // Irrelevant for broad JS, and polutes logs when it doesn't apply.
    "@next/next/no-html-link-for-pages": 0`,
} satisfies Config;
