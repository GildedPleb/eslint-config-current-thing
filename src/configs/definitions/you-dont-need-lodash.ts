import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "you-dont-need-lodash-underscore": youDontNeedLodash },
    ${RULES}
  }`,
  name: "You Dont Need Lodash",
  packages: [
    {
      name: "youDontNeedLodash",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: true,
    },
  ],
  rules: `youDontNeedLodash.configs.compatible.rules`,
} satisfies Config;
