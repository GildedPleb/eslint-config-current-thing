// PathMark: ./src/definitions/configs/mdx.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: mdFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "mdx",
  name: "MDX",
  packages: [
    {
      declaredAs: "remarkLintRecommended",
      package: "remark-preset-lint-recommended",
      requiresImport: false,
    },
    {
      declaredAs: "remarkLint",
      package: "remark-lint",
      requiresImport: false,
    },
    {
      declaredAs: "* as mdx",
      package: "eslint-plugin-mdx",
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
