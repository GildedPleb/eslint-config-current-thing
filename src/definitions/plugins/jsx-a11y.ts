// PathMark: ./src/definitions/plugins/jsx-a11y.ts
import type { Plugin } from ".";

export default {
  name: "JSX A11y",
  packages: [
    {
      declaredAs: "jsxA11y",
      namespace: "jsx-a11y",
      package: "eslint-plugin-jsx-a11y",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"jsx-a11y">;
// EOF
