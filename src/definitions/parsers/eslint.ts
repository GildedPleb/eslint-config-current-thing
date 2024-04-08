// PathMark: ./src/definitions/parsers/eslint.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: jsFiles,
    languageOptions: {
      parser: espree,
    },
  }`,
  name: "Espree",
  packages: [
    {
      declaredAs: "* as espree",
      package: "espree",
      requiresImport: true,
    },
  ],
} satisfies Parser;
// EOF
