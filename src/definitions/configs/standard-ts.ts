// PathMark: ./src/definitions/configs/standard-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "standard-ts",
  name: "Standard TS",
  packages: [
    {
      declaredAs: "standard",
      package: "eslint-config-standard-with-typescript",
      requiresImport: false,
    },
    {
      declaredAs: "standardTS",
      package: "eslint-config-love",
      requiresImport: true,
    },
  ],
  requiredPlugins: [
    "@typescript-eslint",
    "n",
    "import",
    "promise",
    "eslint-comments",
  ],
  rules: `...standardTS.rules,`,
} satisfies Config;
// EOF
