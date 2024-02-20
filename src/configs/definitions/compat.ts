import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "comp", package: "eslint-plugin-compat", requiresImport: true },
  ],
  name: "Compat",
  definitions: `{
    files,
    plugins: { compat: comp },
    ${RULES}
  }`,
  rules: `comp.configs.recommended.rules`,
} satisfies Config;
