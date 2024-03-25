// PathMark: ./src/definitions/plugins/sonarjs.ts
import type { Plugin } from ".";

export default {
  name: "SonarJS",
  packages: [
    {
      key: "sonarjs",
      name: "sonarjs",
      package: "eslint-plugin-sonarjs",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
