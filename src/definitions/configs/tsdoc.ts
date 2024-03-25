// PathMark: ./src/definitions/configs/tsdoc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "TSDoc",
  packages: [
    { name: "tsdoc", package: "eslint-plugin-tsdoc", requiresImport: false },
  ],
  requiredPlugins: ["tsdoc"],
  rules: `{ "tsdoc/syntax": 2 }`,
} satisfies Config;
// EOF
