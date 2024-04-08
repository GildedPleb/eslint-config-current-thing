// PathMark: ./src/definitions/parsers/ts.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        project: true,
      },
    },
  }`,
  name: "TypeScript",
  packages: [
    {
      name: "tseslint.plugin",
      package: "typescript-eslint",
      requiresImport: false,
    },
    {
      name: "typescriptParser",
      package: "@typescript-eslint/parser",
      requiresImport: false,
    },
  ],
} satisfies Parser;
// EOF
