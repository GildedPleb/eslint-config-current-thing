// PathMark: ./src/definitions/configs/sdl.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "msdl",
  name: "Microsoft SDL",
  packages: [
    {
      declaredAs: "msdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@microsoft/sdl"],
  rules: `// "Recommended" is just a smattering of everything: If Angular ever becomes a thing then we should add the angular modules here.
    ...msdl.configs.common.rules,`,
} satisfies Config;
// EOF
