import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [{ name: "sonarjs", package: "eslint-plugin-sonarjs" }],
  requiresImport: true,
  name: "SonarJS",
  definitions: `{
    files,
    plugins: { sonarjs },
    ${RULES}
  }`,
  rules: `{
    ...sonarjs.configs.recommended.rules,
    // Complexity can not be simplified to a linear scale. If it could, it
    // would be simple, not complex.
    "sonarjs/cognitive-complexity": 0,
  }`,
} satisfies Config;
