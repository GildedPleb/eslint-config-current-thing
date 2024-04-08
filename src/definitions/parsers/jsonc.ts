// PathMark: ./src/definitions/parsers/ts.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    languageOptions: {
      parser: jsoncEslintParser,
    },
  }`,
  name: "JSONC",
  packages: [
    {
      declaredAs: "jsoncEslintParser",
      package: "jsonc-eslint-parser",
      requiresImport: true,
    },
  ],
} satisfies Parser;
// EOF
