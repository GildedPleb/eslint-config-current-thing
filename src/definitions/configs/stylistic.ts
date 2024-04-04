// PathMark: ./src/definitions/configs/stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "stylistic",
  name: "Stylistic",
  packages: [
    {
      name: "stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@stylistic"],
  rules: `...stylistic.configs["recommended-flat"].rules,`,
} satisfies Config;
// EOF
