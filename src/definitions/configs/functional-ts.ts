// PathMark: ./src/definitions/configs/functional-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files: tsFiles,
    ${RULES}
  }`,
  id: "functional",
  name: "Functional",
  nameSecondary: "TS",
  packages: [
    {
      declaredAs: "functional",
      package: "eslint-plugin-functional",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint"],
  rules: `...functional.configs["external-typescript-recommended"].rules,`,
} satisfies Config;
// EOF
