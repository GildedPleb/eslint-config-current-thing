// PathMark: ./src/definitions/configs/tanstack.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: true,
  enabled: true,
  id: "tanstack",
  name: "Tanstack Query",
  packages: [
    {
      declaredAs: "tanstack",
      package: "@tanstack/eslint-plugin-query",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@tanstack"],
  rules: `"@tanstack/exhaustive-deps": 2,
    "@tanstack/no-rest-destructuring": 1,
    "@tanstack/stable-query-client": 2,
    "@tanstack/no-unstable-deps": 2,
    "@tanstack/infinite-query-property-order": 2,`,
} satisfies Config;
// EOF
