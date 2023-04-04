import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "importPlugin", package: "eslint-plugin-import" }],
  requiresImport: true,
  name: "Import",
  definitions: `{
    files,
    // This is defined in AirBnb
    // plugins: { i: importPlugin },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
        node: true,
      },
    },
    ${RULES}
  }`,
  rules: `{
    ...importPlugin.configs.recommended.rules,
    ...importPlugin.configs.typescript.rules,
  }`,
} satisfies Config;
