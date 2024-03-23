// PathMark: ./src/definitions/configs/import-sort.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Simple Import Sort",
  packages: [
    {
      name: "importSort",
      package: "eslint-plugin-simple-import-sort",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["simple-import-sort"],
  rules: `{
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
  }`,
} satisfies Config;
// EOF
