// PathMark: ./src/definitions/configs/sort-keys.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "sort-destructure",
  name: "Sort Destructure Keys",
  packages: [
    {
      declaredAs: "sortDestructure",
      package: "eslint-plugin-sort-destructure-keys",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["sort-destructure-keys"],
  rules: `"sort-destructure-keys/sort-destructure-keys": [
      "error",
      {
        "caseSensitive": false
      }
    ],`,
} satisfies Config;
// EOF
