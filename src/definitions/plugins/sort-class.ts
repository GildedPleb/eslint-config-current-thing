// PathMark: ./src/definitions/plugins/sort-class.ts
import type { Plugin } from ".";

export default {
  name: "Sort Class Members",
  packages: [
    {
      key: "sort-class-members",
      name: "sortClassMembers",
      package: "eslint-plugin-sort-class-members",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
