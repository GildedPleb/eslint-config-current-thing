// PathMark: ./src/definitions/plugins/you-dont-need-lodash.ts
import type { Plugin } from ".";

export default {
  name: "You Don't Need Lodash",
  packages: [
    {
      key: "you-dont-need-lodash-underscore",
      name: "youDontNeedLodash",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
