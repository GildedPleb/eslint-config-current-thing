// PathMark: ./src/definitions/configs/header.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    plugins: { header },
    // No added rule as too customizable, but "header/header" is now available.
    ${RULES}
  }`,
  name: "Header",
  packages: [
    {
      name: "header",
      package: "eslint-plugin-header",
      requiresImport: true,
    },
  ],
} satisfies Config;
// EOF
