// PathMark: ./src/definitions/configs/react-refresh.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "react-refresh": reactRefresh },
    ${RULES}
  }`,
  name: "React Refresh",
  packages: [
    {
      name: "reactRefresh",
      package: "eslint-plugin-react-refresh",
      requiresImport: true,
    },
  ],
  rules: `{ "react-refresh/only-export-components": "warn" }`,
} satisfies Config;
// EOF
