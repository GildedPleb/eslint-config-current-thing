import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "simple-import-sort": importSort },
    ${RULES}
  }`,
  name: "Simple Import Sort",
  packages: [
    {
      name: "importSort",
      package: "eslint-plugin-simple-import-sort",
      requiresImport: true,
    },
  ],
  rules: `{
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
  }`,
} satisfies Config;
