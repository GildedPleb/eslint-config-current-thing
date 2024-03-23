// PathMark: ./src/definitions/configs/unsanitized.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "no-unsanitized": unsanitized },
    ${RULES}
  }`,
  name: "No Unsanitized",
  packages: [
    {
      name: "unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: true,
    },
  ],
  rules: `unsanitized.configs.DOM.rules`,
} satisfies Config;
// EOF
