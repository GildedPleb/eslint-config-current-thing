import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: {
      perfectionist: perfectionist
    },
    ${RULES}
  }`,
  name: "Perfectionist",
  packages: [
    {
      name: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: true,
    },
  ],
  rules: `{
    ...perfectionist.configs["recommended-natural"].rules,
    "perfectionist/sort-imports": 0,

  }`,
} satisfies Config;
