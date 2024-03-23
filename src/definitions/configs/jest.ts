// PathMark: ./src/definitions/configs/jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: {
        afterAll: false,
        afterEach: false,
        beforeAll: false,
        beforeEach: false,
        describe: false,
        expect: false,
        fit: false,
        it: false,
        jest: false,
        test: false,
        xdescribe: false,
        xit: false,
        xtest: false,
      },
    },
    ${RULES}
  }`,
  name: "Jest",
  packages: [
    { name: "jest", package: "eslint-plugin-jest", requiresImport: false },
  ],
  requiredPlugins: ["jest"],
  rules: `jest.configs['flat/recommended'].rules`,
} satisfies Config;
// EOF
