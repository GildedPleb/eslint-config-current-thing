// PathMark: ./src/definitions/parsers/mdx.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: mdFiles,
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      parser: eslintMdx,
      globals: {
        React: false,
      },
    },
  }`,
  name: "MDX",
  packages: [
    {
      declaredAs: "* as eslintMdx",
      package: "eslint-mdx",
      requiresImport: true,
    },
  ],
} satisfies Parser;
// EOF
