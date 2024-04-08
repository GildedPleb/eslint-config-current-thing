// PathMark: ./src/definitions/plugins/react-perf.ts
import type { Plugin } from ".";

export default {
  name: "React Performance",
  packages: [
    {
      declaredAs: "reactPerf",
      namespace: "react-perf",
      package: "eslint-plugin-react-perf",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-perf">;
// EOF
