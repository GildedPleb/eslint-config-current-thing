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
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  }`,
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint.plugin",
      package: "typescript-eslint",
      requiresImport: false,
    },
    {
      declaredAs: "typescriptParser",
      package: "@typescript-eslint/parser",
      requiresImport: false,
    },
  ],
} satisfies Parser;
// EOF
