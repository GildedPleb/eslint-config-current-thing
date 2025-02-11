// PathMark: ./src/definitions/configs/no-relative-import.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "no-relative-import",
  name: "No Relative Import Paths",
  packages: [
    {
      declaredAs: "noRelativeImport",
      package: "eslint-plugin-no-relative-import-paths",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-relative-import-paths"],
  rules: `"no-relative-import-paths/no-relative-import-paths": [
      "warn",
      {
        allowedDepth: 2,
        allowSameFolder: true,
      },
    ],`,
} satisfies Config;
// EOF
