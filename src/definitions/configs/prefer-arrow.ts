// PathMark: ./src/definitions/configs/prefer-arrow.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "prefer-arrow",
  name: "Prefer Arrow",
  packages: [
    {
      declaredAs: "preferArrow",
      package: "eslint-plugin-prefer-arrow",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prefer-arrow"],
  rules: `"prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": false,
        "singleReturnOnly": true,
        "classPropertiesAllowed": false,
        "allowStandaloneDeclarations": true
      }
    ],`,
} satisfies Config;
// EOF
