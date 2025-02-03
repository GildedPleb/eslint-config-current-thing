// PathMark: ./src/definitions/configs/regexp.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "regexp",
  name: "Regular Expressions",
  packages: [
    {
      declaredAs: "regexp",
      package: "eslint-plugin-regexp",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["regexp"],
  rules: `...regexp.configs["flat/recommended"].rules,`,
} satisfies Config;
// EOF
