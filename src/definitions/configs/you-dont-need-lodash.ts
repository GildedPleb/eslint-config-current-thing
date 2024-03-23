// PathMark: ./src/definitions/configs/you-dont-need-lodash.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "you-dont-need-lodash-underscore": youDontNeedLodash },
    ${RULES}
  }`,
  name: "You Don't Need Lodash",
  packages: [
    {
      name: "youDontNeedLodash",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: true,
    },
  ],
  rules: `youDontNeedLodash.configs.compatible.rules`,
} satisfies Config;
// EOF