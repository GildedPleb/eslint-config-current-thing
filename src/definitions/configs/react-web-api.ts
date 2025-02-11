// PathMark: ./src/definitions/configs/react-web-api.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "react-web-api",
  name: "React Web API",
  packages: [
    {
      declaredAs: "reactWebAPI",
      package: "eslint-plugin-react-web-api",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-web-api"],
  rules: `"react-web-api/no-leaked-event-listener": "warn",
    "react-web-api/no-leaked-interval": "warn",
    "react-web-api/no-leaked-resize-observer": "warn",
    "react-web-api/no-leaked-timeout": "warn",`,
} satisfies Config;
// EOF
