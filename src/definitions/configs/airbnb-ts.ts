// PathMark: ./src/definitions/configs/airbnb-ts.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "AirBnb-Typescript",
  packages: [
    {
      name: "airbnbTypescript",
      package: "eslint-config-airbnb-typescript",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["@typescript-eslint", "import"],
  rules: `compat.extends("airbnb-typescript")[0].rules`,
} satisfies Config;
// EOF
