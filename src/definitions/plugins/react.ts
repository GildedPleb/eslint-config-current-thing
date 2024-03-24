// PathMark: ./src/definitions/plugins/react.ts
import type { Plugin } from ".";

export default {
  name: "React",
  packages: [
    {
      key: "react",
      name: "react",
      package: "eslint-plugin-react",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
