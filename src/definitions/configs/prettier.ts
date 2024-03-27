// PathMark: ./src/definitions/configs/prettier.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "prettier",
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
    {
      name: "prettierTypes",
      package: "@types/eslint-config-prettier",
      requiresImport: false,
    },
    {
      name: "prettierTypes",
      package: "@types/eslint-plugin-prettier",
      requiresImport: false,
    },
  ],
  requiredPlugins: [
    "prettier",
    "@typescript-eslint",
    "@babel",
    "vue",
    "unicorn",
    "babel",
    "flowtype",
    "react",
    "standard",
  ],
  rules: `prettierConfig.rules,
    "prettier/prettier": 2`,
} satisfies Config;
// EOF
