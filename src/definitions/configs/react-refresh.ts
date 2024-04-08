// PathMark: ./src/definitions/configs/react-refresh.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  id: "react-refresh",
  name: "React Refresh",
  packages: [
    {
      declaredAs: "reactRefresh",
      package: "eslint-plugin-react-refresh",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-refresh"],
  rules: `"react-refresh/only-export-components": 1,`,
} satisfies Config;
// EOF
