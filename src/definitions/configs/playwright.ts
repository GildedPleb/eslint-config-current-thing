// PathMark: ./src/definitions/configs/playwright.ts
import { RULES } from "../../constants";
import type { Config } from ".";
import { testIds } from "./id-groups";

export default {
  conflicts: {
    "playwright/no-standalone-expect": [...testIds],
  },
  definitions: `{
    files: [...jsTestFiles, ...tsTestFiles],
    languageOptions: {
      globals: globals["shared-node-browser"],
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "playwright",
  name: "Playwright",
  packages: [
    {
      declaredAs: "playwright",
      package: "eslint-plugin-playwright",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["playwright"],
  rules: `...playwright.configs.recommended.rules,`,
} satisfies Config;
// EOF
