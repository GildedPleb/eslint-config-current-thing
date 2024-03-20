// PathMark: ./src/configs/definitions/promises.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { promise },
    ${RULES}
  }`,
  name: "Promises",
  packages: [
    { name: "promise", package: "eslint-plugin-promise", requiresImport: true },
  ],
  rules: `promise.configs.recommended.rules`,
} satisfies Config;
// EOF
