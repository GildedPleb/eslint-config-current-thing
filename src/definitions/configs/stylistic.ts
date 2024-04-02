// PathMark: ./src/definitions/configs/stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    // stylistic.configs.customize({ quotes: "double", semi: true }).rules,
    // All conflict with Prettier:
    // "@stylistic/arrow-parens": 0,
    // "@stylistic/brace-style": 0,
    // "@stylistic/multiline-ternary": 0,
    // "@stylistic/operator-linebreak": 0,
    // "@stylistic/quotes": 0,
    // "@stylistic/quote-props": 0,
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
  rules: `stylistic.configs["recommended-flat"].rules`,
} satisfies Config;
// EOF
