// PathMark: ./src/definitions/configs/sort-class.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "sort-class-members": sortClassMembers },
    // there are no recommended ways to use this rule, but Shopify has opinions about it.
    ${RULES}
  }`,
  name: "Sort Class Members",
  packages: [
    {
      name: "sortClassMembers",
      package: "eslint-plugin-sort-class-members",
      requiresImport: true,
    },
  ],
} satisfies Config;
// EOF
