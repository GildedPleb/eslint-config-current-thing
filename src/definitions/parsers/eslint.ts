// PathMark: ./src/definitions/parsers/eslint.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: jsFiles,
    languageOptions: {
      parser: espree,
    },
  }`,
  enabled: true,
  name: "Espree",
  packages: [
    {
      declaredAs: "* as espree",
      package: "espree",
    },
  ],
} satisfies Parser;
// EOF
