import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "google", package: "eslint-config-google", requiresImport: true },
  ],
  name: "Google",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `{ ...google.rules }`,
} satisfies Config;
