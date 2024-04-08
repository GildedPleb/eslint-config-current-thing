// PathMark: ./src/definitions/plugins/cypress.ts
import type { Plugin } from ".";

export default {
  name: "Cypress",
  packages: [
    {
      declaredAs: "cypress",
      namespace: "cypress",
      package: "eslint-plugin-cypress",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"cypress">;
// EOF
