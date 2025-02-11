// PathMark: ./src/definitions/configs/react-naming-convention.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "react-naming-convention",
  name: "React Naming Convention",
  packages: [
    {
      declaredAs: "reactNamingConvention",
      package: "eslint-plugin-react-naming-convention",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-naming-convention"],
  rules: `"react-naming-convention/filename-extension": ["warn", "as-needed"],
    "react-naming-convention/use-state": "warn",`,
} satisfies Config;
// EOF
