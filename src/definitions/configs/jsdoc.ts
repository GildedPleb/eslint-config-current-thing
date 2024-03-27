// PathMark: ./src/definitions/configs/jsdoc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    settings: { jsdoc: { mode: "typescript" } },
    ${RULES}
  }`,
  id: "jsdoc",
  name: "JSDoc",
  packages: [
    { name: "jsdoc", package: "eslint-plugin-jsdoc", requiresImport: false },
  ],
  requiredPlugins: ["jsdoc"],
  rules: `jsdoc.configs['flat/recommended-typescript'].rules,
    // Rules needed for TSDoc Compatibility
    "jsdoc/require-param-type": 0,
    "jsdoc/check-param-names": [
      2,
      { checkDestructured: false, enableFixer: false },
    ],
    "jsdoc/require-param": [2, { checkDestructured: false }],
    "jsdoc/require-returns-type": 0,
    "jsdoc/require-returns": 0,
    // Presently not implemented in TSDocs https://github.com/microsoft/tsdoc/issues/234
    "jsdoc/require-yields": 0`,
} satisfies Config;
// EOF
