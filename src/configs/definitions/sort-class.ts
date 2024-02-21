import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "sortClassMembers",
      package: "eslint-plugin-sort-class-members",
      requiresImport: true,
    },
  ],
  name: "Sort Class Members",
  definitions: `{
    files,
    plugins: { "sort-class-members": sortClassMembers },
    // there are no recomended ways to use this rule, but Shopify has opinions about it.
    ${RULES}
  }`,
} satisfies Config;
