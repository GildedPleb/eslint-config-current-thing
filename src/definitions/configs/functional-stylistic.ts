// PathMark: ./src/definitions/configs/functional-stylistic.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "functional",
  name: "Functional",
  nameSecondary: "Stylistic",
  packages: [
    {
      declaredAs: "functional",
      package: "eslint-plugin-functional",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["functional"],
  rules: `...functional.configs.stylistic.rules,`,
} satisfies Config;
// EOF
