import { RULES } from "../../constants";
import type { Config } from ".";

export default {
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
  name: "Prettier",
  definitions: `{
    files,
    plugins: { prettier },
    ${RULES}
  }`,
  rules: `{
    "prettier/prettier": 2,
    ...prettierConfig.rules,
  }`,
} satisfies Config;
