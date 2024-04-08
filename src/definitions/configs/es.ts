// PathMark: ./src/definitions/configs/es.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  id: "es-x",
  name: "ES-X",
  packages: [
    { declaredAs: "esX", package: "eslint-plugin-es-x", requiresImport: false },
    { declaredAs: "es", package: "eslint-plugin-es", requiresImport: false },
  ],
  requiredPlugins: ["es", "es-x"],
  rules: `...esX.configs["no-new-in-esnext"].rules,`,
} satisfies Config;
// EOF
