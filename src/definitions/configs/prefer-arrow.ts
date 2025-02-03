// PathMark: ./src/definitions/configs/prefer-arrow.ts
import { RULES } from "../../constants";
import type { Config } from ".";
import { reactIds } from "./id-groups";

export default {
  conflicts: {
    "prefer-arrow/prefer-arrow-functions": [
      "mocha",
      ...reactIds,
      "functional",
      "functional/ts",
      "ts",
    ],
  },
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
      1,
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ],`,
} satisfies Config;
// EOF
