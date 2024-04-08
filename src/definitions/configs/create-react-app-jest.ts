// PathMark: ./src/definitions/configs/create-react-app-jest.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    languageOptions: {
      globals: {
        "jest/globals": true,
      }
    },
    ${RULES}
  }`,
  id: "cra",
  name: "Create React App",
  nameSecondary: "Jest",
  packages: [
    {
      declaredAs: "cra",
      package: "eslint-config-react-app",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest", "testing-library"],
  rules: `// https://github.com/jest-community/eslint-plugin-jest
    "jest/no-conditional-expect": 2,
    "jest/no-identical-title": 2,
    "jest/no-interpolation-in-snapshots": 2,
    "jest/no-jasmine-globals": 2,
    "jest/no-mocks-import": 2,
    "jest/valid-describe-callback": 2,
    "jest/valid-expect": 2,
    "jest/valid-expect-in-promise": 2,
    "jest/valid-title": 1,

    // https://github.com/testing-library/eslint-plugin-testing-library
    "testing-library/await-async-queries": 2,
    "testing-library/await-async-utils": 2,
    "testing-library/no-await-sync-queries": 2,
    "testing-library/no-container": 2,
    "testing-library/no-debugging-utils": 2,
    "testing-library/no-dom-import": [2, "react"],
    "testing-library/no-node-access": 2,
    "testing-library/no-promise-in-fire-event": 2,
    "testing-library/no-render-in-lifecycle": 2,
    "testing-library/no-unnecessary-act": 2,
    "testing-library/no-wait-for-multiple-assertions": 2,
    "testing-library/no-wait-for-side-effects": 2,
    "testing-library/no-wait-for-snapshot": 2,
    "testing-library/prefer-find-by": 2,
    "testing-library/prefer-presence-queries": 2,
    "testing-library/prefer-query-by-disappearance": 2,
    "testing-library/prefer-screen-queries": 2,
    "testing-library/render-result-naming-convention": 2,`,
} satisfies Config;
// EOF
