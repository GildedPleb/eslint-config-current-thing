// PathMark: ./src/definitions/configs/jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "mocha/no-mocha-arrows": ["shopify/esnext", "xo"],
  },
  definitions: `{
    files: testFiles,
    languageOptions: {
      globals: globals.node,
    },
    ${RULES}
  }`,
  id: "mocha",
  name: "Mocha",
  packages: [
    {
      declaredAs: "mocha",
      package: "eslint-plugin-mocha",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["mocha"],
  rules: `...mocha.configs.recommended.rules,`,
} satisfies Config;
// EOF
