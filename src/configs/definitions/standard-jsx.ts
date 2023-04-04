import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "standardJsx", package: "eslint-config-standard-jsx" }],
  requiresImport: true,
  name: "Standard JSX",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `standardJsx.rules`,
} satisfies Config;
