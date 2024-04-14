// PathMark: ./src/definitions/parsers/yml.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: ymlFiles,
    languageOptions: {
      parser: ymlEslintParser,
    },
  }`,
  name: "YML",
  packages: [
    {
      declaredAs: "ymlEslintParser",
      package: "yaml-eslint-parser",
      requiresImport: true,
    },
  ],
} satisfies Parser;
// EOF
