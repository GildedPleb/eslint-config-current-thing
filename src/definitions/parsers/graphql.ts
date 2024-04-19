// PathMark: ./src/definitions/parsers/graphql.ts
import type { Parser } from ".";

export default {
  definitions: `{
    files: graphQLFiles,
    languageOptions: {
      parser: graphQLparseForESLint,
    },
  }`,
  name: "GraphQL",
  packages: [
    {
      declaredAs: `{
          flatConfigs as graphqlConfigs,
          parseForESLint as graphQLparseForESLint,
          processors as graphqlProcessors,
          rules as graphQLRules,
        }`,
      package: "@graphql-eslint/eslint-plugin",
    },
  ],
} satisfies Parser;
// EOF
