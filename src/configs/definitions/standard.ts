// PathMark: ./src/configs/definitions/standard.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "Standard",
  packages: [
    {
      name: "standard",
      package: "eslint-config-standard",
      requiresImport: false,
    },
    {
      name: "standardTS",
      package: "eslint-config-love",
      requiresImport: true,
    },
  ],
  rules: `compat.extends("standard")[0].rules,
    ...standardTS.rules,
    // types can be inferred by typescript
    "@typescript-eslint/explicit-function-return-type": 0`,
} satisfies Config;
// EOF
