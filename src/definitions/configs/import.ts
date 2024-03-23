// PathMark: ./src/definitions/configs/import.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
        node: {
          extensions: [
            ".mjs",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
            ".d.ts"
          ]
        },
      },
      "import/extensions": [
        ".js",
        ".mjs",
        ".jsx",
        ".ts",
        ".tsx",
        ".d.ts"
      ],
      "import/core-modules": [],
      "import/ignore": [
        "node_modules",
        "\\.(coffee|scss|css|less|hbs|svg|json)$"
      ],
      "import/external-module-folders": [
        "node_modules",
        "node_modules/@types"
      ],
    },
    ${RULES}
  }`,
  name: "Import",
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
  rules: `importPlugin.configs.recommended.rules,
    ...importPlugin.configs.typescript.rules,
    "import/order": 0`,
} satisfies Config;
// EOF
