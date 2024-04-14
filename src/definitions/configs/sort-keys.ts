// PathMark: ./src/definitions/configs/sort-keys.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "sort-keys",
  name: "Typescript Sort Keys",
  packages: [
    {
      declaredAs: "sortKeys",
      package: "eslint-plugin-typescript-sort-keys",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["typescript-sort-keys"],
  rules: `...sortKeys.configs.recommended.rules,`,
} satisfies Config;
// EOF
