// PathMark: ./src/definitions/configs/deprecation.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Deprecation",
  packages: [
    {
      name: "deprecation",
      package: "eslint-plugin-deprecation",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["deprecation"],
  rules: `deprecation.configs.recommended.rules`,
} satisfies Config;
// EOF
