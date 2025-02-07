// PathMark: ./src/definitions/configs/react-compiler.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "react-compiler",
  name: "React Compiler",
  packages: [
    {
      declaredAs: "reactCompiler",
      package: "eslint-plugin-react-compiler",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-compiler"],
  rules: `...reactCompiler.configs.recommended.rules,`,
} satisfies Config;
// EOF
