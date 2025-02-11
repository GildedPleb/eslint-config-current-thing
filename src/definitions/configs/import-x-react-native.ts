// PathMark: ./src/definitions/configs/import-x-react-native.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
    settings: importX.flatConfigs["react-native"].settings,
  }`,
  ejected: false,
  enabled: true,
  id: "import-x-react-native",
  name: "Import X",
  nameSecondary: "React-Native",
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
