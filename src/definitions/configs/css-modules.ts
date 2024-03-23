// PathMark: ./src/definitions/configs/css-modules.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "css-modules": cssModules },
    ${RULES}
  }`,
  name: "CSS Modules",
  packages: [
    {
      name: "cssModules",
      package: "eslint-plugin-css-modules",
      requiresImport: true,
    },
  ],
  rules: `{
    ...cssModules.configs.recommended.rules
  }`,
} satisfies Config;
// EOF
