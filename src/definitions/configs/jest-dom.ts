// PathMark: ./src/definitions/configs/jest-dom.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsTestFiles, ...tsTestFiles],
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "jest-dom",
  name: "Jest Dom",
  packages: [
    {
      declaredAs: "jestDom",
      package: "eslint-plugin-jest-dom",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest-dom"],
  rules: `...jestDom.configs.recommended.rules,`,
} satisfies Config;
// EOF
