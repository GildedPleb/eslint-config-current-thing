// PathMark: ./src/definitions/configs/unicorn.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "unicorn",
  name: "Unicorn",
  packages: [
    {
      declaredAs: "unicorn",
      package: "eslint-plugin-unicorn",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["unicorn"],
  rules: `...unicorn.configs.recommended.rules,
    // Recommended if using eslint-plugin-markdown (which we are) https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v52.0.0/docs/rules/filename-case.md
    "unicorn/filename-case": [
      2,
      {
        case: "kebabCase",
        ignore: [".*.md$", ".*.md/.*"],
      },
    ],`,
} satisfies Config;
// EOF
