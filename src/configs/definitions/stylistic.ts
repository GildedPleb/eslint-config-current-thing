import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "stylistic",
      package: "@stylistic/eslint-plugin",
      requiresImport: true,
    },
  ],
  name: "Stylistic",
  definitions: `{
    files,
    plugins: { "@stylistic": stylistic },
    ${RULES}
  }`,
  rules: `{
    ...stylistic.configs.customize({ quotes: "double", semi: true }).rules,
    // Conflicts with Prettier
    "@stylistic/operator-linebreak": 0,
    // Conflicts with Prettier
    "@stylistic/quotes": 0,
  }`,
} satisfies Config;
