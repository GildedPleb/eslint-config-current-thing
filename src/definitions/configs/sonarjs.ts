// PathMark: ./src/definitions/configs/sonarjs.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "sonarjs",
  name: "SonarJS",
  packages: [
    {
      name: "sonarjs",
      package: "eslint-plugin-sonarjs",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["sonarjs"],
  rules: `...sonarjs.configs.recommended.rules,`,
} satisfies Config;
// EOF
