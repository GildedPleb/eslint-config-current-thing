// PathMark: ./src/definitions/plugins/react-perf.ts
import type { Plugin } from ".";

export default {
  name: "React Performance",
  packages: [
    {
      key: "react-perf",
      name: "reactPerf",
      package: "eslint-plugin-react-perf",
      requiresImport: true,
    },
  ],
} satisfies Plugin;
// EOF
