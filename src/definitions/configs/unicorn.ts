// PathMark: ./src/definitions/configs/unicorn.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "unicorn",
  name: "Unicorn",
  packages: [
    {
      declaredAs: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["unicorn"],
  rules: `...unicorn.configs.recommended.rules,`,
} satisfies Config;
// EOF
