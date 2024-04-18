// PathMark: ./src/definitions/parsers/jsonc.ts
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
    },
  ],
} satisfies Parser;
// EOF
