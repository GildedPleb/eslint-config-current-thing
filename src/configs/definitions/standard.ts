import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "standard", package: "eslint-config-standard" },
    { name: "standardTS", package: "eslint-config-standard-with-typescript" },
  ],
  requiresImport: false,
  name: "Standard",
  definitions: `...compat.extends("standard", "standard-with-typescript"),
  {
    files,
    ${RULES}
  }`,
  rules: `{
    // types can be infered by typescript
    "@typescript-eslint/explicit-function-return-type": 0,
  }`,
} satisfies Config;
