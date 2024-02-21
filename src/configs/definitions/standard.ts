import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "standard",
      package: "eslint-config-standard",
      requiresImport: false,
    },
    {
      name: "standardTS",
      package: "eslint-config-standard-with-typescript",
      requiresImport: false,
    },
  ],
  name: "Standard",
  definitions: `{
    files,
    ${RULES}
  }`,
  rules: `compat.extends("standard")[0].rules,
    ...compat.extends("standard-with-typescript")[0].rules,
    // types can be infered by typescript
    "@typescript-eslint/explicit-function-return-type": 0`,
} satisfies Config;
