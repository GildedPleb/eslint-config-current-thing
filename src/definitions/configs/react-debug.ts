// PathMark: ./src/definitions/configs/react-hooks.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "react-debug",
  name: "React Debug",
  packages: [
    {
      declaredAs: "reactDebug",
      package: "eslint-plugin-react-debug",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-debug"],
  rules: `"react-debug/class-component": "warn",
    "react-debug/function-component": "warn",
    "react-debug/hook": "warn",
    "react-debug/is-from-react": "off",`,
} satisfies Config;
// EOF
