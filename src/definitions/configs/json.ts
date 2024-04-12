// PathMark: ./src/definitions/configs/json.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    ${RULES}
  }`,
  id: "json",
  name: "JSON",
  packages: [
    {
      declaredAs: "json",
      package: "eslint-plugin-json",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["json"],
  rules: `...json.configs.recommended.rules,
  ...json.configs["recommended-with-comments"].rules,`,
} satisfies Config;
// EOF
