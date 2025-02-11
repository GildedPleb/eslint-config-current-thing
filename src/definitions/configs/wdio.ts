// PathMark: ./src/definitions/configs/wdio.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    languageOptions: {
      globals: wdio["flat/recommended"].languageOptions.globals,
    },
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "wdio",
  name: "Webdriver IO",
  packages: [
    {
      declaredAs: "wdio",
      package: "eslint-plugin-wdio",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["wdio"],
  rules: `...wdio["flat/recommended"].rules,`,
} satisfies Config;
// EOF
