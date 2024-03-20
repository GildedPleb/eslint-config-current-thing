// PathMark: ./src/configs/definitions/react-hooks.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "react-hooks": reactHooks },
    ${RULES}
  }`,
  name: "React Hooks",
  packages: [
    {
      name: "reactHooks",
      package: "eslint-plugin-react-hooks",
      requiresImport: true,
    },
  ],
  rules: `reactHooks.configs.recommended.rules`,
} satisfies Config;
// EOF
