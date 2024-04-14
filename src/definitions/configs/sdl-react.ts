// PathMark: ./src/definitions/configs/sdl-react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ${RULES}
  }`,
  id: "msdl",
  name: "Microsoft SDL",
  nameSecondary: "React",
  packages: [
    {
      declaredAs: "msdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react", "@microsoft/sdl"],
  rules: `// "Recommended" is just a smattering of everything
    ...msdl.configs.react.rules,`,
} satisfies Config;
// EOF
