// PathMark: ./src/definitions/configs/vitest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsTestFiles,
    settings: {
      vitest: {
        typecheck: true
      }
    },
    languageOptions: {
     parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        project: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "vitest-ts",
  name: "Vitest TS",
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
