import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { sonarjs },
    ${RULES}
  }`,
  name: "SonarJS",
  packages: [
    { name: "sonarjs", package: "eslint-plugin-sonarjs", requiresImport: true },
  ],
  rules: `sonarjs.configs.recommended.rules,
    // Complexity can not be simplified to a linear scale. If it could, it
    // would be simple, not complex.
    "sonarjs/cognitive-complexity": 0`,
} satisfies Config;
