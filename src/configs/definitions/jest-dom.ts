import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "jestDom",
      package: "eslint-plugin-jest-dom",
      requiresImport: true,
    },
  ],
  name: "Jest Dom",
  definitions: `{
    files,
		plugins: { "jest-dom": jestDom },
    ${RULES}
  }`,
  rules: `{ ...jestDom.configs.recommended.rules }`,
} satisfies Config;
