// PathMark: ./src/definitions/configs/jsx-a11y.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  id: "jsx-a11y",
  name: "JSX Accessibility (JSX A11y)",
  packages: [
    {
      declaredAs: "jsxA11y",
      package: "eslint-plugin-jsx-a11y",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["jsx-a11y"],
  rules: `...jsxA11y.configs.recommended.rules,`,
} satisfies Config;
// EOF
