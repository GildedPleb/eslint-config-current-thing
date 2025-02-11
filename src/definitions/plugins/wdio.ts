// PathMark: ./src/definitions/plugins/vitest.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "Webdriver IO",
  packages: [
    {
      declaredAs: "{ configs as wdio, rules as wdioPlugin }",
      mappedAs: "{ rules: wdioPlugin }",
      namespace: "wdio",
      package: "eslint-plugin-wdio",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"wdio">;
// EOF
