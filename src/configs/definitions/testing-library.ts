// PathMark: ./src/configs/definitions/testing-library.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: { "testing-library": testingLibrary },
    ${RULES}
  }`,
  name: "Testing Library",
  packages: [
    {
      name: "testingLibrary",
      package: "eslint-plugin-testing-library",
      requiresImport: true,
    },
  ],
  rules: `testingLibrary.configs.react.rules`,
} satisfies Config;
// EOF
