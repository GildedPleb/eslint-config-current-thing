import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "@babel": babelPlugin },
    // Shopify utilizes these rules, so defering to that config.
    // No recomendations given / defaults are all set to 0.
    ${RULES}
  }`,
  name: "Babel",
  packages: [
    {
      name: "babelPlugin",
      package: "@babel/eslint-plugin",
      requiresImport: true,
    },
  ],
} satisfies Config;
