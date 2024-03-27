// PathMark: ./src/definitions/configs/react-hooks.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "react-hooks",
  name: "React Hooks",
  packages: [
    {
      name: "reactHooks",
      package: "eslint-plugin-react-hooks",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["react-hooks"],
  rules: `reactHooks.configs.recommended.rules`,
} satisfies Config;
// EOF
