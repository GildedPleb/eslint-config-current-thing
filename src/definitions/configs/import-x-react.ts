// PathMark: ./src/definitions/configs/import-x-react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
    settings: importX.flatConfigs.react.settings,
    languageOptions: importX.flatConfigs.react.languageOptions,
  }`,
  ejected: false,
  enabled: true,
  id: "import-x-react",
  name: "Import X",
  nameSecondary: "React",
  packages: [
    {
      declaredAs: "importX",
      package: "eslint-plugin-import-x",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import-x"],
  rules: ``,
} satisfies Config;
// EOF
