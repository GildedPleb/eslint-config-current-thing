// PathMark: ./src/definitions/configs/xo.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "prefer-arrow-callback": ["mocha"],
  },
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "xo",
  name: "XO",
  packages: [
    { declaredAs: "xo", package: "eslint-config-xo", requiresImport: true },
  ],
  requiredPlugins: [],
  rules: `...xo.rules,`,
} satisfies Config;
// EOF
