import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "unicorn", package: "eslint-plugin-unicorn", requiresImport: true },
  ],
  name: "Unicorn",
  definitions: `{
    files,
    plugins: { unicorn },
    ${RULES}
  }`,
  rules: `unicorn.configs.recommended.rules`,
} satisfies Config;
