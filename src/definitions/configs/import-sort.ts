// PathMark: ./src/definitions/configs/import-sort.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "simple-import-sort/imports": ["shopify/esnext"],
  },
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "import-sort",
  name: "Simple Import Sort",
  packages: [
    {
      declaredAs: "importSort",
      package: "eslint-plugin-simple-import-sort",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["simple-import-sort"],
  rules: `"simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,`,
} satisfies Config;
// EOF
