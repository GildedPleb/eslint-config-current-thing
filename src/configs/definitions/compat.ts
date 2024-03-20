// PathMark: ./src/configs/definitions/compat.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { compat: comp },
    ${RULES}
  }`,
  name: "Compat",
  packages: [
    { name: "comp", package: "eslint-plugin-compat", requiresImport: true },
  ],
  rules: `comp.configs.recommended.rules`,
} satisfies Config;
// EOF
