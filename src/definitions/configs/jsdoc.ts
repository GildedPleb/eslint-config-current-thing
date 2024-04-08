// PathMark: ./src/definitions/configs/jsdoc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    ${RULES}
  }`,
  id: "jsdoc",
  name: "JSDoc",
  packages: [
    {
      declaredAs: "jsdoc",
      package: "eslint-plugin-jsdoc",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsdoc"],
  rules: `...jsdoc.configs['flat/recommended'].rules,`,
} satisfies Config;
// EOF
