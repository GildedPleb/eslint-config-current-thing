// PathMark: ./src/definitions/configs/sdl-react.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "msdl",
  name: "Microsoft SDL",
  nameSecondary: "Node",
  packages: [
    {
      declaredAs: "msdl",
      package: "@microsoft/eslint-plugin-sdl",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["node", "@microsoft/sdl"],
  rules: `// "Recommended" is just a smattering of everything
    ...msdl.configs.node.rules,`,
} satisfies Config;
// EOF
