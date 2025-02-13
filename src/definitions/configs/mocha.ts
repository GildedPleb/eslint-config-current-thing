// PathMark: ./src/definitions/configs/mocha.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "mocha/no-mocha-arrows": [
      // "shopify/esnext",
      "xo",
      "airbnb-base/es6",
    ],
  },
  definitions: `{
    files: jsTestFiles,
    languageOptions: {
      globals: globals.node,
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
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
