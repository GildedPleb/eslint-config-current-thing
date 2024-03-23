// PathMark: ./src/definitions/configs/jest-dom.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "jest-dom": jestDom },
    ${RULES}
  }`,
  name: "Jest Dom",
  packages: [
    {
      name: "jestDom",
      package: "eslint-plugin-jest-dom",
      requiresImport: true,
    },
  ],
  rules: `jestDom.configs.recommended.rules`,
} satisfies Config;
// EOF
