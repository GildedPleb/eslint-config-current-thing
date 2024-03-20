// PathMark: ./src/configs/definitions/stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "@stylistic": stylistic },
    ${RULES}
  }`,
  name: "Stylistic",
  packages: [
    {
      name: "stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: true,
    },
  ],
  rules: `{
    ...stylistic.configs.customize({ quotes: "double", semi: true }).rules,
    // All conflict with Prettier:
    "@stylistic/operator-linebreak": 0,
    "@stylistic/quotes": 0,
    "@stylistic/arrow-parens": 0,
    "@stylistic/brace-style": 0,
    "@stylistic/multiline-ternary": 0,
  }`,
} satisfies Config;
// EOF
