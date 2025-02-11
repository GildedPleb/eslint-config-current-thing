// PathMark: ./src/definitions/configs/import-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "import-js",
  name: "Import",
  nameSecondary: "ts",
  packages: [
    {
      declaredAs: "importResolver",
      package: "eslint-import-resolver-typescript",
      requiresImport: false,
    },
    {
      declaredAs: "importPlugin",
      package: "eslint-plugin-import",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import"],
  rules: `...importPlugin.configs.typescript.rules,`,
} satisfies Config;
// EOF
