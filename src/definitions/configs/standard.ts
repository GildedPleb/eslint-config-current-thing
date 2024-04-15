// PathMark: ./src/definitions/configs/standard.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    languageOptions: {
      globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
    },
    ${RULES}
  }`,
  id: "standard",
  name: "Standard",
  packages: [
    {
      declaredAs: "standard",
      package: "eslint-config-standard",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["import", "n", "promise"],
  rules: `...standard.rules,`,
} satisfies Config;
// EOF
