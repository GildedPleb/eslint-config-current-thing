// PathMark: ./src/definitions/parsers/jsonc.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: ["*.toml"],
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
