// PathMark: ./src/definitions/configs/md.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        },
      },
    },
    ${RULES}
  }`,
  id: "markdown",
  name: "Markdown",
  packages: [
    {
      declaredAs: "markdown",
      package: "eslint-plugin-markdown",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["markdown"],
  rules: `...markdown.configs.recommended[2].rules,`,
} satisfies Config;
// EOF
