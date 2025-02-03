// PathMark: ./src/definitions/parsers/ts.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: tsFiles,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  }`,
  enabled: true,
  name: "TypeScript",
  packages: [
    {
      declaredAs: "tseslint",
      package: "typescript-eslint",
    },
    {
      declaredAs: "typescriptParser",
      package: "@typescript-eslint/parser",
    },
  ],
} satisfies Parser;
// EOF
