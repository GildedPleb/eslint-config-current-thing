// PathMark: ./src/definitions/configs/sort-class.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "sort-class",
  name: "Sort Class Members",
  packages: [
    {
      declaredAs: "sortClassMembers",
      package: "eslint-plugin-sort-class-members",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["sort-class-members"],
  rules: `...sortClassMembers.configs['flat/recommended'].rules,`,
} satisfies Config;
// EOF
