// PathMark: ./src/definitions/plugins/jsx-a11y.ts
import type { Plugin } from ".";

export default {
  name: "JSX A11y",
  packages: [
    {
      key: "jsx-a11y",
      name: "jsxA11y",
      package: "eslint-plugin-jsx-a11y",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
