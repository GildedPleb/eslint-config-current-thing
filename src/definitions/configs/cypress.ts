// PathMark: ./src/definitions/configs/cypress.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    languageOptions: {
      globals: {
        ...cypress.environments.globals.globals
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "cypress",
  name: "Cypress",
  packages: [
    {
      declaredAs: "cypress",
      package: "eslint-plugin-cypress",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["cypress"],
  rules: `...cypress.configs.recommended.rules,`,
} satisfies Config;
// EOF
