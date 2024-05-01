// PathMark: ./src/definitions/configs/jsdoc-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
    settings: {
      jsdoc: {
        mode: 'typescript'
      },
    },
  }`,
  id: "jsdoc",
  name: "JSDoc",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "jsdoc",
      package: "eslint-plugin-jsdoc",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsdoc"],
  rules: `...jsdoc.configs["flat/recommended-typescript"].rules,
    "jsdoc/require-yields": 0,`,
} satisfies Config;
// EOF
