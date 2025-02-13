// PathMark: ./src/definitions/configs/graphql.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: graphQLFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "graphql",
  name: "GraphQL",
  packages: [
    {
      declaredAs: "graphql",
      package: "@graphql-eslint/eslint-plugin",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@graphql-eslint"],
  rules: `...graphqlConfigs["schema-recommended"].rules,
    ...graphqlConfigs["operations-recommended"].rules,`,
} satisfies Config;
// EOF
