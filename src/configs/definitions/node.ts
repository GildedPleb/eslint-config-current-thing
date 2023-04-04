import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "n", package: "eslint-plugin-n" },
    { name: "node", package: "eslint-plugin-node" },
  ],
  requiresImport: true,
  name: "Node.js",
  definitions: `{
    files,
    plugins: {
      // "n" is defined elsewhere, and thus can be commented out here
      // n
      node,
    },
    ${RULES}
  }`,
  rules: `{
    // there are no recomended ways to use "node", as the "n" rule obsoletes
    // it, but "node" is still used by the Shopify config.
    ...n.configs["recommended-module"].rules,
    "n/no-missing-import": 0, // Typescript handles this
    "n/no-unpublished-import": 0, // Typescript handles this
  }`,
} satisfies Config;
