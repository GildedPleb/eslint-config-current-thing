// PathMark: ./src/definitions/plugins/compat.ts
import { type Plugin } from ".";

export default {
  name: "Compat",
  packages: [
    {
      key: "compat",
      name: "comp",
      package: "eslint-plugin-compat",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
