// PathMark: ./src/definitions/configs/perfectionist.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "perfectionist/sort-imports": ["import-sort"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "perfectionist",
  name: "Perfectionist",
  packages: [
    {
      name: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["perfectionist"],
  rules: `...perfectionist.configs["recommended-natural"].rules,`,
} satisfies Config;
// EOF
