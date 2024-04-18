// PathMark: ./src/definitions/configs/mdx.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  contextOverride: true,
  definitions: `{
    files: codeBlocks,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    ${RULES}
  }`,
  id: "mdx",
  name: "MDX",
  nameSecondary: "Code-Blocks",
  packages: [
    {
      declaredAs: "* as mdx",
      package: "eslint-plugin-mdx",
      requiresImport: false,
    },
  ],
  requiredPlugins: [],
  rules: `// MDX "recommended" is composed of Overrides, Base, and CodeBlocks but with unneeded conditional logic
    // CodeBlocks:
    ...mdx.configs.codeBlocks.rules,`,
} satisfies Config;
// EOF
