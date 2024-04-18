// PathMark: ./src/definitions/configs/jasmine.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    languageOptions: {
      globals: {
        jasmine: true
      },
    },
    ${RULES}
  }`,
  id: "jasmine",
  name: "Jasmine",
  packages: [
    {
      declaredAs: "jasmine",
      package: "eslint-plugin-jasmine",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jasmine"],
  rules: `...jasmine.configs.recommended.rules,`,
} satisfies Config;
// EOF
