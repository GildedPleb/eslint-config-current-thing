// PathMark: ./src/definitions/configs/es.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  ejected: false,
  enabled: true,
  id: "es-x",
  name: "ES-X",
  packages: [
    { declaredAs: "es", package: "eslint-plugin-es", requiresImport: false },
    { declaredAs: "esX", package: "eslint-plugin-es-x", requiresImport: false },
  ],
  requiredPlugins: ["es-x"],
  rules: `...esX.configs["no-new-in-esnext"].rules,`,
} satisfies Config;
// EOF
