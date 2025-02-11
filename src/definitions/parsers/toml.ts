// PathMark: ./src/definitions/parsers/toml.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: tomlFiles,
    languageOptions: {
      parser: tomlEslintParser,
    },
  }`,
  enabled: true,
  name: "TOML",
  packages: [
    {
      declaredAs: "tomlEslintParser",
      package: "toml-eslint-parser",
    },
  ],
} satisfies Parser;
// EOF
