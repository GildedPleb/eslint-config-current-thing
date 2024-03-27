// PathMark: ./src/definitions/configs/you-dont-need-lodash.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "no-lodash",
  name: "You Don't Need Lodash",
  packages: [
    {
      name: "youDontNeedLodash",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["you-dont-need-lodash-underscore"],
  rules: `youDontNeedLodash.configs.compatible.rules`,
} satisfies Config;
// EOF
