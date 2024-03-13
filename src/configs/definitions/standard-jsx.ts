import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Standard JSX",
  packages: [
    {
      name: "standardJsx",
      package: "eslint-config-standard-jsx",
      requiresImport: true,
    },
  ],
  rules: `standardJsx.rules`,
} satisfies Config;
