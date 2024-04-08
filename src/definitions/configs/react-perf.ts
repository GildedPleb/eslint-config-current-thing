// PathMark: ./src/definitions/configs/react-perf.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  id: "react-perf",
  name: "React Performance",
  packages: [
    {
      declaredAs: "reactPerf",
      package: "eslint-plugin-react-perf",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-perf"],
  rules: `...reactPerf.configs.recommended.rules,`,
} satisfies Config;
// EOF
