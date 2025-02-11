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
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
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
  requiredPlugins: ["n"],
  rules: `...nNode.configs["flat/recommended-module"].rules,`,
} satisfies Config;
// EOF
