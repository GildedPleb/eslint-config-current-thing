// PathMark: ./src/definitions/configs/jest-dom.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: testFiles,
    ${RULES}
  }`,
  id: "jest-dom",
  name: "Jest Dom",
  packages: [
    {
      name: "jestDom",
      package: "eslint-plugin-jest-dom",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jest-dom"],
  rules: `jestDom.configs.recommended.rules`,
} satisfies Config;
// EOF
