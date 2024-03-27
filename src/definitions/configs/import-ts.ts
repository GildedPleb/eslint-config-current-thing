// PathMark: ./src/definitions/configs/import.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "import",
  name: "Import",
  nameSecondary: "ts",
  packages: [
    {
      name: "importPlugin",
      package: "eslint-plugin-import",
      requiresImport: false,
    },
    {
      name: "importResolver",
      package: "eslint-import-resolver-typescript",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import"],
  rules: `importPlugin.configs.typescript.rules`,
} satisfies Config;
// EOF
