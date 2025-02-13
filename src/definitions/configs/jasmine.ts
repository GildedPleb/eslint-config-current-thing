// PathMark: ./src/definitions/configs/jasmine.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: jsTestFiles,
    languageOptions: {
      globals: {
        jasmine: true
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
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
