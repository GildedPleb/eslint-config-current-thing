// PathMark: ./src/definitions/configs/perfectionist.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Perfectionist",
  packages: [
    {
      name: "perfectionist",
      package: "eslint-plugin-perfectionist",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["perfectionist"],
  rules: `{
    ...perfectionist.configs["recommended-natural"].rules,
    "perfectionist/sort-imports": 0,
    "perfectionist/sort-named-imports": 0,
  }`,
} satisfies Config;
// EOF
