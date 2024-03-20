// PathMark: ./src/configs/definitions/react-perf.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "react-perf": reactPerf },
    ${RULES}
  }`,
  name: "React Performance",
  packages: [
    {
      name: "reactPerf",
      package: "eslint-plugin-react-perf",
      requiresImport: true,
    },
  ],
  rules: `reactPerf.configs.recommended.rules`,
} satisfies Config;
// EOF
