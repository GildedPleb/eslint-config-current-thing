// PathMark: ./src/definitions/plugins/babel.ts
import type { Plugin } from ".";

export default {
  definitions: `{
    plugins: { "@babel": babelPlugin },
    // Shopify utilizes these rules, so deferring to that config.
  }`,
  name: "Babel",
  packages: [
    {
      name: "babelPlugin",
      package: "@babel/eslint-plugin",
      requiresImport: true,
    },
  ],
  usedBy: ["Shopify"],
} satisfies Plugin;
// EOF
