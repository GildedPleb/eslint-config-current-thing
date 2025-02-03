// PathMark: ./src/definitions/configs/promises.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "promises",
  name: "Promises",
  packages: [
    {
      declaredAs: "promise",
      package: "eslint-plugin-promise",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["promise"],
  rules: `...promise.configs.recommended.rules,`,
} satisfies Config;
// EOF
