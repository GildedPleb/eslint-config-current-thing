// PathMark: ./src/definitions/configs/google.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "valid-jsdoc": ["jsdoc/ts"],
  },
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "google",
  name: "Google",
  packages: [
    {
      declaredAs: "google",
      package: "eslint-config-google",
      requiresImport: true,
    },
  ],
  requiredPlugins: [],
  rules: `...google.rules,`,
} satisfies Config;
// EOF
