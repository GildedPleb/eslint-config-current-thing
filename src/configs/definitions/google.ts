import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Google",
  packages: [
    { name: "google", package: "eslint-config-google", requiresImport: true },
  ],
  rules: `google.rules`,
} satisfies Config;
