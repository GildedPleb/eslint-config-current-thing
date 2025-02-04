// PathMark: ./src/definitions/configs/vitest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsTestFiles,
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "vitest",
  name: "Vitest",
  packages: [
    {
      declaredAs: "vitest",
      package: "@vitest/eslint-plugin",
      requiresImport: false,
    },
    {
      declaredAs: "vitestOld",
      package: "eslint-plugin-vitest",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["vitest"],
  rules: `...vitest.configs.recommended.rules,`,
} satisfies Config;
// EOF
