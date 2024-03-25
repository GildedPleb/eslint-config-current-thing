// PathMark: ./src/definitions/configs/testing-library.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    ${RULES}
  }`,
  name: "Testing Library",
  packages: [
    {
      name: "testingLibrary",
      package: "eslint-plugin-testing-library",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["testing-library"],
  rules: `testingLibrary.configs.react.rules`,
} satisfies Config;
// EOF
