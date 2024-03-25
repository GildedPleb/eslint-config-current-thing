// PathMark: ./src/definitions/configs/unsanitized.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "No Unsanitized",
  packages: [
    {
      name: "unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-unsanitized"],
  rules: `unsanitized.configs.DOM.rules`,
} satisfies Config;
// EOF
