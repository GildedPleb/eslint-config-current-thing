// PathMark: ./src/definitions/configs/jsonc.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: graphQLFiles,
    ${RULES}
  }`,
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
