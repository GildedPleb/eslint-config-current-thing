import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "promise", package: "eslint-plugin-promise" }],
  requiresImport: true,
  name: "Promises",
  definitions: `{
    files,
    // This is defined elsewhere, and thus can be commented out here
    // plugins: { async: promise },
    ${RULES}
  }`,
  rules: `{ ...promise.configs.recommended.rules }`,
} satisfies Config;
