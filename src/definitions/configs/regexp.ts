// PathMark: ./src/definitions/configs/regexp.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Regular Expressions",
  packages: [
    {
      name: "regexp",
      package: "eslint-plugin-regexp",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["regexp"],
  rules: `regexp.configs["flat/recommended"].rules`,
} satisfies Config;
// EOF
