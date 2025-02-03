// PathMark: ./src/definitions/plugins/react-perf.ts
import type { Plugin } from ".";

export default {
  enabled: true,
  name: "React Performance",
  packages: [
    {
      declaredAs: "reactPerf",
      mappedAs: "reactPerf",
      namespace: "react-perf",
      package: "eslint-plugin-react-perf",
      requiresImport: true,
    },
  ],
} satisfies Plugin<"react-perf">;
// EOF
