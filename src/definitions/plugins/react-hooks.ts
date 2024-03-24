// PathMark: ./src/definitions/plugins/react-hooks.ts
import type { Plugin } from ".";

export default {
  name: "React Hooks",
  packages: [
    {
      key: "react-hooks",
      name: "reactHooks",
      package: "eslint-plugin-react-hooks",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
