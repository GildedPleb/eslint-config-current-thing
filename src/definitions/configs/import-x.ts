// PathMark: ./src/definitions/configs/import-x.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsFiles,
    settings: {
      "import-x/resolver": {
        node: {
          extensions: [".js", ".jsx", ".mjs", ".cjs"],
          includeScoped: true,
          paths: ["node_modules"],
          resolvePaths: ["node_modules"],
        },
        typescript: {},
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "import-x",
  name: "Import X",
  packages: [
    {
      declaredAs: "importX",
      package: "eslint-plugin-import-x",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import-x"],
  rules: `...importX.flatConfigs.recommended.rules,`,
} satisfies Config;
// EOF
