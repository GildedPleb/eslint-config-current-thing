// PathMark: ./src/configs/definitions/es.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { "es-x": esX, es },
    ${RULES}
  }`,
  name: "ES-X",
  packages: [
    { name: "esX", package: "eslint-plugin-es-x", requiresImport: true },
    { name: "es", package: "eslint-plugin-es", requiresImport: true },
  ],
  rules: `esX.configs["no-new-in-esnext"].rules`,
} satisfies Config;
// EOF
