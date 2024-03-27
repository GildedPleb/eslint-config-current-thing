// PathMark: ./src/definitions/configs/airbnb-base.ts
import { RULES } from "../../constants";
import type { Config } from ".";

export default {
  definitions: `{
    files,
    ${RULES}
  }`,
  name: "AirBnb Base",
  packages: [
    {
      name: "airbnbBase",
      package: "eslint-config-airbnb-base",
      requiresImport: false,
    },
  ],
  requiredPlugins: ["import"],
  rules: `compat.extends("airbnb-base")[0].rules`,
} satisfies Config;
// EOF
