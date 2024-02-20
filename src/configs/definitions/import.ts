import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "importPlugin",
      package: "eslint-plugin-import",
      requiresImport: true,
    },
  ],
  name: "Import",
  definitions: `{
    files,
    plugins: { import: importPlugin },
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
  rules: `{
    ...importPlugin.configs.recommended.rules,
    ...importPlugin.configs.typescript.rules,
    "import/order": 0,
  }`,
} satisfies Config;
