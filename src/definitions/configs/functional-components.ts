// PathMark: ./src/definitions/configs/emotion.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "react-prefer-function-component",
  name: "React Prefer Function Component",
  packages: [
    {
      declaredAs: "preferFC",
      package: "eslint-plugin-react-prefer-function-component",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-prefer-function-component"],
  rules: `...preferFC.configs.recommended.rules,`,
} satisfies Config;
// EOF
