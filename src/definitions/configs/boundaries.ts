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
  id: "boundaries",
  name: "Boundaries",
  packages: [
    {
      declaredAs: "boundaries",
      package: "eslint-plugin-boundaries",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["boundaries"],
  rules: `...boundaries.configs.recommended.rules,`,
} satisfies Config;
// EOF
