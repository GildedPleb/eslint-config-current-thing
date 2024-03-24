// PathMark: ./src/definitions/configs/react-perf.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "React Performance",
  packages: [
    {
      name: "reactPerf",
      package: "eslint-plugin-react-perf",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-perf"],
  rules: `reactPerf.configs.recommended.rules`,
} satisfies Config;
// EOF
