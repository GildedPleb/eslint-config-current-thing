// PathMark: ./src/definitions/configs/md.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  contextOverride: true,
  definitions: `{
    files: codeBlocks,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        },
      },
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
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
