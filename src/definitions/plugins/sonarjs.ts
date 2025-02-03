// PathMark: ./src/definitions/plugins/sonarjs.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "SonarJS",
  packages: [
    {
      declaredAs: "sonarjs",
      mappedAs: "sonarjs",
      namespace: "sonarjs",
      package: "eslint-plugin-sonarjs",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"sonarjs">;
// EOF
