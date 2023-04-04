import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "importSort", package: "eslint-plugin-simple-import-sort" },
  ],
  requiresImport: true,
  name: "Simple Import Sort",
  definitions: `{
    files,
    plugins: { "simple-import-sort": importSort },
    ${RULES}
  }`,
  rules: `{
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
  }`,
} satisfies Config;
