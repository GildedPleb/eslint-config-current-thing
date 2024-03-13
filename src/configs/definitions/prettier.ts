import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { prettier },
    ${RULES}
  }`,
  name: "Prettier",
  packages: [
    {
      name: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: true,
    },
    {
      name: "prettierConfig",
      package: "eslint-config-prettier",
      requiresImport: true,
    },
  ],
  rules: `{
    "prettier/prettier": 2,
    ...prettierConfig.rules,
  }`,
} satisfies Config;
