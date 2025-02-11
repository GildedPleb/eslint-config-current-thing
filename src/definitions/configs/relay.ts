// PathMark: ./src/definitions/configs/gts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: false,
  id: "relay",
  name: "Relay",
  packages: [
    {
      declaredAs: "relay",
      package: "eslint-plugin-Relay",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["relay"],
  rules: `...relay.configs.recommended.rules,`,
} satisfies Config;
// EOF
