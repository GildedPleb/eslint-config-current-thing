import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "jsdoc", package: "eslint-plugin-jsdoc" }],
  requiresImport: true,
  name: "JSDoc",
  definitions: `{
    files,
    plugins: { jsdoc },
    settings: { jsdoc: { mode: "typescript" } },
    ${RULES}
  }`,
  rules: `{
    ...jsdoc.configs.recommended.rules,
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
    "jsdoc/require-yields": 0,
  }`,
} satisfies Config;
