// PathMark: ./src/definitions/configs/yml.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tomlFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "toml",
  name: "TOML",
  packages: [
    {
      declaredAs: "toml",
      package: "eslint-plugin-toml",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["toml"],
  rules: `...toml.configs.base.overrides[0].rules,
    ...toml.configs.recommended.rules,
    ...toml.configs.standard.rules,`,
} satisfies Config;
// EOF
