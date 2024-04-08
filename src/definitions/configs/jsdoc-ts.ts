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
    { name: "jsdoc", package: "eslint-plugin-jsdoc", requiresImport: false },
  ],
  requiredPlugins: ["jsdoc"],
  rules: `...jsdoc.configs["flat/recommended-typescript"].rules,`,
} satisfies Config;
// EOF
