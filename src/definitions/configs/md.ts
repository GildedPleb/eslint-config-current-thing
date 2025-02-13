// PathMark: ./src/definitions/configs/md.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    language: "markdown/commonmark",
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
    {
      declaredAs: "markdown",
      package: "@eslint/markdown",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["markdown"],
  rules: `...markdown.configs.recommended[0].rules,`,
} satisfies Config;
// EOF
