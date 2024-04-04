// PathMark: ./src/definitions/configs/css-modules.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: [...jsxFiles, ...tsxFiles],
    ${RULES}
  }`,
  id: "css-modules",
  name: "CSS Modules",
  packages: [
    {
      name: "cssModules",
      package: "eslint-plugin-css-modules",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["css-modules"],
  rules: `...cssModules.configs.recommended.rules,`,
} satisfies Config;
// EOF
