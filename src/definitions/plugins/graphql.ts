// PathMark: ./src/definitions/plugins/graphql.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "GraphQL",
  packages: [
    {
      declaredAs: "{ rules: graphQLRules }",
      mappedAs: "{ rules: graphQLRules }",
      namespace: "@graphql-eslint",
      package: "@graphql-eslint/eslint-plugin",
      requiresImport: false,
    },
  ],
} satisfies Plugin<"@graphql-eslint">;
// EOF
