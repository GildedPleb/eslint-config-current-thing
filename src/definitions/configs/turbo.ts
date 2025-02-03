// PathMark: ./src/definitions/configs/es.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "turbo",
  name: "Turbo",
  packages: [
    {
      declaredAs: "turbo",
      package: "eslint-plugin-turbo",
      requiresImport: false,
    },
    {
      declaredAs: "turboConfig",
      package: "eslint-config-turbo",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["turbo"],
  rules: `...turbo.configs["flat/recommended"].rules,
    "turbo/no-undeclared-env-vars": 0,`,
} satisfies Config;
// EOF
