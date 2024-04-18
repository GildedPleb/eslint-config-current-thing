// PathMark: ./src/definitions/plugins/sort-class.ts
import type { Plugin } from ".";

export default {
  name: "Sort Class Members",
  packages: [
    {
      declaredAs: "sortClassMembers",
      mappedAs: "sortClassMembers",
      namespace: "sort-class-members",
      package: "eslint-plugin-sort-class-members",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"sort-class-members">;
// EOF
