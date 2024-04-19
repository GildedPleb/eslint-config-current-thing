// PathMark: ./src/definitions/configs/prettier-json.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
  files: ["**/*package.json"],
    ${RULES}
  }`,
  id: "prettier-package-json",
  name: "Prettier Plugin PackageJSON",
  packages: [
    {
      declaredAs: "prettier",
      package: "prettier-plugin-packagejson",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["prettier-package-json"],
  rules: `"prettier-package-json/prettier": [
      2,
      { plugins: ["prettier-plugin-packagejson"] },
    ],`,
} satisfies Config;
// EOF
