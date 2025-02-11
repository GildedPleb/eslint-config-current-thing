// PathMark: ./src/definitions/configs/import-x-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
    settings: importX.flatConfigs.typescript.settings,
  }`,
  ejected: false,
  enabled: true,
  id: "import-x-ts",
  name: "Import X",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "importX",
      package: "eslint-plugin-import-x",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import-x"],
  rules: `...importX.flatConfigs.typescript.rules,`,
} satisfies Config;
// EOF
