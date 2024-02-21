import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "tsdoc", package: "eslint-plugin-tsdoc", requiresImport: true },
  ],
  name: "TSDoc",
  definitions: `{
    files,
    plugins: { tsdoc },
    ${RULES}
  }`,
  rules: `{ "tsdoc/syntax": 2 }`,
} satisfies Config;
