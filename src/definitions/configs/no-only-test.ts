// PathMark: ./src/definitions/configs/no-only-test.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "no-only-test",
  name: "No Only Tests",
  packages: [
    {
      declaredAs: "noOnlyTest",
      package: "eslint-plugin-no-only-tests",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["no-only-tests"],
  rules: `"no-only-tests/no-only-tests": 2,`,
} satisfies Config;
// EOF
