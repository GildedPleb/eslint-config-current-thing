// PathMark: ./src/definitions/configs/stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    ${RULES}
  }`,
  id: "stylistic",
  name: "Stylistic",
  packages: [
    {
      declaredAs: "stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@stylistic"],
  rules: `...stylistic.configs["recommended-flat"].rules,`,
} satisfies Config;
// EOF
