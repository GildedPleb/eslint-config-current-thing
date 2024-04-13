// PathMark: ./src/definitions/parsers/jsonc.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: graphQLFiles,
    languageOptions: {
      parser: parseForESLint,
    },
  }`,
  name: "GraphQL",
  packages: [
    {
      declaredAs:
        "{ parseForESLint, processors as graphqlProcessors, rules as graphQLRules, flatConfigs as graphqlConfigs }",
      package: "@graphql-eslint/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Parser;
// EOF
