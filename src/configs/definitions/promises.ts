import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "promise", package: "eslint-plugin-promise", requiresImport: true },
  ],
  name: "Promises",
  definitions: `{
    files,
    plugins: { promise },
    ${RULES}
  }`,
  rules: `promise.configs.recommended.rules`,
} satisfies Config;
