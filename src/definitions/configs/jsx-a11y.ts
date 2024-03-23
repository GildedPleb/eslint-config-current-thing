// PathMark: ./src/definitions/configs/jsx-a11y.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "jsx-a11y": jsxA11y },
    ${RULES}
  }`,
  name: "JSX A11y",
  packages: [
    {
      name: "jsxA11y",
      package: "eslint-plugin-jsx-a11y",
      requiresImport: true,
    },
  ],
  rules: `jsxA11y.configs.recommended.rules`,
} satisfies Config;
// EOF
