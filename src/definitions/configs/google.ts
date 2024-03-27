// PathMark: ./src/definitions/configs/google.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "google",
  name: "Google",
  packages: [
    { name: "google", package: "eslint-config-google", requiresImport: true },
  ],
  requiredPlugins: [],
  rules: `google.rules`,
} satisfies Config;
// EOF
