// PathMark: ./src/definitions/configs/gts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "gts",
  name: "Google Typescript Style",
  packages: [
    {
      declaredAs: "gts",
      package: "gts",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["n", "prettier"],
  rules: `...gts.rules,`,
} satisfies Config;
// EOF
