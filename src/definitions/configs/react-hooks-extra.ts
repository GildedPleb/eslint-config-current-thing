// PathMark: ./src/definitions/configs/react-hooks.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "react-hooks-extra",
  name: "React Hooks Extra",
  packages: [
    {
      declaredAs: "reactHooksExtra",
      package: "eslint-plugin-react-hooks-extra",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-hooks-extra"],
  rules: `"react-hooks-extra/no-direct-set-state-in-use-effect": "warn",
    "react-hooks-extra/no-useless-custom-hooks": "warn",
    "react-hooks-extra/prefer-use-state-lazy-initialization": "warn",`,
} satisfies Config;
// EOF
