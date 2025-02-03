// PathMark: ./src/definitions/parsers/yml.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: ymlFiles,
    languageOptions: {
      parser: ymlEslintParser,
    },
  }`,
  enabled: true,
  name: "YML",
  packages: [
    {
      declaredAs: "ymlEslintParser",
      package: "yaml-eslint-parser",
    },
  ],
} satisfies Parser;
// EOF
