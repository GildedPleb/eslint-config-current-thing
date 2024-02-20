import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    { name: "nNode", package: "eslint-plugin-n", requiresImport: true },
    { name: "node", package: "eslint-plugin-node", requiresImport: true },
  ],
  name: "Node.js",
  definitions: `{
    files,
    plugins: {
      // eslint-disable-next-line id-length
      n: nNode,
      node,
    },
    ${RULES}
  }`,
  rules: `{
    // there are no recomended ways to use "node", as the "n" rule obsoletes
    // it, but "node" is still used by the Shopify config.
    ...nNode.configs["recommended-module"].rules,
    // Typescript handles this
    "n/no-missing-import": 0,
    // Typescript handles this
    "n/no-unpublished-import": 0,
  }`,
} satisfies Config;
