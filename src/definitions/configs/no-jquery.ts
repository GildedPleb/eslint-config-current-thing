// PathMark: ./src/definitions/configs/no-jquery.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "no-jquery",
  name: "No JQuery",
  packages: [
    {
      declaredAs: "noJQuery",
      package: "eslint-plugin-no-jquery",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-jquery"],
  rules: `"no-jquery/variable-pattern": "error",`,
} satisfies Config;
// EOF
