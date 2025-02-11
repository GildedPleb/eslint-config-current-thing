// PathMark: ./src/definitions/configs/gts-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "gts",
  name: "Google Typescript Style",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "gts",
      package: "gts",
      requiresImport: true,
    },
  ],
  requiredPlugins: ["n", "@typescript-eslint"],
  rules: `...gts.overrides[0].rules,`,
} satisfies Config;
// EOF
