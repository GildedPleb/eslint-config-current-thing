// PathMark: ./src/definitions/configs/prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Prettier",
  packages: [
    {
      name: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
    {
      name: "prettierConfig",
      package: "eslint-config-prettier",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["prettier"],
  rules: `{
    "prettier/prettier": 2,
    ...prettierConfig.rules,
  }`,
} satisfies Config;
// EOF
