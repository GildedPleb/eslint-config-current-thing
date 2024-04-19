// PathMark: ./src/definitions/configs/ava.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    ${RULES}
  }`,
  id: "ava",
  name: "Ava",
  packages: [
    {
      declaredAs: "ava",
      package: "eslint-plugin-ava",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["ava"],
  rules: `...ava.configs.recommended.rules,`,
} satisfies Config;
// EOF
