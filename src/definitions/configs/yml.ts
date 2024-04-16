// PathMark: ./src/definitions/configs/yml.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  conflicts: {
    "yml/flow-mapping-curly-spacing": ["prettier/yml"],
  },
  definitions: `{
    files: ymlFiles,
    ${RULES}
  }`,
  id: "yml",
  name: "YML",
  packages: [
    { declaredAs: "yml", package: "eslint-plugin-yml", requiresImport: false },
  ],
  requiredPlugins: ["yml"],
  rules: `...yml.configs.base.overrides[0].rules,
    ...yml.configs.standard.rules,
    ...yml.configs.recommended.rules,`,
} satisfies Config;
// EOF
