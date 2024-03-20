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
    // Conflicts with Prettier
    "@stylistic/operator-linebreak": 0,
    // Conflicts with Prettier
    "@stylistic/quotes": 0,
    // Conflicts with Prettier
    "@stylistic/arrow-parens": 0,
    // Conflicts with Prettier
    "@stylistic/brace-style": 0,
  }`,
} satisfies Config;
// EOF
