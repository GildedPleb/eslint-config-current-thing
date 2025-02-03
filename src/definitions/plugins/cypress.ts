// PathMark: ./src/definitions/plugins/cypress.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Cypress",
  packages: [
    {
      declaredAs: "cypress",
      mappedAs: "cypress",
      namespace: "cypress",
      package: "eslint-plugin-cypress",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"cypress">;
// EOF
