// PathMark: ./src/configs/definitions/no-only-test.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "no-only-tests": noOnlyTest },
    ${RULES}
  }`,
  name: "No Only Tests",
  packages: [
    {
      name: "noOnlyTest",
      package: "eslint-plugin-no-only-tests",
      requiresImport: true,
    },
  ],
  rules: `{
    "no-only-tests/no-only-tests": 2
  }`,
} satisfies Config;
// EOF
