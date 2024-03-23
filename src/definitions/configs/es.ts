// PathMark: ./src/definitions/configs/es.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "ES-X",
  packages: [
    { name: "esX", package: "eslint-plugin-es-x", requiresImport: false },
    { name: "es", package: "eslint-plugin-es", requiresImport: false },
  ],
  requiredPlugins: ["es", "es-x"],
  rules: `esX.configs["no-new-in-esnext"].rules`,
} satisfies Config;
// EOF
