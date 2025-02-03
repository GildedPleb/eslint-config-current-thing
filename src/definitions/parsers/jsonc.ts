// PathMark: ./src/definitions/parsers/jsonc.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: jsonFiles,
    languageOptions: {
      parser: jsoncEslintParser,
    },
  }`,
  enabled: true,
  name: "JSONC",
  packages: [
    {
      declaredAs: "jsoncEslintParser",
      package: "jsonc-eslint-parser",
    },
  ],
} satisfies Parser;
// EOF
