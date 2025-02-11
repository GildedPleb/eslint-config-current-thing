// PathMark: ./src/definitions/configs/import.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
    settings: {
      "import/core-modules": [],
      "import/extensions": [
        ".js",
        ".mjs",
        ".jsx",
        ".ts",
        ".tsx",
        ".d.ts",
      ],
      "import/external-module-folders": [
        "node_modules",
        "node_modules/@types",
      ],
      "import/ignore": [
        "node_modules",
        ".(coffee|scss|css|less|hbs|svg|json)$",
      ],
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".ts",
          ".tsx",
          ".js",
          ".jsx",
          ".mjs",
          ".cjs",
          ".mts",
          ".cts",
        ],
      },
      "import/resolver": {
        node: {
          extensions: [
            ".mjs",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
            ".d.ts",
          ],
        },
        typescript: { alwaysTryTypes: true },
      },
    },
  }`,
  ejected: false,
  enabled: true,
  id: "import-js",
  name: "Import",
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
  rules: `...importPlugin.configs.recommended.rules,`,
} satisfies Config;
// EOF
