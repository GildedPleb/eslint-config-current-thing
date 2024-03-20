// PathMark: ./src/configs/definitions/unicorn.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { unicorn },
    ${RULES}
  }`,
  name: "Unicorn",
  packages: [
    { name: "unicorn", package: "eslint-plugin-unicorn", requiresImport: true },
  ],
  rules: `unicorn.configs.recommended.rules`,
} satisfies Config;
// EOF
