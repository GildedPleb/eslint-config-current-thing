// PathMark: ./src/configs/definitions/jsdoc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { jsdoc },
    settings: { jsdoc: { mode: "typescript" } },
    ${RULES}
  }`,
  name: "JSDoc",
  packages: [
    { name: "jsdoc", package: "eslint-plugin-jsdoc", requiresImport: true },
  ],
  rules: `jsdoc.configs.recommended.rules,
    // Rules needed for TSDoc Compatability
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
