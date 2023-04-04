import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "xo", package: "eslint-config-xo" }],
  requiresImport: true,
  name: "XO",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `xo.rules`,
} satisfies Config;
