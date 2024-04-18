// PathMark: ./src/definitions/parsers/mdx.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: mdFiles,
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        React: false,
      },
      parser: eslintMdx,
      sourceType: "module",
    },
  }`,
  name: "MDX",
  packages: [
    {
      declaredAs: "* as eslintMdx",
      package: "eslint-mdx",
    },
  ],
} satisfies Parser;
// EOF
