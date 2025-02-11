// PathMark: ./src/definitions/configs/stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "depend",
  name: "Depend",
  packages: [
    {
      declaredAs: "depend",
      package: "eslint-plugin-depend",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["depend"],
  rules: `"depend/ban-dependencies": [
    2,
    {
      // Allowing these because they are not deprecated / abandoned
      allowed: ["eslint-plugin-import", "eslint-plugin-react"],
    },
  ],`,
} satisfies Config;
// EOF
