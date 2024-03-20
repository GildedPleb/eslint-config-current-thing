// PathMark: ./src/configs/definitions/regexp.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { regexp: regexp },
    ${RULES}
  }`,
  name: "Regular Expressions",
  packages: [
    {
      name: "regexp",
      package: "eslint-plugin-regexp",
      requiresImport: true,
    },
  ],
  rules: `{
    ...regexp.configs["flat/recommended"].rules,
  }`,
} satisfies Config;
// EOF
