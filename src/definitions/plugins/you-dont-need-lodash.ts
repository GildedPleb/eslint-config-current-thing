// PathMark: ./src/definitions/plugins/you-dont-need-lodash.ts
import type { Plugin } from ".";

export default {
  name: "You Don't Need Lodash",
  packages: [
    {
      declaredAs: "youDontNeedLodash",
      namespace: "you-dont-need-lodash-underscore",
      package: "eslint-plugin-you-dont-need-lodash-underscore",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"you-dont-need-lodash-underscore">;
// EOF
