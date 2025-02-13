// PathMark: ./src/definitions/configs/jsonc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "jsonc",
  name: "JSONC",
  packages: [
    {
      declaredAs: "jsonc",
      package: "eslint-plugin-jsonc",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsonc"],
  rules: `...jsonc.configs.base.overrides[0].rules,
    ...jsonc.configs["recommended-with-json"].rules,
    ...jsonc.configs["recommended-with-jsonc"].rules,
    ...jsonc.configs["recommended-with-json5"].rules,`,
} satisfies Config;
// EOF
