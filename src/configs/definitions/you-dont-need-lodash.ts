import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "youDontNeedLodash",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: true,
    },
  ],
  name: "You Dont Need Lodash",
  definitions: `{
    files,
    plugins: { "you-dont-need-lodash-underscore": youDontNeedLodash },
    ${RULES}
  }`,
  rules: `{ ...youDontNeedLodash.configs.compatible.rules }`,
} satisfies Config;
