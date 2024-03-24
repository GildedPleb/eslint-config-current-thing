// PathMark: ./src/definitions/plugins/react-refresh.ts
import { type Plugin } from ".";

export default {
  name: "React Refresh",
  packages: [
    {
      key: "react-refresh",
      name: "reactRefresh",
      package: "eslint-plugin-react-refresh",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
