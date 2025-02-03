// PathMark: ./src/definitions/configs/unsanitized.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "unsanitized",
  name: "No Unsanitized",
  packages: [
    {
      declaredAs: "unsanitized",
      package: "eslint-plugin-no-unsanitized",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-unsanitized"],
  rules: `...unsanitized.configs.recommended.rules,`,
} satisfies Config;
// EOF
