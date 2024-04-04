// PathMark: ./src/definitions/configs/standard-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "standard-ts",
  name: "Standard",
  packages: [
    {
      name: "standard",
      package: "eslint-config-standard-with-typescript",
      requiresImport: false,
    },
    {
      name: "standardTS",
      package: "eslint-config-love",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...standardTS.rules,`,
} satisfies Config;
// EOF
