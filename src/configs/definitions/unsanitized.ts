import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: true,
    },
  ],
  name: "No Unsanitized",
  definitions: `{
    files,
    plugins: { "no-unsanitized": unsanitized },
    ${RULES}
  }`,
  rules: `unsanitized.configs.DOM.rules`,
} satisfies Config;
