// PathMark: ./src/definitions/configs/prettier-yml.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "prettier/prettier": ["yml"],
  },
  definitions: `{
    files: ymlFiles,
    ${RULES}
  }`,
  id: "prettier",
  name: "Prettier",
  nameSecondary: "YML",
  packages: [
    {
      declaredAs: "prettier",
      package: "eslint-plugin-prettier",
      requiresImport: false,
    },
    {
      declaredAs: "prettierConfig",
      package: "eslint-config-prettier",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier"],
  rules: `"prettier/prettier": 2,`,
} satisfies Config;
// EOF
