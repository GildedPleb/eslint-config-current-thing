import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  packages: [
    {
      name: "reactRefresh",
      package: "eslint-plugin-react-refresh",
      requiresImport: true,
    },
  ],
  name: "React Refresh",
  definitions: `{
    files,
    plugins: { "react-refresh": reactRefresh },
    ${RULES}
  }`,
  rules: `{ "react-refresh/only-export-components": "warn" }`,
} satisfies Config;
