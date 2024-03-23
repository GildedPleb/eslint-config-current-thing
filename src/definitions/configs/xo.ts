// PathMark: ./src/definitions/configs/xo.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "XO",
  packages: [{ name: "xo", package: "eslint-config-xo", requiresImport: true }],
  rules: `xo.rules`,
} satisfies Config;
// EOF
