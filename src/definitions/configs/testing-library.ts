// PathMark: ./src/definitions/configs/testing-library.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsTestFiles, ...tsTestFiles],
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "testing-library",
  name: "Testing Library",
  packages: [
    {
      declaredAs: "testingLibrary",
      package: "eslint-plugin-testing-library",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["testing-library"],
  rules: `...testingLibrary.configs.react.rules,`,
} satisfies Config;
// EOF
