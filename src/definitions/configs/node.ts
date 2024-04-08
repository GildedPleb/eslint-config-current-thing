// PathMark: ./src/definitions/configs/node.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "n/no-missing-import": ["import-js"],
  },
  definitions: `{
    files,
    languageOptions: {
      globals: {
        __dirname: false,
        __filename: false,
        exports: false,
        module: false,
        require: false,
      },
    },
    // There are no recommended ways to use "node", as the "n" rule obsoletes
    // it, but "node" is still used by the Shopify config.
    ${RULES}
  }`,
  id: "node",
  name: "Node.js",
  packages: [
    { declaredAs: "nNode", package: "eslint-plugin-n", requiresImport: false },
    {
      declaredAs: "node",
      package: "eslint-plugin-node",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["node", "n"],
  rules: `...nNode.configs["flat/recommended-module"].rules,`,
} satisfies Config;
// EOF
