// PathMark: ./src/definitions/configs/chai.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsTestFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "chai",
  name: "Chai Friendly",
  packages: [
    {
      declaredAs: "chaiFriendly",
      package: "eslint-plugin-chai-friendly",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["chai-friendly"],
  rules: `...chaiFriendly.configs.recommended.rules,`,
} satisfies Config;
// EOF
