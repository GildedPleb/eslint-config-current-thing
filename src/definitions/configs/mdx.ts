// PathMark: ./src/definitions/configs/mdx.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    ${RULES}
  }`,
  id: "mdx",
  name: "MDX",
  packages: [
    {
      declaredAs: "* as mdx",
      package: "eslint-plugin-mdx",
      requiresImport: false,
    },
    {
      declaredAs: "remarkLint",
      package: "remark-lint",
      requiresImport: false,
    },
    {
      declaredAs: "remarkLintRecomended",
      package: "remark-preset-lint-recommende",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["mdx", "react"],
  rules: `// MDX "recommended" is composed of Overrides, Base, and CodeBlocks but with unneeded conditional logic
    // Overrides:
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "react/react-in-jsx-scope": 0,
    // Base:
    ...mdx.configs.base.rules,
    `,
} satisfies Config;
// EOF
