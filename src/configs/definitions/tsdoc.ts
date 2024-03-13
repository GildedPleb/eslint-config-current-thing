import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { tsdoc },
    ${RULES}
  }`,
  name: "TSDoc",
  packages: [
    { name: "tsdoc", package: "eslint-plugin-tsdoc", requiresImport: true },
  ],
  rules: `{ "tsdoc/syntax": 2 }`,
} satisfies Config;
