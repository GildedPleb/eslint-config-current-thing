// PathMark: ./src/definitions/configs/sdl-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "msdl",
  name: "Microsoft SDL",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "msdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint", "@microsoft/sdl"],
  rules: `// "Recommended" is just a smattering of everything
    ...msdl.configs.typescript.rules,`,
} satisfies Config;
// EOF
